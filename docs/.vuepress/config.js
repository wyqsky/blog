module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/search', {
        searchMaxSuggestions: 10
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    head: [
      ['link', {
        rel: 'icon',
        href: '/favicon.ico'
      }]
    ],
    nav: [
        { text: '主页', link: '/' },
        { text: '网站导航', link: '/nav/' },
        { text: '项目分类', link: '/product/' },
        { text: '关于', link: '/guide/' },
        { text: '个人网站', link: 'https://www.wyqsky.top/dist/index.html#/home' },
        // { text: '博文',
        //   items: [
        //     { text: 'Android', link: '/android/' },
        //   ] 
        // },
    ],
    sidebar: {
    	'/product/': [
        ['', '介绍'],
        // ['table', '表格'],
      ],
      '/nav/': [
        ['', '常用地址'],
      ],
    },
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
