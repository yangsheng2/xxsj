/**
 * Created by Administrator on 2017/11/15 0015.
 * 创建者：唐媛
 * 操作：商品订单及详情
 */
"use strict";
//模块引用
const goodsOrderModel = require("../model/goodsOrderModel.js");

//1. goodOrderList , 返回商品订单所有信息
function goodOrderList(req,res){
    "use strict";
    var goodOrderInfo;
    var count ;
    var goodOrderList;
    let pageSize = req.body.pageSize;
    let curPage = req.body.curPage;
    //1、查询的数据及分页
    //2、统计表的记录总数
    //3、显示表记录、分页
    let pay_state = req.body.pay_state;
    goodsOrderModel.search(pay_state,curPage,pageSize).then(function (data) {
        goodOrderInfo = data;
    }).then(function(){
        goodsOrderModel.count().then(function(data){  //商品总数，用于分页
            count = data;
            console.log(data);
            res.json({flag:1,message:"显示成功","goodOrderInfo":goodOrderInfo,"count":count});

        })
    })/*.then(function () {
        goodsOrderModel.list(1,2).then(function(data){   //第一页显示的数据
            goodOrderList = data;
            console.log(goodOrderList);
            res.json({flag:1,message:"显示成功","goodOrderInfo":goodOrderInfo,"count":count,"goodOrderList":"goodOrderList"});
        }).catch(function(err){
            console.log(err);
            res.send({flag:-1,message:"失败原因",err:err});
        });
    });*/
}
//3. goodOrderDel , 删除一条商品订单
function goodOrderDel(req,res){
    "use strict";
    let order_id = req.body.order_id;
    goodsOrderModel.goodOrderDel(order_id).then(function(data){
        res.json({flag:1,message:"删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//4. goodOrderDelALL , 删除所有商品订单
function goodOrderDelALL(req,res){
    "use strict";
    goodsOrderModel.goodOrderDelALL().then(function(data){
        res.json({flag:1,message:"全部删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
function isLogin(req,res,next){
    if(!req.session.userInfo){
        res.redirect('/login.html');
    }else{
        next();
    }
}
module.exports={
    goodOrderList,
    goodOrderDel,
    goodOrderDelALL,
    isLogin
};