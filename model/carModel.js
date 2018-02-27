/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：购物车
 */

//引用模块
const pool = require("../model/sqlPool.js"); //连接池模块

/**
 * 1. carList , 获取所有购物车信息
 * */
function carList(currentPage,pageSize){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        let sql = "select car.*,good_name,good_type,price,remark,gimage.img_url,color,material,car_sale_num*price as '金额' from car join good on car.goods_id=good.good_id join gimage on good.good_id=gimage.good_id where car_state=1 limit ?,?" ;
        pool.query(sql,[start,pageSize]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//carAdd , 增加一条购物车
function carAdd(goods_id,u_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "insert into car values(null,?,?,now(),1,1);" ;
        pool.query(sql,[goods_id,u_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//carDel , 删除一条购物车
function carDel(car_id){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update car set car_state=0 where car_id= ?" ;
        pool.query(sql,[car_id]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//carUpdate , 更改一条购物车
function carUpdate(car_sale_num,color,material,size,car_id) {
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update car,good set car_sale_num=?,color=?,material=?size=? where car.goods_id=good.good_id and car_id=?";
        pool.query(sql, [car_sale_num,color,material,size,car_id]).then(function (data) {   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function (err) {
                reject(err);
        })
    });
}

//carDelALL , 删除所有购物车
function carDelALL(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        let sql = "update car set car_state=0" ;
        pool.query(sql,[]).then(function(data){   //pool.query返回的是一个promise对象，所以可以使用then
            //成功执行执行的方法
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}

module.exports={
    carList,
    carAdd,
    carDel,
    carUpdate,
    carDelALL
};