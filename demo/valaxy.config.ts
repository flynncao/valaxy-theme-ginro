import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-ginro'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'ginro',

  themeConfig: {
    // colors: {
    //   primary: 'red',
    // },

    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/YunYouJun/valaxy-theme-starter',
      },
      {
        text: 'RSS',
        link: '/atom.xml',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/sGe4U4p4CK',
      },
      {
        text: 'Valaxy →',
        link: 'https://github.com/YunYouJun/valaxy',
      },
    ],

    footer: {
      since: 2016,
    },

    showSakanaWidget: true,
  },
})
