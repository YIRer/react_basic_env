리액트 환경 구축 프로젝트
===============================
리액트 기본 환경 구축
---------------------------------

## 1.제작이유

리액트의 경우에는 ES6문법을 기본으로 사용하기 때문에 이를 컴파일 해줄 Babel이 필요하고, 노드 환경에서 모듈화 시켜서 작업하기 때문에 이를 하나로 합치기 위한 웹 팩설정이 필요하다. 거기에 SCSS 파일을 컴파일 하는 기능도 추가하여 필요할 때 마다 불러서 사용기 위해서 프로젝트를 시작했다.

## 2. 제작기간 및 관련 정보

<pre>
총 제작 기간 : 1일(2017.10.01)
제작인원 : 1명(본인)
작업도구 : npm, node.js
</pre>
[깃헙주소] (https://github.com/YIRer/react_basic_env)

### 로컬에서의 실행

1. node.js환경에서 포트폴리오 폴더(my-portfolio)로 이동한다
2. npm install을 입력하여 노드 모듈 설치
3. 설치 후 npm start로 로컬에서 실행. port 8080

## 3.제작과정
'프로 리액트'를 참고하여 웹 팩을 이용한 기본 설정을 하도록함. 
<pre>
npm start : 로컬에서 컴파일 후 실행
npm build : 실제 서비스되는 제품으로 빌드
</pre>

### 필요한 의존 패키지의 구성

* webpack : 웹 팩 파일
* autoprefixer : 개발사 접두어를 자동으로 붙여줌
* babel : ES6 문법을 ES5 및 하우 버전으로 컴파일
* style,css-loader : css 파일 import하고, style 태그로 삽입
* node-sass : SASS,SCSS 컴파일을 위한 모듈
* json-loader : json import기능

### 파일 구성

* webpack.config.js : 기본 웹 팩설정
* webpack.dev.config.js : 개발 모드로 빌드하기
* webpack.prod.config.js : 제품 모드(실제 서비스)모드로 빌드하기
* .babel : babel 설정파일, ES6, react 문법을 컴파일

### 스크립트 설정
* npm start: webpack-dev-server --progress --config ./webpack.dev.config.js : 현재창을 새로고침하여 실행, webpack.dev.config.js에 설정대로 개발 실행
* npm build: webpack --config webpack.prod.config.js : 제품 모드로 빌드한다. 설정은 webpack.prod.config.js에 정의 된 대로 실행

## 4.제작시 어려웠던점

책이 나온지 2년이 지나서, 현재의 버젼과는 다른 내용인 부분이 있어, 이와 관련된 정보를 찾아 적용 하는 것이 힘들었다.
또, 'npm build'를 하면 실행이 안되고, 'npm run-script build' 라고 입력해야 정상적으로 실행되는 것이 문제점으로 남아있다.

## 5.제작시 배웠던 점

기본 리액트 환경을 CLI도움 없이 제대로 설치하고 실행하는 과정을 해보면서 웹팩을 모듈화 시켜서 사용하는 법을 익힐 수 있었다. 좀 더 제대로 적용하면, 리액트 프로젝트가 아니더라도 모듈화 작업을 적용 할 수 있을 것 같다.