module.exports = {
  title: '进阶文档',
  description: '前端进阶之路',
  repo: 'https://github.com/vayne1Q/VuePressBlog.git', //仓库地址
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/logo.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ], // 这是部署到github相关的配置
  lastUpdated: 'Last Updated',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {
        text: 'JS',
        link: '/foundation/'
      },
      {
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: '工程化',
        link: '/engineering/'
      },
      {
        text: '源码篇',
        link: '/source/'
      },
      {
        test: '代码规范',
        link: '/standard/'
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};