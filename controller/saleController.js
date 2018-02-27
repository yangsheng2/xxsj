/**
 * Created by Administrator on 2017/11/16 0016.
 * 创建者：唐媛
 * 操作：售后
 */
"use strict";
//模块引用
const saleModel = require("../model/saleModel.js");

//2. saleAdd , 增加一条售后
function saleAdd(req,res){
    "use strict";
    let sale_type = req.body.sale_type;
    let order_id = req.body.order_id;
    let u_id = req.body.u_id;
    let sale_phone = req.body.sale_phone;
    let remark = req.body.remark;
    saleModel.saleAdd(sale_type,order_id,u_id,sale_phone,remark).then(function(data){
        res.json({flag:1,message:"增加成功",data:data});
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
    saleAdd,
    isLogin
};