/**
 * Created by Administrator on 2017/11/16 0016.
 * 创建者：唐媛
 * 操作：售后
 */
//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

//add , 增加一条售后
function saleAdd(sale_type,order_id,u_id,sale_phone,remark){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "INSERT INTO sale VALUES (NULL,?,?,?,NOW(),?,?)" ;
        pool.query(sql,[sale_type,order_id,u_id,sale_phone,remark]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}

module.exports={
    saleAdd
};