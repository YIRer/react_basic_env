const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common,{
    //그외 편리한 기능들을 설정
    module:{
        //외부스크립트와 도구를 사용하는 loader 설정
        loaders:[
            //json
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            //babel, babel의 프리셋 설정은 .babelrc에 설정
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude : /node_modules/
            },
            //css 모듈화
            {
                test:/\.css$/,
                use:["style-loader","css-loader","postcss-loader"]
            },
        ]
    },
    plugins:[
        //개발 모드로 설정
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
          })
    ]
})