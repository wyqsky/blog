module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
    nav: [
        { text: '主页', link: '/' },
        // { text: '博文',
        //   items: [
        //     { text: 'Android', link: '/android/' },
        //     { text: 'ios', link: '/ios/' },
        //     { text: 'Web', link: '/web/' }
        //   ] 
        // },
        { text: '项目分类', link: '/product/' },
        { text: '关于', link: '/guide/' },
        { text: '个人网站', link: 'https://www.wyqsky.top/dist/index.html#/home' },
    ],
    // sidebar: [
    //   {
    //     title: 'Group-1',
    //     collapsable: true, // 可折叠
    //     children: [
    //       ['/product/table', '表格1'],
    //       ['/product/test', 'test'],
    //     ]
    //   },
    //   {
    //     title: 'Group-2',
    //     collapsable: true, // 可折叠
    //     children: [
    //     	['/guide/test', '表格1'],
    //     ]
    //   }
    // ]
    sidebar: {
    	'/product/': [
        ['', '介绍'],
        // ['table', '表格'],
      ],
    },
    sidebarDepth: 2,
  },
}
