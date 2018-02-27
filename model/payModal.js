/**
 * Created by Administrator on 2017/11/17.
 * 操作：支付页面modal层
 */
const pool=require("../model/sqlPool.js");
//查询支付订单编号，价格
function List(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT order_id,price FROM t_order WHERE u_id=1";
        pool.query(sql,[]).then(function(data){
            console.log(data);
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//根据支付参数对订单状态进行更改 1.未支付 0.已支付
function payend(para){
    "use strict";
    if(para==1){
        return new Promise(function (resolve, reject) {
            let sql="update t_order set state=0 where u_id=2";
            pool.query(sql,[]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    }
    else{
        return new Promise(function(resolve,reject){
            resolve("Payment not completed");
        })
    }

}
module.exports={
    List,
    payend
}
