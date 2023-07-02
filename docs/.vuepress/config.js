module.exports = {
  title: '冬凌居',
  description: '来自文字的一些诉说',
  base: '/',
  theme: 'vdoing',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['fulltext-search'],
  ],
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
        { text: '网站导航', link: '/pages/bfb1bf/' },
        { text: '关于', link: '/pages/5f65ab/' },
        // { text: 'xxxx',
        //   items: [
        //     { text: 'xxxx', link: '/xxxx/' },
        //   ] 
        // },
    ],
    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',
    author: {
      name: '冬凌居', // 必需
    },
    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: 'https://upload.jianshu.io/users/upload_avatars/5323321/23b5d2a1-d96b-4030-a7ce-9a49947c734b?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      name: '冬凌居',
      slogan: '来自文字的一些诉说',
    },
    // 页脚信息
    footer: {
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'Dong Lingju'
    },
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
}