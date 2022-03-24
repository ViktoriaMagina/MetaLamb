const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let mode = 'development'

if(process.env.NODE_ENV == 'production'){
    mode = 'production'
}
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    }
    if (mode === 'production'){
        config.minimizer = [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ]
    }
    return config
}
const filename = (ext)=> {
    if(mode === 'development'){
        return `[name].${ext}`;
    }
    else{
        return `[name].[fullhash].${ext}`
    }
}
console.log(mode)

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/index.js',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    optimization: optimization(),
    plugins: [
        new  MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.pug',
            filename: "index.html",
            cache: false,
        }),
        new HTMLWebpackPlugin({
            template: './src/search-room.pug',
            filename: "search-room.html",
            cache: false,
        }),
        new HTMLWebpackPlugin({
            template: './src/room-details.pug',
            filename: "room-details.html",
            cache: false,
        }),
    ],
    module: {
        rules: [
        {
            test: /\.pug$/i,
            loader: 'pug-loader',
            exclude: /(node_module|bower_components)/
        },
        {
            test: /\.html$/i,
            use: ['html-loader'],
        },
        {
            test:/\.(scss|sass|css)$/,
            use: [
                (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        //Options
                                    },
                                ]
                            ]
                        }
                    }
                },
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    ]
    }
}