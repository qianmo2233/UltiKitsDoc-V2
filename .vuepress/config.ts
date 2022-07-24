import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'UltiKits.dev()',
      description: 'UltiKits Development Docs',
    },
    '/en/': {
      lang: 'en-US',
      title: 'UltiKits.dev()',
      description: 'UltiKits Development Docs',
    },
  },
  theme: recoTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      }
    },
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'UltiKits Dev Team',
    docsRepo: 'https://github.com/qianmo2233/UltiKitsDoc-V2',
    docsBranch: 'master',
    docsDir: 'docs',
    lastUpdatedText: '',
    series: {
      '/docs/dev/': [
        {
          text: '介绍',
          children: ['introduction', 'guide']
        },
        {
          text: '开发',
          children: ['yaml', 'config', 'data', 'executor', 'listener']
        },
        {
          text: '接口',
          children: ['game-email', 'inventory', 'packet', 'database', 'pro-checker', 'real-email', 'cloud', 'scoreboard']
        },
      ],
      '/docs/api/': [
        {
          text: '首页',
          children: ['overview', 'treeview', 'indexview']
        },
      ]
    },
    navbar:
        [
          { text: '主页', link: '/' },
          { text: '开发文档', link: '/docs/dev/introduction' },
          { text: 'API字典', link: '/docs/api/overview' },
          { text: '用户文档', link: 'https://doc.ultitools.ultikits.com' },
          { text: 'UltiKits官方网站', link: 'https://ultikits.com' },
          { text: 'GitHub仓库', link: 'https://github.com/wisdommen/UltiTools' },
        ],
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 UltiKits 开发文档现已更新改版，API字典目前正在努力整理中，希望大家在 QQ 群和 GitHub 踊跃反馈。`,
          style: 'font-size: 12px;'
        },
      ],
    },
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'OmFxvGIQH4fVXOk6vbT1XeeA-gzGzoHsz',
        appKey: '6PvpNkDMSXGA31YUsW90HEQ1',
      },
    },
  }),
})