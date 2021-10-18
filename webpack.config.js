const path = require("path")
const autoprefixer = require('autoprefixer')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: ""
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['eslint-loader', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {}
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            // {
            //     test: /\.(jp?g|png|gif)$/,
            //     loader: 'url-loader?limit=8000&name=images/[name].[ext]',
            //     exclude: /node_modules/
            //
            // },
        ]
    }
}
