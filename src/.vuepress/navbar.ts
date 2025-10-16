import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '使用文档',
    items: [
      { text: '玩家手册', link: '/doc/player/' },
      { text: '服主手册', link: '/doc/owner/' },
    ],
  },
  { text: 'API参考', link: '/api/' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  {
    text: 'Documentation',
    items: [
      { text: 'Player', link: '/en/doc/player/' },
      { text: 'Server Owner', link: '/en/doc/owner/' },
    ],
  },
  { text: 'API Reference', link: '/en/api/' },
])

export const jpNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/jp/' },
  {
    text: 'ドキュメント',
    items: [
      { text: 'プレイヤー', link: '/jp/doc/player/' },
      { text: 'サーバーオーナー', link: '/jp/doc/owner/' },
    ],
  },
  { text: 'APIリファレンス', link: '/jp/api/' },
])

export const ruNavbar = defineNavbarConfig([
  { text: 'Главная', link: '/ru/' },
  {
    text: 'Документация',
    items: [
      { text: 'Игрок', link: '/ru/doc/player/' },
      { text: 'Владелец сервера', link: '/ru/doc/owner/' },
    ],
  },
  { text: 'API Справочник', link: '/ru/api/' },
])
