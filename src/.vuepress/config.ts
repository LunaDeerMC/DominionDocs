/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'DominionDocs',
  description: 'Documentation of Dominion.',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'DominionDocs',
      description: 'Documentation of Dominion.',
    },
    '/en/': {
      lang: 'en-US',
      title: 'DominionDocs',
      description: 'Documentation of Dominion.',
    },
    '/jp/': {
      lang: 'ja-JP',
      title: 'DominionDocs',
      description: 'Documentation of Dominion.',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'DominionDocs',
      description: 'Documentation of Dominion.',
    },
  },

  head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false,

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文档仓库配置，用于 editLink */
    docsRepo: 'https://github.com/ColdeZhang/Dominion',
    docsDir: 'src',
    docsBranch: 'master',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /* 本地搜索, 默认启用 */
    search: { provider: 'local' },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true,
    //   whitespace: true,
    //   lineNumbers: true,
    // },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,

    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    // markdown: {
    //   demo: true,
    //   chart: true,
    //   echarts: true,
    //   mermaid: true,
    //   flowchart: true,
    //   math: { type: 'katex' },
    //   icon: { provider: 'iconify' },
    //   include: true,
    // },
  }),
})
