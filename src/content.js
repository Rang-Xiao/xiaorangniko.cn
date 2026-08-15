export const DEMO_VIDEO =
  '//player.bilibili.com/player.html?isOutside=true&aid=115342235932775&bvid=BV1xZxzzTE85&cid=32934002860&p=1';

export const profile = {
  name: 'Rang Xiao',
  nameZh: '肖壤',
  initials: 'RX',
  title: 'Always a gamer',
  titleZh: '永远做一个玩家',
  affiliation: 'Shanghai Jiao Tong University · School of Computer Science',
  affiliationZh: '上海交通大学 · 计算机学院',
  thesis: 'Welcome. I am a game developer building the games I love and enjoying the technology behind them.',
  thesisZh: '欢迎来到我的主页。我是一名游戏开发者，在做自己热爱的游戏，也喜欢钻研技术。',
  about:
    'CS undergraduate at SJTU (IEEE Pilot Class). I work with Unity and C#/C++ on games, developing core gameplay and designer-facing tools, and have led multi-person game development teams as lead programmer. I am currently interning with the Where Winds Meet client tools team at NetEase Games while running a student game studio.',
  aboutZh:
    '上海交通大学计算机科学与技术（IEEE 试点班）本科在读。善于用 Unity 与 C#/C++ 做游戏，负责核心玩法与策划侧工具的开发，曾作为主程序带过多人的游戏开发团队。目前在网易互娱《燕云十六声》客户端工具组实习，同时经营着一个学生游戏工作室。',
  interests: ['Unity', 'C++', 'C#'],
  interestsZh: ['Unity', 'C++', 'C#'],
  emails: ['grinner0215@gmail.com', 'grinner1729@sjtu.edu.cn'],
  links: [
    { label: 'GitHub', labelZh: 'GitHub', url: 'https://github.com/Rang-Xiao' },
    { label: 'BLOG', labelZh: 'BLOG', url: 'https://xiaorangblog.cn' },
    { label: 'RESUME', labelZh: 'RESUME', url: '/attaches/XiaoRangResume.pdf' }
  ]
};

export const heroMetrics = [
  { value: '10+', valueZh: '10+', label: 'games developed', labelZh: '开发游戏数量' },
  { value: '300k+', valueZh: '30w+', label: 'studio funding (CNY)', labelZh: '工作室资金' }
];

export const researchDirections = [
  {
    title: 'Game development',
    titleZh: '游戏开发',
    body:
      'Client systems built mainly with Unity and C#, plus editor tools that make life easier for designers.',
    bodyZh:
      '以 Unity 与 C# 为主的客户端系统开发，也会做一些方便策划的编辑器工具。'
  },
  {
    title: 'Computer graphics',
    titleZh: '图形学',
    body:
      'Learning rendering from the ground up: MVP transforms, software rasterization, Blinn-Phong shading, and ray tracing, while learning Unity’s Universal Render Pipeline (URP).',
    bodyZh:
      '从底层理解渲染：MVP 变换、软光栅、Blinn-Phong 光照与光线追踪，同时在学习URP。'
  },
  {
    title: 'Computer networking',
    titleZh: '计算机网络',
    body:
      'The networking side of multiplayer games: architecture and state synchronization, something I am still working my way through.',
    bodyZh:
      '联机游戏所需的网络架构与状态同步，还在慢慢摸索。'
  }
];

export const publications = [
  {
    title: 'Multilevel Optimization of UAV Smoke-Screen Deployment Strategies',
    titleZh: '基于多层次优化的无人机烟幕投放策略研究',
    authors: '<u>Rang Xiao</u>',
    venue: 'Sep 2025',
    venueZh: '2025.09',
    level: 'journal',
    levelLabel: 'Mathematical modeling',
    levelLabelZh: '数学建模',
    link: '/attaches/BombPaper.pdf',
    image: '/img/papers/bomb.png',
    intro: 'Based on Problem A of the 2025 China Undergraduate Mathematical Contest in Modeling, this study models an in-game combat scene and optimizes UAV smoke-screen deployment with geometric visibility analysis and particle-swarm optimization.',
    introZh: '源自 2025 年全国大学生数学建模竞赛 A 题，将对抗情境建模为游戏场景；结合几何可见性判定与粒子群优化，求解无人机烟幕的最优投放策略。',
    featured: true
  }
];

export const projects = [
  {
    name: 'Blinn-Phong Shading Model',
    url: 'https://github.com/Rang-Xiao/GAMES101-Solution-Niko',
    status: 'GAMES101 Assignment',
    statusZh: 'GAMES101 作业',
    image: '/img/projects/blingphong.png',
    desc: 'A software-rasterizer shader implementing ambient, diffuse, and specular Blinn-Phong lighting.',
    descZh: '在软光栅器中实现环境光、漫反射与高光项的 Blinn-Phong 着色模型。',
    detail: 'Built while studying GAMES101. The assignment also implements normal and texture shaders, bilinear texture sampling, and bump/displacement mapping.',
    detailZh: '学习 GAMES101 课程完成的作业；还实现了法线与纹理着色器、双线性纹理采样，以及凹凸/位移贴图。',
    role: 'Individual coursework implementation',
    roleZh: '个人课程作业实现',
    tags: ['C++', 'Eigen', 'Software Rasterization', 'Blinn-Phong'],
    featured: true
  },
  {
    name: 'Path Tracing Renderer',
    url: 'https://github.com/Rang-Xiao/GAMES101-Solution-Niko',
    status: 'GAMES101 Assignment',
    statusZh: 'GAMES101 作业',
    image: '/img/projects/pathTracing.png',
    desc: 'A Monte Carlo path tracer for global illumination, rendered with progressive multi-sample accumulation.',
    descZh: '使用蒙特卡洛路径追踪与渐进多重采样累积实现全局光照渲染。',
    detail: 'Built while studying GAMES101. It extends the earlier ray tracer and BVH acceleration work with indirect illumination, Russian roulette termination, and area-light sampling.',
    detailZh: '学习 GAMES101 课程完成的作业；在此前的光线追踪与 BVH 加速基础上，加入间接光照、俄罗斯轮盘赌终止与区域光采样。',
    role: 'Individual coursework implementation',
    roleZh: '个人课程作业实现',
    tags: ['C++', 'Monte Carlo', 'Path Tracing', 'BVH'],
    featured: true
  }
];

export const games = [
  {
    name: 'Cast Syndrome',
    nameZh: '卡斯特症候群',
    role: 'Producer / Programmer',
    roleZh: '制作人 / 程序',
    desc: 'Play as Kaka, a phantom-thief girl who uses a viewfinder to warp through a neon city and pull off impossible capers.',
    descZh: '扮演怪盗少女小卡，利用取景框穿梭于霓虹都市，展开不可思议的行动。',
    detail:
      'The viewfinder behaves like a portal: enter through one boundary and exit from the opposite side. It also interacts with environmental props, turning teleportation into the basis for traversal and puzzles.<br /><br />I designed and implemented the core teleportation mechanic, level elements, save system, stylized UI and localization systems; designed the onboarding flow; and took ownership of the overall player experience.',
    detailZh:
      '取景框像传送门一样工作：角色可从边界一侧穿入、从对侧穿出。它不仅能够传送角色，还能与场景中的多种道具交互，以此完成移动、解谜与闯关。<br /><br />我设计并实现了核心传送机制、关卡元素、存档系统、风格化 UI 系统和本地化系统，设计新手引导流程，并负责整体玩家体验的把关。',
    video: '/media/castsyndrome.mp4',
    awardLinks: [
      {
        label: 'Gold Award — Tencent LIGHTSPEED STUDIOS Game Competition',
        labelZh: '光子游戏大赛高校赛道金奖',
        href: '/awards.html#tencent-lightspeed'
      },
      {
        label: 'First Prize & Best Innovation Award — NetEase ThunderFire Collegiate Game Design Competition',
        labelZh: '网易雷火高校游戏设计大赛一等奖及最佳创新奖',
        href: '/awards.html#netease-thunder-fire'
      }
    ],
    tags: [
      { en: 'Unity', zh: 'Unity' },
      { en: 'Platformer', zh: '平台跳跃' },
      { en: 'Puzzle', zh: '解谜' },
      { en: '2D', zh: '2D' }
    ]
  },
  {
    name: 'Unknowable Domain',
    nameZh: '不可知域',
    role: 'Lead Designer / Programmer',
    roleZh: '主策 / 程序',
    desc: 'A platformer where platforms disappear when they are obscured.',
    descZh: '平台跳跃游戏，但是平台被挡住就会消失。',
    detail:
      'Players search for the best viewing angle by reading the spatial relationship between the character, camera and level elements. Repositioning changes foreground occlusion: hidden platforms disappear, turning apparent barriers into new routes.<br /><br />Working from the game jam theme “Hide,” I proposed the core mechanic and implemented every game system.',
    detailZh:
      '玩家通过观察角色、摄像机与场景元素的位置关系，寻找最佳观察角度。调整自身位置可以改变前景与关卡元素的遮挡关系，让被遮住的平台消失，将原本无法通过的障碍转化为新的路径。<br /><br />结合 Game Jam 主题“藏”，我提出了核心玩法构想，并负责全部功能的实现。',
    video: '/media/unveiledomain.mp4',
    awardLinks: [
      {
        label: '3rd Place in the NetEase MINI-GAME On-site Vote',
        labelZh: '网易 MINI-GAME 线下投票全场第三',
        href: '/awards.html#netease-mini-game'
      }
    ],
    tags: [
      { en: 'Unity', zh: 'Unity' },
      { en: 'Platformer', zh: '平台跳跃' },
      { en: 'Puzzle', zh: '解谜' },
      { en: '2D', zh: '2D' }
    ]
  },
  {
    name: 'Dusk Rush',
    nameZh: '暴走黄昏街',
    role: 'Lead Programmer',
    roleZh: '主程',
    desc: 'A punchy deckbuilding roguelite mobile game—and a certified time thief.',
    descZh: '爽感十足的卡牌肉鸽割草手游，时间剥夺者。',
    detail:
      'Showcased and pitched on site at ChinaJoy 2026. Players trigger card battles, gather resources and encounter special events while exploring, building each run through cards, gems and attribute growth.<br /><br />I built the procedural map generator around room topology and gameplay variants, with seeded generation, layout constraints, layered resource placement and retry safeguards to ensure connectivity and complete objectives. I also created an extensible exploration-object base class and factory workflow for configuration-driven content.<br /><br />As lead programmer, I designed the character and progression data model for base stats, starting decks, experience curves, energy and ultimate abilities; coordinated runtime state across exploration and combat; and separated the client-code and configuration-resource repositories to reduce cross-team branch conflicts.',
    detailZh:
      '项目于 2026 ChinaJoy 展出并完成现场路演。玩家在探索中触发卡牌战斗、拾取资源与特殊事件，并通过卡牌、宝石和属性成长构建局内流派。<br /><br />我基于房间拓扑与玩法变体配置实现随机地图生成，支持随机种子、布局约束、资源分层投放及失败重试，保障地图可连通与玩法目标完整；同时构建探索对象基类及工厂生成机制，以统一接口支持配置化内容扩展。<br /><br />作为主程，我设计了角色与局内外成长数据结构，统一协调探索和战斗系统中的生命、金币、经验、卡组、宝石及属性状态；并将客户端代码仓库与配置资源仓库解耦，降低团队协作中的分支干扰。',
    video: '/media/duskrush.mp4',
    tags: [
      { en: 'Tuanjie Engine', zh: '团结引擎' },
      { en: 'Card Game', zh: '卡牌' },
      { en: 'Roguelite', zh: '肉鸽' },
      { en: 'Mobile', zh: '手游' }
    ]
  },
  {
    name: 'Dream of the Goldfish',
    nameZh: '金鱼之梦',
    role: '2025 miHoYo Game Design Competition Entry',
    roleZh: '2025 米哈游策划大赛参赛作品',
    desc: 'A narrative puzzle game about life and friendship, told through a warm world and hand-drawn illustrations.',
    descZh: '一款讲述友情与生命的剧情向解谜游戏，以温暖的世界和手绘插画呈现故事。',
    detail:
      'Ryan, a boy with SCID, has spent his life inside a sealed sterile capsule. The player becomes Echo, his imaginary friend, and takes him beyond the hospital to meet the world he cannot touch—leaving open whether their journey is fantasy or reality.<br /><br />Bright, healing low-poly scenes and hand-drawn story illustrations soften the tragic premise and foreground companionship, freedom and love. By day, players manipulate objects and moving shadows to keep the capsule out of the light; by night, they use a flashlight to repel spiked insects and protect it.',
    detailZh:
      '患有 SCID 的男孩莱恩从小生活在全封闭的无菌胶囊仓中。玩家扮演他因隔离与孤独而产生的臆想朋友埃科，推着胶囊仓离开病房，带他认识这个无法触碰的世界；旅程究竟是幻想还是现实，则留给玩家判断。<br /><br />游戏以明媚治愈的 Low-poly 场景和手绘剧情插画弱化悲剧感，突出陪伴、自由与爱的温暖内核。白天需要与物体和动态光影互动，让胶囊仓避开光线；夜晚则使用手电筒驱散带刺昆虫，保护胶囊仓。',
    video:
      '//player.bilibili.com/player.html?isOutside=true&aid=115559836425554&bvid=BV1AMCdBqEao&cid=34051131770&p=1',
    bilibili: 'https://www.bilibili.com/video/BV1AMCdBqEao',
    tags: [
      { en: 'Unity', zh: 'Unity' },
      { en: 'Narrative', zh: '剧情向' },
      { en: 'Heartwarming', zh: '治愈' },
      { en: '3D', zh: '3D' }
    ]
  },
  {
    name: 'Kitchen Chaos',
    nameZh: '厨房',
    role: 'Solo Unity Learning Project',
    roleZh: 'Unity 个人学习项目',
    desc: 'Overcooked, but the two players can fight each other.',
    descZh: '胡闹厨房，但是两个人可以互殴。',
    detail:
      'Built while I was learning Unity, this project uses Netcode to support online multiplayer and extends the familiar co-op cooking rules into a head-to-head mode. Every served dish belongs to the player who delivers it, and the player with the most dishes wins—adding direct competition and more replayability.',
    detailZh:
      '这是我初学 Unity 时完成的项目，基于 Netcode 框架实现联机功能，并在现有合作烹饪规则上扩展出双人对战：谁上了菜，菜就属于谁，最终比较双方完成的菜品数量，显著提升了可玩性和对抗性。',
    video: DEMO_VIDEO,
    bilibili: 'https://www.bilibili.com/video/BV1xZxzzTE85',
    tags: [
      { en: 'Unity', zh: 'Unity' },
      { en: 'Online Multiplayer', zh: '多人联机' },
      { en: 'Party', zh: '派对' },
      { en: 'Management Sim', zh: '模拟经营' }
    ]
  }
];

export const awards = [
  {
    id: 'netease-mini-game',
    title: 'NetEase Games Campus MINI-GAME Challenge',
    titleZh: '网易游戏高校 MINI-GAME 挑战赛',
    date: 'Jul 2026',
    dateZh: '2026.07',
    result: '3rd place in the on-site vote',
    resultZh: '线下投票第三名',
    blurb:
      'Over 500 teams from universities across China entered, and 32 made the finals. The 48-hour game jam tested our team’s creativity and execution under intense time pressure; our original entry, Unknowable Domain, placed third in the on-site vote.',
    blurbZh:
      '500 余支来自中国高校的队伍参与，32 支进入决赛。决赛采用 48h Game Jam 形式，考验了我们团队短时间高强度下的创造力和执行力。我们的原创作品《不可知域》获得线下投票第三的好成绩。',
    link: 'https://mp.weixin.qq.com/s/pkc3OEa6kh4l0k7KmvEmSg',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/neteaseminigame.JPG'
  },
  {
    id: 'tencent-lightspeed',
    title: 'Tencent LIGHTSPEED STUDIOS Game Competition (College Track)',
    titleZh: '光子游戏大赛（高校赛道）',
    date: 'Jul 2026',
    dateZh: '2026.07',
    result: 'Gold Award',
    resultZh: '金奖',
    blurb:
      'An open game-making competition hosted by Tencent LIGHTSPEED STUDIOS. It ran for seven months, drew over 5,200 entries, and offered a prize pool of more than CNY 2 million. Fighting through to win gold in the college track was a meaningful step forward for our team.',
    blurbZh:
      '光子面向全社会举办的游戏创作大赛，历时七个月，共有超过 5200 件作品参赛，总奖金池逾 200 万元。能一路披荆斩棘在高校赛道拿到金奖，对我们团队来说是一次不小的成长。',
    link: 'https://mp.weixin.qq.com/s/17hjCvhiTDES9XSQpdGzvw',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/tencentlightspeed.jpg'
  },
  {
    id: 'netease-thunder-fire',
    title: 'SJTU Student Innovation Center × NetEase ThunderFire Game Design Competition',
    titleZh: '交大学创 × 网易雷火高校游戏设计大赛',
    date: 'Dec 2025',
    dateZh: '2025.12',
    result: 'First Prize & Best Innovation Award',
    resultZh: '一等奖及最佳创新奖',
    blurb:
      'Co-hosted by the SJTU Student Innovation Center and NetEase ThunderFire, the competition brought together 20 SJTU teams. It was our team’s first collaboration and a lovely start to it.',
    blurbZh:
      '由上海交通大学学生创新中心联合网易雷火举办，共有20支交大队伍参与。这是我们团队第一次合作，算是一个很好的开始。',
    link: 'https://mp.weixin.qq.com/s/7Dsa782x0YqtVRijj-OC4Q',
    linkLabel: 'Coverage',
    linkLabelZh: '相关报道',
    image: '/img/awards/neteasethunderfire.jpg'
  }
];

export const education = [
  {
    place: 'Shanghai Jiao Tong University',
    placeZh: '上海交通大学',
    date: 'Sep 2024 — Present',
    dateZh: '2024.09 — 至今',
    role: 'B.Eng. in Computer Science and Technology (IEEE Pilot Class)',
    roleZh: '本科 · 计算机科学与技术（IEEE 试点班）',
    desc:
      'GPA 3.92, top 20% of the major.',
    descZh:
      'GPA 3.92，专业排名前 20%。'
  }
];

export const workExperience = [
  {
    place: 'NetEase Games',
    placeZh: '网易互娱',
    date: 'Jun 2026 — Sep 2026',
    dateZh: '2026.06 — 2026.09',
    role: 'Game Client Development Intern · Where Winds Meet, Client Tools Team',
    roleZh: '游戏客户端开发实习 ·《燕云十六声》客户端工具组',
    desc:
      'Client-side development and tooling work for the Where Winds Meet client tools team.',
    descZh: '在《燕云十六声》客户端工具组参与游戏客户端开发与工具链相关工作。'
  }
];
