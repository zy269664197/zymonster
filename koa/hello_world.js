const Koa = require('koa');
const hello = new Koa();

hello.use(async ctx => {
  ctx.body = 'Hello World';
});

hello.listen(3000);