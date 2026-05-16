import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/815-memes/',
  title: "815-memes",
  description: "815梗全收集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '作品', link: '/artworks/liwei_adventure/1' },
    ],

    sidebar: [
      {
        text: '作品',
        items: [
          {
            text: '李伟的奇妙冒险',
            items: [
              { text: '第一章', link: '/artworks/liwei_adventure/1' },
              { text: '第二章', link: '/artworks/liwei_adventure/2' },
              { text: '第三章', link: '/artworks/liwei_adventure/3' },
              { text: '第四章', link: '/artworks/liwei_adventure/4' },
              { text: '第五章', link: '/artworks/liwei_adventure/5' },
              { text: '第六章', link: '/artworks/liwei_adventure/6' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
