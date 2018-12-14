# koa2-Vue-template
an koa2+Vue template repo

##初始化项目
使用 koa2 + Vue + webpack + mysql

使用方法

1、clone

2、npm instal

3、create config/config.js to config your mysql stuff like this:

```
const config = {
	// 启动端口
	port: 3000,

	// 数据库配置
	database: {
		DATABASE: 'dataBaseA',
		USERNAME: 'root',
		PASSWORD: '123456',
		PORT: '3306',
		HOST: 'localhost'
	}
}

module.exports = config;
```

3、npm run start
