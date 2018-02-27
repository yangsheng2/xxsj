/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：套装详情表，套装详情页 套装详情控制层
 */
"use strict";
const suitModal=require("../model/suitModal.js");
//操作展示套装详情
function suitlist(req,res) {
    "use strict";
    suitModal.suitList().then(function (data) {
        res.send(data);
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    })
}
//操作展示套装单品
function suitsingle(req,res){
    "use strict";
    suitModal.singleList().then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    })
}
//操作展示相同风格套装
function sameSuit(req,res){
    "use strict";
    suitModal.samesuitList().then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    })
}
//操作加入购物车
function suitaddcar(req,res){
    "use strict";
    let goodId=req.body.goodId;
    let uId=req.body.uId;
    let carNum=req.body.carNum;
    suitModal.addCar(goodId,uId,carNum).then(function(data){
        res.send("保存成功");
    }).catch(function(err){
        console.log(err);
        res.send("保存失败");
    })
}
//操作加入收藏夹
function suitaddcollect(req,res){
    "use strict";
    let goodId=req.body.goodId;
    let uId=req.body.uId;
    suitModal.addCollect(goodId,uId).then(function(data){
        res.send("保存成功");
    }).catch(function(err){
        console.log(err);
        res.send("保存失败");
    })
}
function suitnum(req,res){
    "use strict";
    let goodId = req.query.goodId;
    let evaId = req.query.evaId;
    let number=req.query.number;
    suitModal.suitNum(goodId,evaId,number).then(function (data) {
        res.send(data);
        //res.render("",{"data":data,"number":number});
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    })
}
//评论操作
function suiteva(req,res){
    suitModal.evaList().then(function(data){
        res.send(data);
    }).catch(function(err){
        console.log(err);
        res.send(err);
    })
}
module.exports= {
    suitlist,
    suitsingle,
    sameSuit,
    suitaddcar,
    suitaddcollect,
    suitnum,
    suiteva
}