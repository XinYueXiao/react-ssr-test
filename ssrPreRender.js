/*
 * @Descripttion:prerender实现ssr: https://github.com/prerender/prerender
 * @Author: wangxinyue
 * @Date: 2020-03-16 15:42:47
 */
const prerender = require('prerender');
const server = prerender();
server.start();

//curl http://localhost:3000/render?url=https://www.example.com/