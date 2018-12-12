const Koa = require('koa');
const app = new Koa();
const router = require('./router/index');

router(app);
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})