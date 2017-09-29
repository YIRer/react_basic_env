const path = require('path');
const webpack = require('webpack');
//웹팩 객체 모듈화
const merge = require('webpack-merge');
//가져올 웹팩 모듈
const common = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = merge(common, {
    //loader 설정 : 소스파일 전처리, 변경, 변환
    module : {
        loaders : [
            // json 파일 로드
            {test:/\.json$/, loader : "json-loader"},
            //js 바벨 컴파일
            {test:/\.js$/, loader:'babel-loader',exclude:/node_modules/},
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            //cssloader: import,url 찾고 해석, styleloader : 계산된 모든 스타일 규칙을 페이지에 추가
            //postcssloader: autoprefix, less, sass등을 컴파일
            {test:/\.css$/, use:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","postcss-loader"]
              })}
        ]
    },
    plugins: [
        // 스크립트 상단에 저작권 표시
        new webpack.BannerPlugin("Banner Test"),
        //작업 환경 설정
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        //uglify 설정
        new webpack.optimize.UglifyJsPlugin(),
        //압축하기
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 모든 css의 import, require를 css로 출력하여 인라인스타일로 들어가지 않게 하는 플러그인
        new ExtractTextPlugin("[name]-[hash].css")
    ]
});