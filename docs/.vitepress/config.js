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
      },
      {
        text: 'GiHub',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ],
    sidebar: {
      '/blog/': [
        {
          text: 'HTML',
          children: [
            { text: 'WebSocket', link: '/blog/websocket' },
          ]
        }
      ]
    }
  },
}