/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：单品详情操作
 */
"use strict";
const singleModal=require("../model/singleModal.js");
//查询商品
function singlelist(req,res){
    "use strict";
    singleModal.single().then(function(data){
        console.log(data);
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    })
}
//加入购物车
function singleaddcar(req,res){
    "use strict";
    let goodId=req.body.goodId;
    let uId=req.body.uId;
    let carNum=req.body.carNum;
    singleModal.addCar(goodId,uId,carNum).then(function(data){
        res.send("保存成功");
    }).catch(function(err){
        console.log(err);
        res.send("保存失败");
    })
}
//加入收藏
function singleaddcollect(req,res){
    "use strict";
    let goodId=req.body.goodId;
    let uId=req.body.uId;
    singleModal.addCollect(goodId,uId).then(function(data){
        res.send("保存成功");
    }).catch(function(err){
        console.log(err);
        res.send("保存失败");
    })
}
//单品数量
function singlenum(req,res) {
    "use strict";
    let goodId = req.query.goodId;
    let evaId = req.query.evaId;
    let number = req.query.number;
    singleModal.singleNum(goodId, evaId, number).then(function (data) {
        res.send(data);
        //res.render("",{"data":data,"number":number});
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    })
}
//评论操作
function singleeva(req,res){
    singleModal.evaList().then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    })
}
module.exports={
    singlelist,
    singleaddcar,
    singleaddcollect,
    singlenum,
    singleeva
}