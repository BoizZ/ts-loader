module.exports = {
    context: __dirname,
    entry: './app.ts',
    output: {
        path: __dirname
    },
    resolve: {
        alias: { externalLib: "./lib/externalLib.js" },
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: '../../index.js?instance=basic' }
        ]
    }
}