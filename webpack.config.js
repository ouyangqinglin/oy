const path = require('path')

module.exports = {
    resolve: {
        alias: {
            '@comp': path.resolve(__dirname, 'components'),
            '@assets': path.resolve(__dirname, 'assets'),
            '@img': path.resolve(__dirname, 'assets/image'),
        }
    }
}