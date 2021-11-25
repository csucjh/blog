const path = require('path')

const getTemplate = (routesConfig) => {
    const baseContent =`
    const { path } = require('@vuepress/utils')
    module.exports = {
        lang: 'zh-CN',
        title: "小菜变大鸟's 博客",
        themeConfig: {
            navbar: [
              {
                text: '链表',
                link: '/链表',
              },
              {
                text: '其他',
                link: '/其他',
              },
              {
                text: 'GitHub',
                link: 'https://github.com/csucjh/csucjh.github.io',
              }
            ],

            sidebar: ${routesConfig}
        },
        theme: path.resolve(__dirname, './theme'),
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
                        }
                    }
                }
            ]
        ]
    }`
    return baseContent
}

module.exports = {
    getTemplate
}