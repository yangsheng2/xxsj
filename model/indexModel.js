/**
 * Created by Administrator on 2017/11/17 0017.
 * 创建人：唐媛
 * 操作：首页的相关操作
 */

//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. openList , 显示公开的照片
 * */
function openList(photos_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "SELECT photos.photos_url,userinfo.u_name FROM photos JOIN userinfo ON photos.u_id = userinfo.u_id WHERE photos.photo_state = 1 AND photo_open = 1 and photos_id=?" ;
        pool.query(sql,[photos_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}

module.exports={
    openList
};