---
home: true
modules:
  - BannerBrand
bannerBrand:
  heroImage: /logo.png
  heroImageStyle:
    maxWidth: '200px'
    width: '100%'
    display: block
    margin: '0 auto 2rem'
    borderRadius: '1rem'
  bgImage: '/bg.svg'
  heroText: UltiKits API
  tagline: 提供众多开箱即用的使用API，数据库采用 Druid 连接池，支持与云端对接，注解式监听器/执行器注册，强大的多版本兼容方案。你只需要负责逻辑处理，剩下请的交给我就可以。
  buttons:
    - { text: 开始上手, link: '/docs/dev/introduction.html' }
    - { text: API字典, link: '/api/index.html', type: 'plain' }
  isShowTitleInHome: true
  actionText: About
  actionLink: /views/other/about 
footer: 
  startYear: 2020
---
    
<style>
:root {
  --docsearch-primary-color: rgb(84, 104, 255);
  --docsearch-text-color: rgb(148,149,158);
  --docsearch-spacing: 12px;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: rgb(148,149,158);
  --docsearch-container-background: rgba(46,46,46,0);
  --docsearch-logo-color: rgb(140,140,140);

  /* modal */
  --docsearch-modal-width: 560px;
  --docsearch-modal-height: 600px;
  --docsearch-modal-background: rgba(25,25,25,0.5);
  --docsearch-modal-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.5), 0 3px
  8px 0 rgb(85,89,97);

  /* searchbox */
  --docsearch-searchbox-height: 56px;
  --docsearch-searchbox-background: rgba(78,78,78,0.2);
  --docsearch-searchbox-focus-background: rgba(78,78,78,0.2);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);

  /* hit */
  --docsearch-hit-height: 56px;
  --docsearch-hit-color: rgb(211,211,211);
  --docsearch-hit-active-color: #fff;
  --docsearch-hit-background: #353535;
  --docsearch-hit-shadow: 0 1px 3px 0 rgba(212,217,225,0);

  /* key */
  --docsearch-key-gradient: rgba(124,124,124,0.3);
  --docsearch-key-shadow: inset 0 -2px 0 0 rgba(205,205,230,0), inset 0 0 1px 1px
  rgba(255,255,255,0), 0 1px 2px 1px rgba(30, 35, 90, 0);

  /* footer */
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #353535;
  --docsearch-footer-shadow: 0 -1px 0 0 rgba(224,227,232,0), 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}

.DocSearch-Button {
  cursor:text;
  transform: scale(1);
  min-width: 200px;
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
}

.DocSearch-Button :hover {
  transform: scale(1);
}

.DocSearch-Commands-Key {
  padding-top: 2px;
}

.DocSearch-Modal {
  backdrop-filter: saturate(150%) blur(20px);
  box-shadow: none;
  transform: scale(1);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
}

.DocSearch-Hit-source {
  margin-bottom: 4px;
  padding-bottom: 6px;
  padding-left: 12px;
  margin-right: -12px;
  margin-left: -12px;
  background: #353535;
}

.DocSearch-Hit {
  margin-right: 0;
  transform: scale(1);
  -webkit-transition-duration: 0.1s;
  transition-duration: 0.1s;
}

.DocSearch-Hit:hover {
  margin-left: -8px;
  margin-right: -8px;
  transform: scale(1);
}

.DocSearch-Dropdown::-webkit-scrollbar {
  display: none;
}

.DocSearch-SearchBar {
  margin-bottom: 12px;
}

.DocSearch-Hit-action-button > svg {
   margin-top: 2px;
}

.DocSearch-Hit-action {
  transform: scale(1);
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
}
</style>