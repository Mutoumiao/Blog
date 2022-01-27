import { createApp } from './app'

export default async context => {

  const { app, router } = createApp()

  router.push(context.url)

  await new Promise(router.onReady().bind(router))

  return app
}
