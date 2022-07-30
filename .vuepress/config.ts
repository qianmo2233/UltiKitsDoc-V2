import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  plugins: [
      sitemapPlugin({
          hostname: "https://doc.dev.ultikits.com",
      }),
    docsearchPlugin({
      appId: '8D12CWPS3U',
      apiKey: '2d5004fd6be070b6c4fb85e97e858abd',
      indexName: 'ultikits',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
  ],
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
      ]
    },
    navbar:
        [
          { text: '主页', link: '/', icon:'Home' },
          { text: '开发文档', link: '/docs/dev/introduction', icon:'FileText' },
          { text: 'API字典', link: '/api/', icon: 'Api' },
          {
            text: '用户文档',
            icon: 'Versions',
            children: [
              { text: 'UltiTools', link: 'https://doc.ultitools.ultikits.com' },
              { text: 'UltiLevel', link: 'https://www.mcbbs.net/thread-1060810-1-1.html'},
              { text: 'UltiEconomy', link: 'https://www.mcbbs.net/thread-1060351-1-1.html'},
              { text: 'UltiCore', link: 'https://www.spigotmc.org/resources/ultikits-ulticore.86207/'},
            ],
          },
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