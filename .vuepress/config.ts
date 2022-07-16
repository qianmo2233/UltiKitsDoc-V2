import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'UltiKits.dev()',
  description: 'UltiKits Development Docs',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'UltiKits Dev Team',
    docsRepo: 'https://github.com/qianmo2233/ulti_dev_doc',
    docsBranch: 'main',
    docsDir: 'docs',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/dev/': [
        {
          text: '介绍',
          children: ['introduction', 'guide']
        },
        {
          text: '开发',
          children: ['config']
        },
        {
          text: '接口',
          children: ['game-email', 'inventory', 'packet', 'database', 'pro-checker', 'real-email', 'cloud']
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