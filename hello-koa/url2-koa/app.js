const Koa = require('koa');
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// 导入controller middleware:
const controller = require('./controller');


// 使用middleware:
app.use(controller());