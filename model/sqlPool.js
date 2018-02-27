/*
* 文件名：数据库连接池
* 创建者：雷云凯
* 创建时间：2017-11-15 14:40
* */
"use strict";
const mysql = require('promise-mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 's3',
    connectionLimit: 50,
});
module.exports=pool;

