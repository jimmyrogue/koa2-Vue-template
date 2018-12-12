const log4js = require('log4js');
const logger = log4js.getLogger();

module.exports = {
	index: async (ctx, next) => {},
	home: async (ctx, next) => {
		logger.level = 'info';
		logger.info("into index");
		ctx.body = '<h1>Home Page</h1>'
	}
}