import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  awards,
  education,
  games,
  heroMetrics,
  highlight,
  profile,
  projects,
  publications,
  researchDirections,
  workExperience
} from './content.js';

const NavigationContext = createContext(null);

const SPA_HREFS = new Set(['/', '/index.html', '/papers.html', '/projects.html', '/games.html', '/awards.html']);

function normalizePathname() {
  let p = window.location.pathname.replace(/\/+$/, '');
  if (p === '') p = '/';
  return p;
}

function pageFromPath() {
  const path = normalizePathname();
  if (path.endsWith('/papers.html') || path === '/papers') return 'papers';
  if (path.endsWith('/projects.html') || path === '/projects') return 'projects';
  if (path.endsWith('/games.html') || path === '/games') return 'games';
  if (path.endsWith('/awards.html') || path === '/awards') return 'awards';
  if (path === '/' || path === '/index.html') return 'home';
  return 'home';
}

function isClientNavigable(href) {
  if (!href) return false;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('mailto:')) return false;
  const pathPart = href.split('#')[0];
  if (pathPart === '' || pathPart === undefined) return false;
  if (!pathPart.startsWith('/')) return false;
  let path = pathPart.replace(/\/+$/, '') || '/';
  if (path === '/index.html') path = '/';
  return SPA_HREFS.has(path);
}

function InternalLink({ href, children, className, ...rest }) {
  const navigate = useContext(NavigationContext);
  if (!isClientNavigable(href)) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={className}
      {...rest}
      onClick={(e) => {
        if (e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate?.(href);
      }}
    >
      {children}
    </a>
  );
}

const DOC_TITLES = {
  home: 'Your Name | Portfolio',
  papers: 'Papers | Your Name',
  projects: 'Projects | Your Name',
  games: 'Games | Your Name',
  awards: 'Awards | Your Name'
};

function detectLang() {
  const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  return list.some((l) => l && l.toLowerCase().startsWith('zh')) ? 'zh' : 'en';
}

function detectTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function usePreference(key, detect) {
  const [value, setValue] = useState(() => localStorage.getItem(key) || detect());

  useEffect(() => {
    localStorage.setItem(key, value);
    document.documentElement.dataset[key] = value;
    if (key === 'lang') document.documentElement.lang = value;
  }, [key, value]);

  return [value, setValue];
}

function useSystemTheme() {
  const [theme, setTheme] = useState(detectTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return [theme, setTheme];
}

function T({ en, zh, lang }) {
  return lang === 'zh' ? zh || en : en;
}

function Html({ value }) {
  return <span dangerouslySetInnerHTML={{ __html: value }} />;
}

function Shell() {
  const [lang, setLang] = usePreference('lang', detectLang);
  const [theme, setTheme] = useSystemTheme();
  const [page, setPage] = useState(() => pageFromPath());
  const isHome = page === 'home';

  const navigate = useCallback((href) => {
    window.history.pushState(null, '', href);
    setPage(pageFromPath());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPop = () => setPage(pageFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title = DOC_TITLES[page] || DOC_TITLES.home;
  }, [page]);

  const toggleLang = () => setLang(lang === 'en' ? 'zh' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <NavigationContext.Provider value={navigate}>
      <div className="app">
        <Masthead lang={lang} page={page} toggleLang={toggleLang} toggleTheme={toggleTheme} theme={theme} />
        <main className="main">
          <div key={page} className="page-transition">
            {isHome ? <Home lang={lang} /> : <ArchivePage lang={lang} page={page} />}
          </div>
        </main>
      </div>
    </NavigationContext.Provider>
  );
}

function Masthead({ lang, page, toggleLang, toggleTheme, theme }) {
  const nav = [
    ['home', '/', 'Home', '主页'],
    ['games', '/games.html', 'Games', '游戏'],
    ['projects', '/projects.html', 'Projects', '项目'],
    ['awards', '/awards.html', 'Awards', '荣誉'],
    ['papers', '/papers.html', 'Papers', '论文']
  ];

  return (
    <header className="masthead">
      <InternalLink className="masthead__brand" href="/">
        <span className="masthead__mark">{profile.initials}</span>
        <span>
          <strong>{lang === 'zh' ? profile.nameZh : profile.name}</strong>
          <small><T en="A game developer who loves digging into technology" zh="一个热爱钻研技术的游戏开发者" lang={lang} /></small>
        </span>
      </InternalLink>
      <nav className="masthead__nav" aria-label="Main navigation">
        {nav.map(([id, href, en, zh]) => (
          <InternalLink key={id} className={page === id ? 'is-active' : ''} href={href}>
            <T en={en} zh={zh} lang={lang} />
          </InternalLink>
        ))}
      </nav>
      <div className="masthead__actions">
        <button type="button" onClick={toggleLang}>{lang === 'en' ? '中' : 'EN'}</button>
        <button type="button" onClick={toggleTheme}>
          {theme === 'dark'
            ? <T en="Light" zh="亮色模式" lang={lang} />
            : <T en="Dark" zh="暗色模式" lang={lang} />}
        </button>
      </div>
    </header>
  );
}

function Home({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <ResearchAndCareer lang={lang} />
      <HighlightFeature lang={lang} />
      <GamePreview lang={lang} />
      <ProjectPreview lang={lang} />
      <Honors lang={lang} />
      <PublicationEvidence lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

function Hero({ lang }) {
  const interests = lang === 'zh' ? profile.interestsZh : profile.interests;
  return (
    <section className="section hero">
      <div className="hero__primary">
        <p className="hero__kicker">
          <T en="GAME DEVELOPMENT · COMPUTER GRAPHICS · SJTU" zh="游戏开发 · 图形学 · 上海交通大学" lang={lang} />
        </p>
        <h1 className="hero__title">
          <T en={`${profile.name} · ${profile.nameZh}`} zh={`${profile.nameZh} · ${profile.name}`} lang={lang} />
        </h1>
        <p className="hero__role"><T en={profile.title} zh={profile.titleZh} lang={lang} /></p>
        <p className="hero__text"><T en={profile.thesis} zh={profile.thesisZh} lang={lang} /></p>
        <p className="hero__text"><T en={profile.about} zh={profile.aboutZh} lang={lang} /></p>
        <div className="hero__tags">
          {interests.map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#highlight"><T en="Highlight" zh="代表项目" lang={lang} /></a>
          <InternalLink className="btn btn--quiet" href="/games.html"><T en="Game work" zh="游戏作品" lang={lang} /></InternalLink>
        </div>
        <div className="hero__contacts">
          {profile.emails.map((email) => <span key={email}>{email}</span>)}
        </div>
      </div>
      <aside className="hero__aside">
        <div className="portrait">
          <img src="/img/profile.jpg" alt={profile.name} />
          <div className="portrait__meta">
            <p><T en={profile.affiliation} zh={profile.affiliationZh} lang={lang} /></p>
            <h2>{lang === 'zh' ? profile.nameZh : profile.name}</h2>
          </div>
        </div>
        <div className="stat-grid">
          {heroMetrics.map((m) => (
            <Metric key={m.label} value={m.value} label={m.label} labelZh={m.labelZh} lang={lang} />
          ))}
        </div>
      </aside>
    </section>
  );
}

function Metric({ value, label, labelZh, lang }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span><T en={label} zh={labelZh} lang={lang} /></span>
    </div>
  );
}

function ResearchAndCareer({ lang }) {
  return (
    <section className="section">
      <header className="section__head">
        <span className="section__id">01</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Focus & path" zh="方向与路径" lang={lang} /></p>
          <h2 className="section__title"><T en="Game development & graphics" zh="游戏与图形学" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T
            en="Game development on one side, computer graphics on the other — the timeline below is where those two threads meet school and industry."
            zh="一边是游戏开发，一边是图形学；下面的时间线就是这两条线与学业、工作交汇的地方。"
            lang={lang}
          />
        </p>
      </header>
      <div className="card-grid">
        {researchDirections.map((item, i) => (
          <article className="card" key={item.title}>
            <div className="card__idx">{String(i + 1).padStart(2, '0')}</div>
            <h3><T en={item.title} zh={item.titleZh} lang={lang} /></h3>
            <p><T en={item.body} zh={item.bodyZh} lang={lang} /></p>
          </article>
        ))}
      </div>
      <div className="two-col research-career__timelines">
        <div>
          <header className="section__head section__head--stack">
            <span className="section__id section__id--sub">01a</span>
            <div>
              <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Academic" zh="学历" lang={lang} /></p>
              <h2 className="section__title section__title--sub"><T en="Education" zh="教育经历" lang={lang} /></h2>
            </div>
          </header>
          <div className="timeline">
            {education.map((item) => (
              <article key={`${item.place}-${item.date}`}>
                <span><T en={item.date} zh={item.dateZh || item.date} lang={lang} /></span>
                <h3><T en={item.place} zh={item.placeZh} lang={lang} /></h3>
                <strong><T en={item.role} zh={item.roleZh} lang={lang} /></strong>
                <p><T en={item.desc} zh={item.descZh} lang={lang} /></p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <header className="section__head section__head--stack">
            <span className="section__id section__id--sub">01b</span>
            <div>
              <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Professional" zh="职业" lang={lang} /></p>
              <h2 className="section__title section__title--sub"><T en="Work experience" zh="工作经历" lang={lang} /></h2>
            </div>
          </header>
          <div className="timeline">
            {workExperience.map((item) => (
              <article key={`${item.place}-${item.date}`}>
                <span><T en={item.date} zh={item.dateZh || item.date} lang={lang} /></span>
                <h3><T en={item.place} zh={item.placeZh} lang={lang} /></h3>
                <strong><T en={item.role} zh={item.roleZh} lang={lang} /></strong>
                <p><T en={item.desc} zh={item.descZh} lang={lang} /></p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightFeature({ lang }) {
  return (
    <section className="section feature" id="highlight">
      <header className="section__head">
        <span className="section__id">02</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Highlight project" zh="代表项目" lang={lang} /></p>
          <h2 className="section__title"><T en={highlight.name} zh={highlight.nameZh} lang={lang} /></h2>
        </div>
        <p className="section__lede"><T en={highlight.headline} zh={highlight.headlineZh} lang={lang} /></p>
      </header>

      <div className="feature__split">
        <div className="media media--feature-video">
          <iframe
            src={highlight.demoVideo}
            title="Project demo"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="feature__copy">
          <p><T en={highlight.summary} zh={highlight.summaryZh} lang={lang} /></p>
          <p><T en={highlight.proposition} zh={highlight.propositionZh} lang={lang} /></p>
          <div className="link-row">
            <a className="btn btn--primary" href={highlight.url} target="_blank" rel="noreferrer">
              <T en="Link one" zh="链接一" lang={lang} />
            </a>
            <a className="btn btn--quiet" href={highlight.website} target="_blank" rel="noreferrer">
              <T en="Link two" zh="链接二" lang={lang} />
            </a>
          </div>
        </div>
      </div>

      <div className="layer-grid">
        {highlight.layers.map((layer) => (
          <article className="layer" key={layer.title}>
            <h3><T en={layer.title} zh={layer.titleZh} lang={lang} /></h3>
            <p><Html value={lang === 'zh' ? (layer.bodyZh || layer.body) : layer.body} /></p>
          </article>
        ))}
      </div>

      <div className="capability">
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Implementation" zh="实现范围" lang={lang} /></p>
          <h3><T en="Describe the technical scope here." zh="在此填写技术范围说明。" lang={lang} /></h3>
        </div>
        <ul>
          {(lang === 'zh' ? highlight.capabilitiesZh : highlight.capabilities).map((cap) => <li key={cap}>{cap}</li>)}
        </ul>
      </div>
    </section>
  );
}

function PublicationEvidence({ lang }) {
  return (
    <section className="section">
      <header className="section__head">
        <span className="section__id">06</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Papers" zh="论文" lang={lang} /></p>
          <h2 className="section__title"><T en="Selected publications" zh="代表论文" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T
            en="Write a short intro for your publications here."
            zh="在此填写论文部分的引导语。"
            lang={lang}
          />
        </p>
      </header>
      <div className="list-gap">
        {publications.filter((p) => p.featured).map((paper) => <PaperCard key={paper.title} paper={paper} lang={lang} />)}
      </div>
      <InternalLink className="text-link" href="/papers.html"><T en="All publications" zh="全部论文" lang={lang} /></InternalLink>
    </section>
  );
}

function ProjectPreview({ lang }) {
  return (
    <section className="section">
      <header className="section__head">
        <span className="section__id">04</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Projects" zh="项目" lang={lang} /></p>
          <h2 className="section__title"><T en="Software" zh="软件项目" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T
            en="Write a short intro for your projects here."
            zh="在此填写项目部分的引导语。"
            lang={lang}
          />
        </p>
      </header>
      <div className="project-grid">
        {projects.filter((p) => p.featured).map((project) => <ProjectCard key={project.name} project={project} lang={lang} />)}
      </div>
      <InternalLink className="text-link" href="/projects.html"><T en="All projects" zh="全部项目" lang={lang} /></InternalLink>
    </section>
  );
}

function GamePreview({ lang }) {
  return (
    <section className="section">
      <header className="section__head">
        <span className="section__id">03</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Games" zh="游戏" lang={lang} /></p>
          <h2 className="section__title"><T en="Game work" zh="游戏作品" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T en="Write a short intro for your game work here." zh="在此填写游戏作品部分的引导语。" lang={lang} />
        </p>
      </header>
      <div className="game-grid game-grid--home">
        {games.slice(0, 5).map((game) => <GameCard key={game.name} game={game} lang={lang} />)}
      </div>
      <InternalLink className="text-link" href="/games.html"><T en="All games" zh="全部游戏" lang={lang} /></InternalLink>
    </section>
  );
}

function Honors({ lang }) {
  return (
    <section className="section">
      <header className="section__head section__head--stack">
        <span className="section__id">05</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Awards" zh="荣誉" lang={lang} /></p>
          <h2 className="section__title"><T en="Honors" zh="奖项" lang={lang} /></h2>
        </div>
        <p className="section__lede section__lede--narrow">
          <T
            en="Write a short intro for your awards here."
            zh="在此填写荣誉部分的引导语。"
            lang={lang}
          />
        </p>
      </header>
      <div className="award-list award-list--verbose">
        {awards.map((item) => (
          <article key={item.title}>
            <h3><T en={item.title} zh={item.titleZh} lang={lang} /></h3>
            <p className="award-list__result"><T en={item.result} zh={item.resultZh} lang={lang} /></p>
            <p className="award-list__blurb"><T en={item.blurb} zh={item.blurbZh} lang={lang} /></p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PaperCard({ paper, lang }) {
  const body = (
    <>
      <span className={`badge ${paper.level === 'ccf-a' ? 'badge--ccf-a' : ''} ${paper.level === 'journal' ? 'badge--journal' : ''}`}>{paper.levelLabel}</span>
      <h3>{paper.title}</h3>
      <p><Html value={paper.authors} /></p>
      {(paper.intro || paper.introZh) && (
        <p className="paper-card__intro"><T en={paper.intro} zh={paper.introZh || paper.intro} lang={lang} /></p>
      )}
      <small><T en={paper.venue} zh={paper.venueZh} lang={lang} /></small>
    </>
  );

  return (
    <article className="paper-card">
      {paper.link ? <a href={paper.link} target="_blank" rel="noreferrer">{body}</a> : body}
    </article>
  );
}

function ProjectCard({ project, lang }) {
  return (
    <article className="project-card">
      <a
        className="project-card__media"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={project.image}
          alt={project.name}
          onError={(e) => { e.currentTarget.parentElement?.classList.add('is-missing'); }}
        />
      </a>
      <div className="project-card__body">
        <span className="badge">{lang === 'zh' ? project.statusZh : project.status}</span>
        <h3><a href={project.url} target="_blank" rel="noreferrer">{project.name}</a></h3>
        <p className="project-card__summary"><T en={project.desc} zh={project.descZh} lang={lang} /></p>
        {project.detail && (
          <p className="project-card__detail">
            <Html value={lang === 'zh' ? (project.detailZh || project.detail) : project.detail} />
          </p>
        )}
        <strong><T en={project.role} zh={project.roleZh} lang={lang} /></strong>
        <TagRow tags={project.tags} />
      </div>
    </article>
  );
}

function GameCard({ game, lang }) {
  return (
    <article className="game-card">
      <div className="video-frame">
        <iframe src={game.video} title={game.name} loading="lazy" allowFullScreen />
      </div>
      <div>
        <h3><T en={game.name} zh={game.nameZh} lang={lang} /></h3>
        <strong><T en={game.role} zh={game.roleZh} lang={lang} /></strong>
        <p className="game-card__summary"><T en={game.desc} zh={game.descZh} lang={lang} /></p>
        {game.detail && (
          <p className="game-card__detail">
            <Html value={lang === 'zh' ? (game.detailZh || game.detail) : game.detail} />
          </p>
        )}
        {(game.awards || game.awardsZh) && (
          <small><T en={game.awards} zh={game.awardsZh} lang={lang} /></small>
        )}
        {game.bilibili && (
          <p className="game-card__links">
            <a href={game.bilibili} target="_blank" rel="noreferrer">Bilibili</a>
          </p>
        )}
        <TagRow tags={game.tags} />
      </div>
    </article>
  );
}

function TagRow({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => <span key={tag}>{tag}</span>)}
    </div>
  );
}

function ArchivePage({ page, lang }) {
  const config = {
    papers: {
      eyebrow: 'Publication archive',
      eyebrowZh: '论文档案',
      title: 'Research outputs',
      titleZh: '研究产出',
      intro: 'Write a short intro for the publication archive.',
      introZh: '在此填写论文归档页的引导语。',
      items: publications,
      render: (item) => <PaperCard key={item.title} paper={item} lang={lang} />
    },
    projects: {
      eyebrow: 'Project archive',
      eyebrowZh: '项目档案',
      title: 'Systems & tools',
      titleZh: '系统与工具',
      intro: 'Write a short intro for the project archive.',
      introZh: '在此填写项目归档页的引导语。',
      items: projects,
      render: (item) => <ProjectCard key={item.name} project={item} lang={lang} />
    },
    games: {
      eyebrow: 'Games',
      eyebrowZh: '游戏',
      title: 'Portfolio',
      titleZh: '作品集',
      intro: 'Write a short intro for the game archive.',
      introZh: '在此填写游戏归档页的引导语。',
      items: games,
      render: (item) => <GameCard key={item.name} game={item} lang={lang} />
    },
    awards: {
      eyebrow: 'Awards',
      eyebrowZh: '荣誉',
      title: 'Honors',
      titleZh: '奖项',
      intro: 'Write a short intro for the award archive.',
      introZh: '在此填写荣誉归档页的引导语。',
      items: awards,
      render: (item) => (
        <article className="award-card" key={item.title}>
          <h3><T en={item.title} zh={item.titleZh} lang={lang} /></h3>
          <p className="award-list__result"><T en={item.result} zh={item.resultZh} lang={lang} /></p>
          <p className="award-list__blurb"><T en={item.blurb} zh={item.blurbZh} lang={lang} /></p>
        </article>
      )
    }
  }[page];

  return (
    <>
      <section className="archive-hero">
        <p className="eyebrow"><T en={config.eyebrow} zh={config.eyebrowZh} lang={lang} /></p>
        <h1><T en={config.title} zh={config.titleZh} lang={lang} /></h1>
        <p><T en={config.intro} zh={config.introZh} lang={lang} /></p>
      </section>
      <section className={`archive-list ${page}`}>
        {config.items.map(config.render)}
      </section>
      <Footer lang={lang} />
    </>
  );
}

function Footer({ lang }) {
  return (
    <footer className="footer">
      <div>
        <strong>{lang === 'zh' ? profile.nameZh : profile.name}</strong>
        <p><T en="A game developer who loves digging into technology" zh="一个热爱钻研技术的游戏开发者" lang={lang} /></p>
      </div>
      <div className="footer-links">
        {profile.links.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            <T en={link.label} zh={link.labelZh || link.label} lang={lang} />
          </a>
        ))}
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<Shell />);
