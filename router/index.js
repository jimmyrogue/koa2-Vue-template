// router/index.js
const Router = require('koa-router');
const router = new Router();
// const posts = new Router();
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const log4js = require('log4js');
const logger = log4js.getLogger();


const HomeController = require('../controller/home');
module.exports = (app) => {
	router.get('/api', HomeController.home);
	router.get('/api/login/:pid', async (ctx, next) => {
		console.log(ctx.params);
		// logger.level = 'debug';
		// logger.debug("Some debug messages pid =", ctx.params);
		// ctx.body = `pid:${ctx.params.pid}`
		ctx.body = {
			name: 'hfimy',
			age: 23,
			pid: ctx.params.pid
		};
	});
	app.use(bodyParser());
	app.use(json());
	// router.use('/forums/:fid/posts', router.routes(), router.allowedMethods());
	app.use(router.routes(), router.allowedMethods())
}

// const Koa = require('koa')
// // 注意 require('koa-router') 返回的是函数:
// const Router = require('koa-router')

// const app = new Koa();
// const forums = new Router();
// const posts = new Router();

// posts.get('/', async (ctx, next) => {
// 	ctx.body = `fid:${ctx.params.fid}`
// });
// forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// // 可以匹配到的路由为 "/forums/123/posts" 或者 "/forums/123/posts/123"
// app.use(forums.routes());
// app.use(bodyParser());
// app.use(json());

// // // 添加路由
// // router.get('/', async (ctx, next) => {
// // 	ctx.response.body = `<h1>index page</h1>`
// // })
// // router.get(
// // 	'/users/:id',
// // 	async (ctx, next) => {
// // 			ctx.body = `<h1>user:${ctx.params.id}</h1>`;
// // 			ctx.user = 'xiaoming';
// // 			next();
// // 		},
// // 		async (ctx, next) => {
// // 			console.log(ctx.user);
// // 			// 在这个中间件中再对用户信息做一些处理
// // 			// => { id: 17, name: "Alex" }
// // 		}
// // );
// // router.get('/home', async (ctx, next) => {
// // 	ctx.response.body = '<h1>HOME page</h1>'
// // })

// // router.get('/404', async (ctx, next) => {
// // 	ctx.response.body = '<h1>404 Not Found</h1>'
// // })

// // router.all('/*', async (ctx, next) => {
// // 	ctx.response.body = '<h1>404 Not Found</h1>'
// // })
// // // 调用路由中间件
// // app.use(router.routes())

// app.listen(3000, () => {
// 	console.log('server is running at http://localhost:3000')
// })