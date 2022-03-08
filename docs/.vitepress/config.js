module.exports = {
  title: '🪵🐱 Blog',
  description: 'Welcome here, this is my Blog!',
  author: 'mutoumiao,839608583@qq.com',
  lang: 'zh-cmn-Hans',
  themeConfig: {
    nav: [
      {
        text: '关于', link: '/'
      },
      {
        text: 'Blog',
        link: '/blog/TypeScript',
        activeMatch: '^/blog/'
      },
      {
        text: 'GiHub',
        link: 'https://github.com/Mutoumiao/Blog'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          text: 'TypeScript',
          children: [
            { text: 'TypeScript语言', link: '/blog/TypeScript' },
            // { text: '题目练习', link: '/blog/tsQuestions' }
          ]
        },
        {
          text: '前端框架',
          children: [
            { text: 'Vue3设计与实现', link: '/blog/vue3Design' },
          ]
        },
        {
          text: 'HTML',
          children: [
            { text: 'WebSocket', link: '/blog/websocket' },
            { text: 'HTML Meta', link: '/blog/meta' },
            { text: 'Web Storage', link: '/blog/storage' },
            { text: 'Web Worker', link: '/blog/webWorker' },
          ]
        },
      ],
    },
  },
}