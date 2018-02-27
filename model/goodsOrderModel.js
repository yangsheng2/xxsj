/**
 * Created by Administrator on 2017/11/15 0015.
 * 创建者：唐媛
 * 操作：商品订单及详情
 */
//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. list , 获取所有商品订单
 * */
/*function list(currentPage,pageSize){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        let sql = "SELECT t_order.*,address.*,province.province,city.city,area_1.area_name,good_name,good_type,good.price,color,gimage.img_url,remark,material,COUNT(order_det.good_id) AS '数量',COUNT(order_det.good_id)*t_order.price AS '总价',t_order.state FROM t_order JOIN order_det ON t_order.order_id=order_det.order_id JOIN good ON order_det.good_id=good.good_id JOIN gimage ON good.good_id=gimage.good_id JOIN address ON t_order.address_id=address.address_id JOIN province ON province.p_id=address.p_id JOIN city ON city.c_id=address.c_id JOIN area_1 ON area_1.a_id=address.a_id where t_order.state = 1 GROUP BY order_det.good_id limit ?,?" ;
        pool.query(sql,[start,pageSize]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}*/
function search(pay_state,currentPage,pageSize){
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let arr = new Array(); //参数数组
        let sql = "SELECT t_order.*,address.*,province.province,city.city,area_1.area_name,good_name,good_type,good.price,color,order_det.size,gimage.img_url,remark,material,COUNT(order_det.good_id) AS '数量',COUNT(order_det.good_id)*t_order.price AS '总价',t_order.state FROM t_order JOIN order_det ON t_order.order_id=order_det.order_id JOIN good ON order_det.good_id=good.good_id JOIN gimage ON good.good_id=gimage.good_id JOIN address ON t_order.address_id=address.address_id JOIN province ON province.p_id=address.p_id JOIN city ON city.c_id=address.c_id JOIN area_1 ON area_1.a_id=address.a_id where t_order.state = 1 " ;
        if(pay_state!=-1){
            sql+="and t_order.pay_state = ?";
            arr.push(pay_state);
        }
        sql+=" GROUP BY order_det.good_id limit ?,?";
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        arr.push(start,pageSize);
        pool.query(sql,arr).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//add , 增加一条商品订单
//function add(){
//    "use strict";
//    //返回一个promise对象
//    return new Promise(function (resolve, reject) {
//        let sql = "select * from job" ;
//        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
//            //成功执行执行的方法
//            resolve(data);
//        }).catch(function(err){
//            reject(err);
//        });
//    });
//}
//goodOrderDel , 删除一条商品订单
function goodOrderDel(order_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "UPDATE t_order SET state=0 WHERE order_id = ?" ;
        pool.query(sql,[order_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//goodOrderDelALL , 删除所有商品订单
function goodOrderDelALL(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "UPDATE t_order SET state=0" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
function count(){
    return new Promise(function (resolve, reject) {
        let sql = "select count(1) as sum from t_order" ;
        pool.query(sql,[])
            .then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            });
    });
}

module.exports={
    //list,
    search,
    //add,
    goodOrderDel,
    goodOrderDelALL,
    count
};