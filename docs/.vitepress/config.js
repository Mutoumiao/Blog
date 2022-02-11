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
        link: '/blog/websocket',
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
          text: 'HTML',
          children: [
            { text: 'WebSocket', link: '/blog/websocket' },
            { text: 'HTML Meta', link: '/blog/meta'},
            { text: 'Web Storage', link: '/blog/storage'},
            { text: 'Web Worker', link: '/blog/webWorker'},
          ]
        },
        {
          text: 'TypeScript',
          children: [
            { text: 'TypeScript语言', link: '/blog/TypeScript' },
          ]
        }
      ]
    }
  },
}