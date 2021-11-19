const fs = require('fs')
const path = require('path')

const { getTemplate } = require('./configTemplate')
const MD_DIR = '../docs'
const OUTPUT_DIR = path.resolve(__dirname, MD_DIR + '/.vuepress')
const OUTPUR_FILENAME = 'config.js'

const run = () => {
    const root = path.resolve(__dirname, MD_DIR)

    const readDir = (root) => {
        var res = [];
        const files = fs.readdirSync(root)
        files.forEach(name => {
            if (name.startsWith('.') || name.includes("README")) {
                return;
            }
            const filePath = `${root}/${name}`
            const state = fs.lstatSync(filePath)
            if (state.isDirectory()) {
                var sub = readDir(filePath);
                if (sub.length > 2) {
                    let father =
                        ` {
                    text: '${name}',
                    children: ${sub},
                  } `
                    res.push(father)
                }
            } else if (state.isFile()) {
                if (filePath.endsWith('.md')) {
                    let simpleName = name.split(".md")[0]
                    res.push(
                        ` {
                            text: '${simpleName}',
                            link: '${filePath.split('docs')[1]}',
                          }`
                    )
                }
            }
        })
        return '[' + res + ']';
    }


    const template = getTemplate(readDir(root))
	
    mkdirRecursive(OUTPUT_DIR)
	
    fs.writeFileSync(path.resolve(OUTPUT_DIR, OUTPUR_FILENAME), template)
}

function mkdirRecursive(dirname) {
    if (fs.existsSync(dirname)) 
        return true

    if (mkdirRecursive(path.dirname(dirname))) {
        fs.mkdirSync(dirname)
        return true
    }
}

run()
