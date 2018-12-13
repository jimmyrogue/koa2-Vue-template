const Koa = require('koa');
const router = require('./router/index');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const koaWebpack = require('koa-webpack');
const webpackDevConf = require('./build/webpack.dev.conf');
const config = require('./config/default.js');
const app = new Koa();

// session存储配置
// const sessionMysqlConfig = {
// 	user: config.database.USERNAME,
// 	password: config.database.PASSWORD,
// 	database: config.database.DATABASE,
// 	host: config.database.HOST,
// }

// app.use(koaWebpack({
// 	config: webpackDevConf,
// 	dev: {
// 		state: { //红色日志
// 			colors: true
// 		}
// 	}
// }))

koaWebpack({
	config: webpackDevConf
}).then((middleware) => {
	app.use(middleware);
	app.use(async ctx => {
		const filename = path.resolve(webpackDevConf.output.path, 'index.html')
		ctx.response.type = 'html'
		ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(filename)
	})
});

// 配置session中间件
// app.use(session({
// 	key: 'USER_SID',
// 	store: new MysqlStore(sessionMysqlConfig)
// }))

// router(app);
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})