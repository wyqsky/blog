module.exports = {
  title: '冬凌居',
  description: '来自文字的一些诉说',
  base: '/',
  theme: 'vdoing',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: '上次更新',
    searchMaxSuggestions: 10,
    head: [
      ['link', {
        rel: 'icon',
        href: '/favicon.ico'
      }]
    ],
    nav: [
        { text: '主页', link: '/' },
        { text: '收藏', link: '/pages/bfb1bf/' },
        { 
          text: '生活', link: '/life/',
          items: [
            { text: '游历山川', link: '/pages/451e1d/' },
            { text: '随写笔录', link: '/pages/022326/' },
          ],
        },
        { 
          text: '技术', link: '/technology/',
          items: [
            { text: 'NAS相关', link: '/pages/53da06/' },
          ], 
        },
        {
          text: '索引',
          link: '/archives/',
          items: [
            { text: '分类', link: '/categories/' },
            { text: '标签', link: '/tags/' },
            { text: '归档', link: '/archives/' },
          ],
        },
        { text: '关于', link: '/pages/5f65ab/' },
    ],
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    pageStyle: 'card', // line
    author: {
      name: '冬凌居', // 必需
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://www.wallpaperup.com/uploads/wallpapers/2012/09/16/15066/0af378c4296955f85a2e1c3831d049a9.jpg',
      name: '冬凌居',
      slogan: '来自文字的一些诉说',
    },
    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Dong Lingju'
    },
    // bodyBgImg: 'https://www.wallpaperup.com/uploads/wallpapers/2012/11/10/21808/d829bb16c018f3c53c15dc0d81ffb7c5.jpg', 
    // sidebar: {
    //   '/nav/': [
    //     ['', '网站导航'],
    //   ],
    // },
    // sidebar: [
    //   {
    //     title: 'Group-1',
    //     collapsable: true, // 可折叠
    //     children: [
    //       ['/product/table', '表格1'],
    //     ]
    //   },
    // ]
    sidebarDepth: 2,
  },
  plugins: [
    'fulltext-search',
  ],
}
