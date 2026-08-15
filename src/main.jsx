import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  awards,
  education,
  games,
  heroMetrics,
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
  home: 'Rang Xiao',
  papers: 'Papers | Rang Xiao',
  projects: 'Projects | Rang Xiao',
  games: 'Games | Rang Xiao',
  awards: 'Awards | Rang Xiao'
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

function VideoEmbed({ src, title, poster }) {
  if (!src) return null;
  const isFile = /\.(mp4|webm|ogv|ogg|mov|m4v)(\?.*)?$/i.test(src);
  if (isFile) {
    return (
      <video src={src} title={title} poster={poster} controls preload="metadata" playsInline />
    );
  }
  return <iframe src={src} title={title} loading="lazy" allowFullScreen />;
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

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
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
      <GamePreview lang={lang} />
      <ProjectPreview lang={lang} />
      <Honors lang={lang} />
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
          <InternalLink className="btn btn--primary" href="/games.html"><T en="Game work" zh="游戏作品" lang={lang} /></InternalLink>
          <InternalLink className="btn btn--quiet" href="/projects.html"><T en="Projects" zh="项目" lang={lang} /></InternalLink>
        </div>
        <div className="hero__contacts">
          {profile.emails.map((email) => <span key={email}>{email}</span>)}
        </div>
      </div>
      <aside className="hero__aside">
        <div className="portrait">
          <img src="/img/profile.jpg" alt={lang === 'zh' ? profile.nameZh : profile.name} />
          <div className="portrait__meta">
            <p><T en={profile.affiliation} zh={profile.affiliationZh} lang={lang} /></p>
            <h2>{lang === 'zh' ? profile.nameZh : profile.name}</h2>
          </div>
        </div>
        <div className="stat-grid">
          {heroMetrics.map((m) => (
            <Metric key={m.label} value={m.value} valueZh={m.valueZh} label={m.label} labelZh={m.labelZh} lang={lang} />
          ))}
        </div>
      </aside>
    </section>
  );
}

function Metric({ value, valueZh, label, labelZh, lang }) {
  return (
    <div className="stat">
      <strong>{lang === 'zh' ? valueZh || value : value}</strong>
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
          <h2 className="section__title"><T en="Games & computing" zh="游戏与计算机技术" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T
            en="Centered on game development, I study the knowledge it calls for and grow through both learning and practice."
            zh="围绕游戏开发，学习需要用到的知识，学习与实践相长。"
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

function ProjectPreview({ lang }) {
  return (
    <section className="section">
      <header className="section__head">
        <span className="section__id">03</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Projects" zh="项目" lang={lang} /></p>
          <h2 className="section__title"><T en="Learning projects" zh="学习项目" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T
            en="Projects completed while studying computer graphics."
            zh="学习图形学做过的项目。"
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
        <span className="section__id">02</span>
        <div>
          <p className="eyebrow" style={{ margin: '0 0 0.5rem' }}><T en="Games" zh="游戏" lang={lang} /></p>
          <h2 className="section__title"><T en="Game work" zh="游戏作品" lang={lang} /></h2>
        </div>
        <p className="section__lede">
          <T en="Independent and team game projects, from prototypes to playable experiences." zh="从原型探索到可游玩的完整体验，记录独立与团队完成的游戏作品。" lang={lang} />
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
            en="Competition results and milestones from game development and study."
            zh="记录游戏开发与学习过程中的竞赛成果和重要节点。"
            lang={lang}
          />
        </p>
      </header>
      <div className="award-list award-list--verbose">
        {awards.map((item) => <AwardItem key={item.title} item={item} lang={lang} />)}
      </div>
    </section>
  );
}

function AwardItem({ item, lang, className = 'award-list__item' }) {
  const media = item.image && (
    <img src={item.image} alt={lang === 'zh' ? item.titleZh : item.title} loading="lazy" />
  );
  return (
    <article id={item.id} className={item.image ? `${className} award-list__item--media` : className}>
      <div className="award-list__body">
        {(item.date || item.dateZh) && (
          <p className="award-list__date"><T en={item.date} zh={item.dateZh} lang={lang} /></p>
        )}
        <h3><T en={item.title} zh={item.titleZh} lang={lang} /></h3>
        <p className="award-list__result"><T en={item.result} zh={item.resultZh} lang={lang} /></p>
        <p className="award-list__blurb"><T en={item.blurb} zh={item.blurbZh} lang={lang} /></p>
        {item.link && !item.image && (
          <p className="award-list__link">
            <a href={item.link} target="_blank" rel="noreferrer">
              <T en={item.linkLabel || 'Coverage'} zh={item.linkLabelZh || item.linkLabel || '相关报道'} lang={lang} />
            </a>
          </p>
        )}
      </div>
      {media && (
        item.link ? (
          <a
            className="award-list__media"
            href={item.link}
            target="_blank"
            rel="noreferrer"
            title={lang === 'zh' ? item.linkLabelZh || '相关报道' : item.linkLabel || 'Coverage'}
          >
            {media}
          </a>
        ) : (
          <div className="award-list__media">{media}</div>
        )
      )}
    </article>
  );
}

function PaperCard({ paper, lang }) {
  const body = (
    <>
      <span className={`badge ${paper.level === 'ccf-a' ? 'badge--ccf-a' : ''} ${paper.level === 'journal' ? 'badge--journal' : ''}`}><T en={paper.levelLabel} zh={paper.levelLabelZh || paper.levelLabel} lang={lang} /></span>
      <h3><T en={paper.title} zh={paper.titleZh || paper.title} lang={lang} /></h3>
      <p><Html value={paper.authors} /></p>
      {(paper.intro || paper.introZh) && (
        <p className="paper-card__intro"><T en={paper.intro} zh={paper.introZh || paper.intro} lang={lang} /></p>
      )}
      <small><T en={paper.venue} zh={paper.venueZh} lang={lang} /></small>
    </>
  );

  return (
    <article className={`paper-card${paper.image ? ' paper-card--with-image' : ''}`}>
      {paper.image && (
        paper.link ? (
          <a className="paper-card__media" href={paper.link} target="_blank" rel="noreferrer">
            <img src={paper.image} alt={lang === 'zh' ? paper.titleZh || paper.title : paper.title} />
          </a>
        ) : (
          <div className="paper-card__media"><img src={paper.image} alt={lang === 'zh' ? paper.titleZh || paper.title : paper.title} /></div>
        )
      )}
      <div className="paper-card__body">
        {paper.link ? <a href={paper.link} target="_blank" rel="noreferrer">{body}</a> : body}
      </div>
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
        <VideoEmbed src={game.video} title={lang === 'zh' ? game.nameZh : game.name} poster={game.videoPoster} />
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
        {game.awardLinks?.length > 0 && (
          <p className="game-card__links">
            <T en="Awards: " zh="获奖：" lang={lang} />
            {game.awardLinks.map((award, index) => (
              <React.Fragment key={award.href}>
                {index > 0 && ' · '}
                <InternalLink href={award.href}><T en={award.label} zh={award.labelZh} lang={lang} /></InternalLink>
              </React.Fragment>
            ))}
          </p>
        )}
        {game.bilibili && (
          <p className="game-card__links">
            <a href={game.bilibili} target="_blank" rel="noreferrer">Bilibili</a>
          </p>
        )}
        <TagRow tags={game.tags} lang={lang} />
      </div>
    </article>
  );
}

function TagRow({ tags, lang }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => {
        const en = typeof tag === 'string' ? tag : tag.en;
        const zh = typeof tag === 'string' ? tag : tag.zh;
        return <span key={en}><T en={en} zh={zh} lang={lang} /></span>;
      })}
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
      intro: 'Research and modeling work that turns technical questions into practical solutions.',
      introZh: '记录将技术问题转化为实际解决方案的研究与建模工作。',
      items: publications,
      render: (item) => <PaperCard key={item.title} paper={item} lang={lang} />
    },
    projects: {
      eyebrow: 'Projects',
      eyebrowZh: '项目',
      title: 'Learning projects',
      titleZh: '学习项目',
      intro: 'Projects completed while studying computer graphics.',
      introZh: '学习图形学做过的项目。',
      items: projects,
      render: (item) => <ProjectCard key={item.name} project={item} lang={lang} />
    },
    games: {
      eyebrow: 'Games',
      eyebrowZh: '游戏',
      title: 'Portfolio',
      titleZh: '作品集',
      intro: 'Independent and team game projects, from prototypes to playable experiences.',
      introZh: '收录独立与团队完成的游戏作品，从原型探索到可游玩的完整体验。',
      items: games,
      render: (item) => <GameCard key={item.name} game={item} lang={lang} />
    },
    awards: {
      eyebrow: 'Awards',
      eyebrowZh: '荣誉',
      title: 'Honors',
      titleZh: '奖项',
      intro: 'Competition results and milestones from game development and study.',
      introZh: '记录游戏开发与学习过程中的竞赛成果和重要节点。',
      items: awards,
      render: (item) => <AwardItem key={item.title} item={item} lang={lang} className="award-card" />
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
