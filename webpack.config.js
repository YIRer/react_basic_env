//node js 의 path module 추가
const path = require('path');
//웹팩 플러그인 사용을 위한 플러그인 로드
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //source-map:실제제품 사용시 설정
    devtool: 'inline-source-map',
    //main.js를 기준으로 번들파일 생성
    entry: __dirname + "/app/main.js",
    //번들파일이 생성되는 위치
    output: {
        path : __dirname + "/build",
        filename: "bundle.js"
    },
    plugins:[
        // 템플릿 불러오기
        new HtmlWebpackPlugin({
            template : __dirname + "/app/index.html"
        }),
        // 템플릿 변하면 열린 페이지에 바로 반영
        new webpack.HotModuleReplacementPlugin()
    ],
    //웹팩 서버 설정, port는 내가 원하는 포트 hot는 페이지에 변경사항 바로 반영여부
    devServer :{
        contentBase : "./public",
        historyApiFallback : true,
        inline: true,
        hot:true
    }
}