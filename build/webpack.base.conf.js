var path = require('path')
var utils = require('./utils')
var config = require('../config')
var md = require('markdown-it')()
var vueLoaderConfig = require('./vue-loader.conf')
var slugify = require('transliteration').slugify
var hljs = require('highlight.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  entry: {
    app: './example/main.js'
  },
  output: {
    path: config.doc.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.doc.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('example'),
      'src': resolve('src'),
      'components': resolve('components'),
      'directives': resolve('directives')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('example'), resolve('components'), resolve('directives'), resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('example'), resolve('components'), resolve('directives'), resolve('src'), resolve('test')]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          html: true,
          preventExtract: true,
          preprocess: function(MarkdownIt, source) {
            // MarkdownIt.renderer.rules.table_open = function () {
            //   return '<table class="table">'
            // }
            // MarkdownIt.renderer.rules.fence = utils.wrap(MarkdownIt.renderer.rules.fence)
            return source
          },
          use: [
            [require('markdown-it-anchor'), {
              level: 2,
              slugify: slugify,
              permalink: true,
              permalinkBefore: true,
              permalinkSymbol: '#'
            }],
            [require('markdown-it-container'), 'demo', {
              validate: function(params) {
                return params.trim().match(/^demo\s+(.*)$/)
              },
              render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                if (tokens[idx].nesting === 1) {
                  // demo description
                  var description = (m && m.length > 1) ? m[1] : ''
                  // enable set custom class to demo component
                  var customClass = description.split(' | ')
                  if (customClass.length > 1) {
                    description = customClass[1]
                    customClass = customClass[0]
                  } else {
                    customClass = ''
                  }
                  var content = tokens[idx + 1].content
                  var html = content
                  // var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                  var descriptionHTML = description ? md.render(description) : ''
                  return `<demo clz="${customClass}">
                    ${html}
                    <template slot="desp">${descriptionHTML}</template>
                    <template slot="source">
                    `
                } else {
                  // closing tag
                  return '</template></demo>\n'
                }
              }
            }],
            [require('markdown-it-container'), 'doc', {
              validate: function(params) {
                return params.trim().match(/^doc\s+(.*)$/)
              },
              render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^doc\s+(.*)$/)
                if (tokens[idx].nesting === 1) {
                  var tabs = (m && m.length > 1) ? m[1] : ''
                  var content = tokens[idx + 1].content
                  return `<component-doc tabs="${tabs}">
                    ${tokens[idx + 1].content}
                    `
                } else {
                  // closing tag
                  return '</component-doc>\n'
                }
              }
            }]
          ]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
