import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const createDocCollection = (dir: string, linkPrefix: string, title: string) =>
  defineCollection({
    type: 'doc',
    dir,
    linkPrefix,
    title,
    sidebar: 'auto',
  })

export const zhCollections = defineCollections([
  createDocCollection('doc/player', '/doc/player/', '玩家手册'),
  createDocCollection('doc/owner', '/doc/owner/', '服主手册'),
  createDocCollection('api', '/api/', 'API 参考'),
])

export const enCollections = defineCollections([
  createDocCollection('en/doc/player', '/en/doc/player/', 'Player Guide'),
  createDocCollection('en/doc/owner', '/en/doc/owner/', 'Server Owner Guide'),
  createDocCollection('en/api', '/en/api/', 'API Reference'),
])

export const jpCollections = defineCollections([
  createDocCollection('jp/doc/player', '/jp/doc/player/', 'プレイヤーガイド'),
  createDocCollection('jp/doc/owner', '/jp/doc/owner/', 'サーバーオーナーガイド'),
  createDocCollection('jp/api', '/jp/api/', 'API リファレンス'),
])

export const ruCollections = defineCollections([
  createDocCollection('ru/doc/player', '/ru/doc/player/', 'Руководство игрока'),
  createDocCollection('ru/doc/owner', '/ru/doc/owner/', 'Руководство владельца сервера'),
  createDocCollection('ru/api', '/ru/api/', 'Справочник API'),
])
