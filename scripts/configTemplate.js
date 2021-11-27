
  
const getTemplate = (navbar, sidebar) => {
    const baseContent =
`const { path } = require('@vuepress/utils')
module.exports = {
    lang: 'zh-CN',
    title: "小菜变大鸟's 博客",
    theme: path.resolve(__dirname, './theme'),
    themeConfig: {
          navbar: [
            ${navbar},
            {
              text: 'GitHub',
              link: 'https://github.com/csucjh/csucjh.github.io',
            }
        ],
        sidebar: ${sidebar},
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
    ],
}`
    return baseContent
}

module.exports = {
    getTemplate
}