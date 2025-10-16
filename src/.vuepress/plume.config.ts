/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/
 * - @see https://theme-plume.vuejs.press/config/theme/
 */
import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, jpNavbar, ruNavbar, zhNavbar } from './navbar'
import { enCollections, jpCollections, ruCollections, zhCollections } from './collections'

export default defineThemeConfig({
  logo: '/logo.png',

  appearance: true, // 配置深色模式

  social: [
    { icon: 'github', link: 'https://github.com/LunaDeerMC/Dominion' },
  ],

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: '/logo.png',
    name: 'DominionDocumentation',
    description: 'Documentation of Dominion.',
    // circle: true,
    // location: '',
    // organization: '',
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      collections: zhCollections,
    },
    '/en/': {
      navbar: enNavbar,
      collections: enCollections,
    },
    '/jp/': {
      navbar: jpNavbar,
      collections: jpCollections,
    },
    '/ru/': {
      navbar: ruNavbar,
      collections: ruCollections,
    },
  },

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,
  //   postList: true,
  //   appearance: 'fade',
  // },
})
