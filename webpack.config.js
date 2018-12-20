const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
          test: /\.css$/,
            use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
            include: [
              path.join(__dirname, 'src'),
              /node_modules/
            ],
        },
        {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
                limit: 10000,
                name: "static/media/[name].[hash:8].[ext]",
            },
        },
        {
            test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
            loader: require.resolve("file-loader"),
            options: {
                name: "/static/media/[name].[hash:8].[ext]",
            },
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        }),
        new ExtractTextPlugin({ filename: 'css/style.css' })
    ]
}
