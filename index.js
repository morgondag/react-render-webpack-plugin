'use strict'
const render = require('react-node-render')
const fs = require('fs')
const cheerio = require('cheerio')

module.exports = class {
    constructor(options) {
        this.options = options
    }

    compile(c, cb) {
        const filePath = process.cwd() + '/' + this.options.file
        let html = render(filePath)
        const indexPath = c.compiler.outputPath + '/index.html'

        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                throw new Error(err);
            }

            let $ = cheerio.load(data)
            html = $('.' + this.options.parentClass).html(html).html();

            fs.writeFile(indexPath, $.html(), 'utf-8', (err) => {
                if (err) {
                    throw new Error(err);
                }
                cb()
            })
        })
    }

    apply(compiler) {
        compiler.plugin('after-compile', this.compile.bind(this));
    }
}
