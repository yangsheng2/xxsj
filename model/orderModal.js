/**
 * Created by seraphimwx on 2017/11/16.
 * 数据库操作：确认订单信息【地址管理、未付款状态下的商品订单信息】
 */
//引用模块
const pool = require("../model/sqlpool.js"); //连接池模块

//1. listAddr  显示地址信息
function listAddr(contacts){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        "use strict";
        let sql= "select b.contacts,p.province,c.city,g.area_name,b.full_address,b.contact_number " +
            "from address as b,province as p,city as c,area_1 as g " +
            "where b.p_id = p.p_id and b.c_id = c.c_id and b.a_id = g.a_id and b.contacts=?";
        pool.query(sql,[contacts]).then(function(data){
            console.log("data in modal listAddr ::",data);
            resolve(data);
        }).catch(function(err){
            console.log("error1::",err);
            reject(err);
        })
    });
}

//2..addAddr 添加地址信息
function addAddr(contacts,tel,pId,cId,aId,addr) {
    "use strict";
    console.log("in modal addAddr");
    return new Promise(function (resolve, reject) {
        console.log("in promise");
        let sql = "INSERT INTO address VALUES(NULL,?,?,?,?,?,?,1,NOW())";
        pool.query(sql, [contacts, tel, pId, cId, aId, addr]).then(function (data) {
            console.log("data in modal insert::", data);
            resolve(data);
        }).catch(function (err) {
            console.log("err in modal insert::", err);
            reject(err);
        })
    })
}

//3..alterAddr 修改地址信息
function alterAddr(contacts,tel,pId,cId,aId,addr,addrId) {
    "use strict";
    console.log("in modal alterAddr");
    return new Promise(function(resolve, reject){
        console.log("in promise");
        let sql = "update address set contacts=?,contact_number=?,p_id=?,c_id=?,a_id=?,full_address=? where address_id = ?";
        pool.query(sql,[contacts,tel,pId,cId,aId,addr,addrId]).then(function (data) {
            console.log("data in modal alterAddr::", data);
            resolve(data);
        }).catch(function (err) {
            console.log("err in modal alterAddr::", err);
            reject(err);
        })
    })
}

//4..delAddr 删除地址信息
function delAddr(addrId) {
    "use strict";
    console.log("in modal delAddr");
    return new Promise(function (resolve, reject) {
        console.log("in promise");
        let sql = "update address set state=0 where address_id = ?";
        pool.query(sql,[addrId]).then(function (data) {
            console.log("data in modal del::", data);
            resolve(data);
        }).catch(function (err) {
            console.log("err in modal del::", err);
            reject(err);
        })
    })
}

//5、listOrder 显示商品订单详情
function listOrder(goodId,size) {
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        "use strict";
        let sql= "SELECT DISTINCT a.img_url,b.material,b.price,b.good_name,b.size,b.color,d.num,(b.price*d.num) AS totalPrice,SUM(b.price*d.num) AS sumPrice,COUNT(1) AS goodNum FROM gimage AS a,good AS b,(select good_id,count(1) as num from order_det as b group by good_id) as d WHERE a.img_id=b.img_id and b.good_id = d.good_id and b.good_id=?";
        pool.query(sql,[goodId]).then(function(data){
            console.log("data in modal listAddr ::",data);
            console.log("size in modal listAddr ::",size);
            resolve({"data":data,"size":size});
        }).catch(function(err){
            console.log("error1::",err);
            reject(err);
        })
    });
}
//暴露接口
module.exports={
    listAddr,
    addAddr,
    delAddr,
    alterAddr,
    listOrder
};