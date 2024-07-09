1. node 프로젝트(application, library) 만들기
    1) 프로젝트 생성
        $ mkdir ex01

    2) 프로젝트 이동
        $ cd ex01

    3) 프로젝트 초기화: 프로젝트 매니페스트 파일(package.json)로 생성
        $ npm init -y

2. 패키지
    1) 완전한 어플리케이션(babel, webpack, nodemon, Lint, ... )
    2) 프로젝트에서 사용하는 라이브러리 모듈 (react, react-dom)

3. 의존성(Library)
    1) 개발하는 프로젝트에서 설치하는 패키지 
    2) 일반 의존성: 개발하고 있는 프로젝트가 런타임 중 사용하는 패키지
    3) 개발 의존성: 개발 시, 도움이 되는 패키지로 빌드와 배포에는 포함되지 않는다. (*빌드 및 배포 시, 제외 시킨다.)
        - 우리가 프론트 엔트 개발을 node에서 하는 이유 

4. 패키지 설치
    설치 -> 내 프로젝트 안에서 설치할 때, 어플리케이션 실행을 위해서 인지, 개발을 위해 필요한 것인지 파악해야 한다. 

    1) 전역 설치
    2) 지역 설치

=== 실습 ===
1. 설치
$ npm i ejs [지역설치, 일반설치]
$ npm i -D nodemon [지역설치, 개발설치]
$ npm i -D -g gulp [전역설치, 개발설치]

2. 삭제
$ npm un ejs       [지역설치]
$ npm un nodemon   [지역설치]
$ npm un -g gulp   [전역설치]

Module
1) 코어 모듈: node에서 제공하는 모듈(fs, os, process, http, ...)
2) npm 모듈: npm를 통해서 node_module에 설치하고 사용하는 모듈
3) 파일 모듈: 파일 경로로 불러온 모듈안에 함수나 객체를 사용한다.