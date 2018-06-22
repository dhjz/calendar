# vue-cli

### 补充的额外包
#### lib-flexible(移动端自适应)

#### fastclick(移动端点击事件延迟)
`FastClick.attach(document.body)`

#### 全局css变量
```js
  const stylusOptions = {
    import: [
        path.join(__dirname, "../src/style/base.styl"), // base.styl全局变量文件
    ],
    paths: [
        path.join(__dirname, "../src/style/"),
        path.join(__dirname, "../"),
    ],
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus', stylusOptions),
    styl: generateLoaders('stylus', stylusOptions)
  }
}
```