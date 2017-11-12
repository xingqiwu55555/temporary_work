# chat

> 基于vue-cli和socket.io做的聊天室，多个聊天室，后台支持为node，可结合下面chat-other文件的集中代码作为参考来改进此demo。

## 坑总结

1. socket.request.headers.referer获取url，只能得到一部分地址，地址后有? # &会直接截断到最后一个 / 和 上字符前；vue-router中HTML5 History模式可以避免这个问题，但最后需要后端配合；

2. socket.io 可引入客户端专用的socket.io-client模块，同样可用import引入；

3. 多房间的原理：一个房间对应一个数组，数组里存放用户信息；

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
