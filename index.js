const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const constroller = require('./constroller');

const app = new Koa();

router.post('/trans', constroller.trans);

app.use(bodyParser());
app.use(router.routes());
app.use(serve('./static'));

app.listen(5050);
console.log('Koa started at http://127.0.0.1:5050 ...')
