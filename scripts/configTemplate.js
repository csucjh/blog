const path = require('path')

const getTemplate = (routesConfig) => {
    const baseContent =
`module.exports = {
    lang: 'zh-CN',
    title: "小菜变大鸟的博客",
    themeConfig: {
        sidebar: ${routesConfig},
    },
}`
    return baseContent
}

module.exports = {
    getTemplate
}