/**
 * 文件名：collectionModel.js
 * 创建者：唐媛
 * 创建时间：2017/11/14 18:50.
 * 收藏相关的业务操作
 */

//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. listCol , 获取所有收藏信息
 * */
function listCol(currentPage,pageSize){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        let sql = "select collection.*,good_name,good_type,price,remark,gimage.img_url from collection join good on collection.good_id=good.good_id join gimage on good.good_id=gimage.good_id where collection.col_state=1;" ;
        pool.query(sql,[start,pageSize]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//delCol , 删除一条收藏
function delCol(col_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update collection set col_state=0 where col_id=?" ;
        pool.query(sql,[col_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//delAllCol , 删除所有收藏
function delAllCol(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update collection set col_state=0" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
module.exports={
    listCol,
    delCol,
    delAllCol
};