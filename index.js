const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');

const server = new Koa();

server.use(router.routes());
server.use(bodyParser());





server.listen(3000, ()=>console.log('hello'))
