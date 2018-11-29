const path = require("path");

module.exports = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,                    // made scss
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};