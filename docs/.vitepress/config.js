
module.exports = {
  title: '🪵🐱 Blog',
  description: 'Welcome here, this is my Blog!',
  author: 'mutoumiao,839608583@qq.com',
  lang: 'zh-cmn-Hans',
  head: [
    ['meta', { name: 'author', content: 'mutoumiao' }],
    ['meta', { name: 'keywords', content: '博客, 前端, 工作经验, 笔记' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' }],
  ],
  themeConfig: {
    nav: [
      {
        text: '关于',
        link: '/',
      },
      {
        text: 'Blog',
        link: '/blog/TypeScript.html',
        activeMatch: '^/blog/'
      },
      // {
      //   text: '备忘单',
      //   link: '/cheatSheets/VueRouter3',
      //   activeMatch: '^/cheatSheets/'
      // },
      {
        text: 'GiHub',
        link: 'https://github.com/Mutoumiao/Blog'
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'TypeScript',
          children: [
            { text: 'TypeScript语言', link: '/blog/TypeScript.html' },
            // { text: '题目练习', link: '/blog/tsQuestions' }
          ]
        },
        {
          text: '前端框架',
          children: [
            { text: 'Vue3设计与实现', link: '/blog/vue3Design.html' },
          ]
        },

        {
          text: 'HTML',
          children: [
            { text: 'WebSocket', link: '/blog/websocket.html' },
            { text: 'HTML Meta', link: '/blog/meta.html' },
            { text: 'Web Storage', link: '/blog/storage.html' },
            { text: 'Web Worker', link: '/blog/webWorker.html' },
          ]
        },
        {
          text: 'Git',
          children: [
            { text: 'git详情指南', link: '/blog/git.html' },
          ]
        },
      ],
      // '/cheatSheets/': [
      //   {
      //     text: '备忘单',
      //     children: [
      //       { text: 'Vue router3.x', link: '/cheatSheets/VueRouter3' },
      //     ]
      //   },
      // ]
    },
  },
}