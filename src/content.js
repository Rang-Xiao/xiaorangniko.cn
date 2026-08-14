export const DEMO_VIDEO =
  '//player.bilibili.com/player.html?isOutside=true&aid=115342235932775&bvid=BV1xZxzzTE85&cid=32934002860&p=1';

export const profile = {
  name: 'Your Name',
  nameZh: '你的名字',
  initials: 'AB',
  title: 'Your title / role',
  titleZh: '你的头衔 / 角色',
  affiliation: 'Your school or organization · Your major or team',
  affiliationZh: '你的学校或机构 · 你的专业或团队',
  thesis: 'Write one sentence about who you are and what you do.',
  thesisZh: '用一句话介绍你是谁、在做什么。',
  about: 'Write a short paragraph about your background, skills, and what you are currently working on.',
  aboutZh: '用一段话介绍你的背景、技能，以及当前正在做的事情。',
  interests: ['Keyword'],
  interestsZh: ['关键词'],
  emails: ['your@email.com'],
  links: [
    { label: 'GitHub', labelZh: 'GitHub', url: 'https://github.com/Rang-Xiao' },
    { label: 'Blog', labelZh: '博客', url: 'https://xiaorangblog.cn' },
    { label: 'Resume', labelZh: '简历', url: '/attaches/XiaoRangResume.pdf' }
  ]
};

export const heroMetrics = [
  { value: '00', label: 'Metric one', labelZh: '指标一' },
  { value: '00', label: 'Metric two', labelZh: '指标二' }
];

export const highlight = {
  name: 'Highlight project name',
  nameZh: '代表项目名称',
  url: '#',
  docs: '#',
  website: '#',
  report: '#',
  demoVideo: DEMO_VIDEO,
  image: '/img/projects/infengine.png',
  headline: 'Write one line that explains why this project matters.',
  headlineZh: '用一句话说明这个项目的意义。',
  summary: 'Write a paragraph describing what this project is and what it does.',
  summaryZh: '用一段话描述这个项目是什么、能做什么。',
  proposition: 'Write a paragraph about the technical approach or the problem it solves.',
  propositionZh: '用一段话描述技术方案或它解决的问题。',
  layers: [
    {
      title: 'Module title',
      titleZh: '模块标题',
      body: 'Describe this module: what it contains and why it exists.',
      bodyZh: '描述该模块：包含什么、为什么需要它。'
    }
  ],
  capabilities: ['Capability item'],
  capabilitiesZh: ['能力条目']
};

export const researchDirections = [
  {
    title: 'Direction title',
    titleZh: '方向标题',
    body: 'Describe this direction: scope, methods, and what you focus on.',
    bodyZh: '描述该方向：范围、方法，以及你关注的重点。'
  }
];

export const publications = [
  {
    title: 'Paper title goes here',
    authors: '<u>Author One</u>, Author Two, Author Three',
    venue: 'Venue, Year',
    venueZh: '发表刊物 / 会议, 年份',
    level: 'journal',
    levelLabel: 'Label',
    link: '#',
    image: '/img/papers/fema.png',
    intro: 'Write a short summary of the paper: the question, the approach, and the takeaway.',
    introZh: '用一小段话概括论文：问题、方法与结论。',
    featured: true
  }
];

export const projects = [
  {
    name: 'Project name',
    url: '#',
    status: 'Status',
    statusZh: '状态',
    image: '/img/projects/vultorch.png',
    desc: 'Write a one-line summary of the project.',
    descZh: '用一句话概括该项目。',
    detail: 'Write the full description: goals, tech stack, and what you built.',
    detailZh: '填写完整介绍：目标、技术栈，以及你完成的部分。',
    role: 'Your role in this project',
    roleZh: '你在该项目中的角色',
    tags: ['Tag'],
    featured: true
  }
];

export const games = [
  {
    name: 'Game name',
    nameZh: '游戏名称',
    role: 'Your role',
    roleZh: '你的角色',
    desc: 'Write a one-line pitch of the game.',
    descZh: '用一句话介绍这款游戏。',
    detail: 'Write the full description: gameplay, what you built, and highlights.',
    detailZh: '填写完整介绍：玩法、你负责的部分，以及亮点。',
    video: DEMO_VIDEO,
    bilibili: '#',
    awards: 'Award or recognition (optional)',
    awardsZh: '奖项或荣誉（可选）',
    tags: ['Tag']
  }
];

export const awards = [
  {
    title: 'Award or competition name',
    titleZh: '奖项或比赛名称',
    result: 'Result you achieved',
    resultZh: '获得的成绩',
    blurb: 'Write one or two sentences explaining the competition and your result.',
    blurbZh: '用一两句话说明比赛是什么，以及你取得的成绩。'
  }
];

export const education = [
  {
    place: 'School name',
    placeZh: '学校名称',
    date: 'Start — End',
    dateZh: '开始 — 结束',
    role: 'Degree · Major',
    roleZh: '学位 · 专业',
    desc: 'Write about coursework, grades, or anything worth listing.',
    descZh: '填写课程、成绩或其他值得列出的内容。'
  }
];

export const workExperience = [
  {
    place: 'Company name',
    placeZh: '公司名称',
    date: 'Start — End',
    dateZh: '开始 — 结束',
    role: 'Job title · Team',
    roleZh: '职位 · 团队',
    desc: 'Write about your responsibilities and what you delivered.',
    descZh: '填写你的职责，以及交付的成果。'
  }
];
