const Koa = require('koa');
const Router = require('koa-router');
const Mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');



const server = new Koa();
const router = new Router();

server.use(router.routes());
server.use(bodyParser());





server.listen(3000, ()=>console.log('hello'))
