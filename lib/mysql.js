var mysql = require('mysql');
var config = require('../config/default.js')

var pool = mysql.createPool({
	host: config.database.HOST,
	user: config.database.USERNAME,
	password: config.database.PASSWORD,
	database: config.database.DATABASE
});

let query = function (sql, values) {
	return new Promise((resolve, reject) => {
		pool.getConnection(function (err, connection) {
			if (err) {
				reject(err)
			} else {
				connection.query(sql, values, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					connection.release()
				})
			}
		})
	})
}
// 注册用户
let insertData = function (value) {
	let _sql = "insert into user_base set userNick=?,userAccount=?, userPassword, avatar=?, createTime=?, type=?;"
	return query(_sql, value)
}
module.exports = {
	query,
	// createTable,
	insertData,
	// deleteUserData,
	// findUserData,
	// findDataByName,
	// insertPost,
	// findAllPost,
	// findPostByPage,
	// findPostByUserPage,
	// findDataByUser,
	// findDataById,
	// insertComment,
	// findCommentById,
	// updatePost,
	// deletePost,
	// deleteComment,
	// findCommentLength,
	// updatePostComment,
	// deleteAllPostComment,
	// updatePostPv,
	// findPageById,
	// findCommentByPage
}