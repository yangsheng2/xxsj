/**
 * Created by seraphimwx on 2017/11/16.
 * 业务操作：确认订单信息【地址管理、未付款状态下的商品订单信息】
 */
"use strict";
const orderModal = require("../model/orderModal.js");
var rid;
/**
 * 1 、显示订单信息
 */
function addrList(req,res) {
    "use strict";
    console.log("list in control");
    let contacts =req.body.contacts;
    console.log(contacts);
    orderModal.listAddr(contacts).then(function(data){
        console.log(data);
        res.json({"code":200,"flag":1,"data":data});
    }).catch(function (err) {
        console.log("err:",err);
        res.json({"flag":-1,"error":err});
    })
}

/**
 * 2、添加地址信息
 */
function orderAdd(req,res) {
    "use strict";
    console.log("insert in addAddr");
    let contacts = req.body.contacts;
    let tel = req.body.tel;
    let pId = req.body.pId;
    let cId = req.body.cId;
    let aId = req.body.aId;
    let addr = req.body.addr;
    orderModal.addAddr(contacts,tel,pId,cId,aId,addr).then(function (data) {
        console.log("data:",data);
        res.json({"message":'添加成功',"flag":1,"data":data});
    }).catch(function (err) {
        console.log("err:",err);
        res.json({"flag":-1,"message":'添加失败',"error":err});
    })
}

/**
 * 3、删除地址信息,根据自增id来删除
 */
function orderDel(req,res) {
    "use strict";
    let addrId = req.body.addrId;   //addrId是参数键值
    console.log(addrId);
    orderModal.delAddr(addrId).then(function (data) {
        console.log("data in controller:",data);
        res.json({"message":'删除成功',"flag":1,"data":data});
    }).catch(function (err) {
        console.log("err in controller:",err);
        res.json({"flag":-1,"message":'删除失败',"error":err});
    })
}

/**
 * 4 、修改地址信息
 */
function orderUpdate(req,res) {
    "use strict";
    let addrId = req.body.addrId;//rid是参数键值
    let contacts = req.body.contacts;
    let tel = req.body.tel;
    let pId = req.body.pId;
    let cId = req.body.cId;
    let aId = req.body.aId;
    let addr = req.body.addr;
    //console.log(id);
    orderModal.alterAddr(contacts,tel,pId,cId,aId,addr,addrId).then(function (data) {
        console.log("data in controller:",data);
        res.json({"message":'更新成功',"flag":1,"data":data});
    }).catch(function (err) {
        console.log("err in controller:",err);
        res.json({"flag":-1,"message":'更新失败',"error":err});
    })
}

/**
 * 5、显示商品订单详细信息
 */
function orderList(req,res) {
    "use strict";
    let goodId = req.body.goodId;
    let size = req.body.size;
    orderModal.listOrder(goodId,size).then(function (data) {
        console.log("data in controller listOrder::",data);
        res.json({"code":200,"flag":1,"data":data});
    }).catch(function (err){
        console.log("err in controller listOrder::",err);
        res.json({"flag":-1,"error":err});
    })
    //     .then(function () {
    //     let num = req.query.num;
    //     orderModal.listNum(num).then(function (data) {
    //         console.log("data in controller listOrder::",data);
    //         res.send(data);
    //     }).catch(function (err) {
    //         console.log("err in controller listOrder::",err);
    //         res.send(err);
    //     })
    // })
}



//暴露接口
module.exports={
    orderList,
    orderAdd,
    orderDel,
    orderUpdate,
    addrList
};
