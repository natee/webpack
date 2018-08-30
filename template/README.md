# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# 起开发环境 0.0.0.0:8080 (localhost:8080)
npm run dev

# 线上环境构建
sh ./build/deploy 

# 测试环境构建
sh ./build/deploy test_build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://https://github.com/natee/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
