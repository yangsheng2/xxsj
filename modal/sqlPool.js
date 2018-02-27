/**
 * �����ߣ�����
 * ����ʱ�䣺2017/11/14 18:50.
 * �������ӳ�
 */
    "use strict";
const mysql = require('promise-mysql');
//ע������ʹ�õĲ���mysql,����promise-mysql
// ��Ҫ��mysql�������ǣ�ʹ��promise�ķ�ʽ����ʹ�ã���������ǰ�Ļص�����������
// promise-mysql �Ļ���ʹ�÷������ο����ļ����������
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port:'3309',
    password: '543543',
    database: 's3',
    connectionLimit: 10 // ��������������
});
module.exports=pool;

// ���ӳص�ʹ�÷���
//pool = mysql.createPool({
//    host: 'localhost',
//    user: 'sauron',
//    password: 'theonetruering',
//    database: 'mordor',
//    connectionLimit: 10
//});
// ��promise-mysql �У�����pool�����ͨ���µķ�ʽ��ִ��mysql���
//pool.query('select `name` from hobbits').then(function(rows){
//    // Logs out a list of hobbits
//    console.log(rows);
//});