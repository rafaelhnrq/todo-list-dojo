const path = require('path')

module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, './src'),
                '@components': path.join(__dirname, './src/components')
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
}