/**
 * Created by Administrator on 2017/11/17 0017.
 * 创建人：唐媛
 * 操作：案例详情
 */

//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. caseList , 获取所有购物车信息
 * */
function caseList(currentPage,pageSize){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        let sql = "SELECT staff.*,staff_product.*,product_photo.* FROM staff JOIN staff_product ON staff.staff_id = staff_product.staff_id JOIN product_photo ON staff_product.product_id = product_photo.product_id limit ?,?" ;
        pool.query(sql,[start,pageSize]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}

module.exports={
    caseList
};