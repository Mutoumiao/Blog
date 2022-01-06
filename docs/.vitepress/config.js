module.exports = {
  title: '🪵🐱 Blog',
  description: 'Welcome here, this is my Blog!',
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
            { text: '常用meta', link: '/blog/meta'},
            { text: 'Web Storage', link: '/blog/storage'}
          ]
        }
      ]
    }
  },
}