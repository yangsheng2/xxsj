/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：照片墙详情
 */

//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. list , 获取照片墙信息
 * */
function wallList(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "select * from photos where photo_state=1" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//照片墙总数
function wallGetCount(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "select count(1) from photos where photo_state=1" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//wallAdd , 增加一张照片墙
function wallAdd(u_id,photo_url,photo_state,photo_open,photo_des){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "insert into photos values(null,?,?,?,?,?,now())" ;
        pool.query(sql,[u_id,photo_url,photo_state,photo_open,photo_des]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//wallDel , 删除一张照片墙
function wallDel(photos_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update photos set photo_state=0 where photos_id = ?" ;
        pool.query(sql,[photos_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//wallUpdate , 更改一张照片墙
function wallUpdate(photo_url,photo_state,photo_open,photo_des,photos_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update photos set photos_url=?,photo_state=?,photo_open=?,photo_des=?,create_date=now() where photos_id = ?" ;
        pool.query(sql,[photo_url,photo_state,photo_open,photo_des,photos_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//wallDelAll , 删除所有照片墙
function wallDelAll(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update photos set photo_state=0" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
module.exports={
    wallList,
    wallGetCount,
    wallAdd,
    wallDel,
    wallUpdate,
    wallDelAll
};