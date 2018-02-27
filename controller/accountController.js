/**
 * Created by Administrator on 2017/11/14.
 * 创建***********
 * 文件名：accountController 用户信息业务
 * 创建人：刘玉娇
 * 创建时间：2017/11/14/20:00
 */
    "use strict";
const accountModule=require("../model/accountModel.js");//引用模块
function accountLogin(req,res){//用户登录
    "use strict";
    let u_name = req.body.u_name;
    let pwd = req.body.pwd;
    accountModule.accountLogin(u_name,pwd).then(function(data){
                if(data.code==1){
                    req.session.accountInfo = data.data;
                }
                res.send({flag:1,message:"登录成功",data:data.data});
                ////0: // 账号不存在 1 ://登录成功 2://密码不正确
            }).catch(function(err){
                console.log(err);
                res.send({flag:-1,message:"登录失败",err:err});
            });
}
function accountList(req,res){//用户信息的显示
    accountModule.accountList().then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({code: 500});
    });
}
function accountUpdate(req,res){//更新用户部分信息
    let u_nickname=req.body.u_nickname;
    let u_headimg=req.body.u_headimg;
    let u_sex=req.body.u_sex;
    let u_phone=req.body.u_phone;
    let card_front=req.body.card_front;
    let card_size=req.body.card_size;
    let card_to_date=req.body.card_to_date;
    let email=req.body.email;
    //let u_id=req.session.accountInfo.u_id;
    let u_id=req.body.u_id;
    accountModule.accountUpdate(u_nickname,u_headimg,u_sex,u_phone,card_front,card_size,card_to_date,email,u_id).then(function(data){
        res.send({flag:1,message:"修改成功",data:data});
        console.log(data);
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}

//档案
//所有风格显示
function styleList(req,res){
    accountModule.styleList().then(function(data){
        let arr=[];//一个数组
        for(var i in data){//遍历数据库获取的所有风格的值
            console.log(data[i].fk_value);
            arr.push(data[i].fk_value);//将值放入数组中所有风格的值
        }
        res.send({flag:1,message:"成功",data:data,info:arr});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//所有配饰显示
function ornamentList(req,res){
    accountModule.ornamentList().then(function(data){
        let arr=[];//一个数组
        for(var i in data){//遍历数据库获取的所有风格的值
            console.log(data[i].fk_value);
            arr.push(data[i].fk_value);//将值放入数组中所有风格的值
        }
        res.send({flag:1,message:"成功",data:data,info:arr});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//所有场合显示
function occasionList(req,res){
    accountModule.occasionList().then(function(data){
        let arr=[];//一个数组
        for(var i in data){//遍历数据库获取的所有风格的值
            console.log(data[i].fk_value);
            arr.push(data[i].fk_value);//将值放入数组中所有风格的值
        }
        res.send({flag:1,message:"成功",data:data,info:arr});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//用户档案
function figureList(req,res){//显示用户档案列表
    accountModule.figureList().then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
function figureAdd(req,res){//添加档案
    let photo_front=req.body.photo_front;
    let photo_size=req.body.photo_size;
    let height=req.body.height;
    let weight=req.body.weight;
    let bust=req.body.bust;
    let waist=req.body.waist;
    let crotch=req.body.crotch;
    let hips=req.body.hips;
    let amark=req.body.amark;
    //let u_id=req.session.accountInfo.uid;
    let u_id=req.body.u_id;
    let style_name=req.body.style_name;
    let archives_name=req.body.archives_name;
    let shoe_long=req.body.shoe_long;
    let ornament=req.body.ornament;
    let occasion=req.body.occasion;
    accountModule.figureAdd(photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style_name,archives_name,shoe_long,ornament,occasion).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({code: 500});
    });
}
function figureDel(req,res){//删除档案
    let archives_id=req.body.archives_id;
    accountModule.figureDel(archives_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({code: 500});
    });
}
function figureUpdate(req,res){//修改档案
    let photo_front=req.body.photo_front;
    let photo_size=req.body.photo_size;
    let height=req.body.height;
    let weight=req.body.weight;
    let bust=req.body.bust;
    let waist=req.body.waist;
    let crotch=req.body.crotch;
    let hips=req.body.hips;
    let amark=req.body.amark;
    //let u_id=req.session.accountInfo.uid;
    let u_id=req.body.u_id;
    let style=req.body.style;
    let archives_name=req.body.archives_name;
    let shoe_long=req.body.shoe_long;
    let ornament=req.body.ornament;
    let occasion=req.body.occasion;
    let archives_id=req.body.archives_id;
    accountModule.figureUpdate(photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style,archives_name,shoe_long,ornament,occasion,archives_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({code: 500});
    });
}


//积分
function integralList(req,res){//显示积分
    accountModule.integralList().then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({code: 500});
    });
}

//服务订单
//显示所有订单
function serviceOrderList(req,res){//显示全部订单
    let currentPage=req.body.currentPage;
    let account=req.body.account;
    console.log(currentPage);
    console.log(account);
    accountModule.serviceOrderList(currentPage,account).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
function searchServiceOrder(req,res){//根据订单的状态显示订单
    let pay_state=req.body.pay_state;
    accountModule.searchServiceOrder(pay_state).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({code: 500});
    });
}
//删除某一订单
function serviceOrderDel(req,res){//点击删除删除对应的订单
    //let u_id=req.session.accountInfo.u_id;
    let service_order_id=req.body.service_order_id;
    accountModule.serviceOrderDel(service_order_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
        console.log(data);
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//删除全部订单
function serviceOrderAllDel(req,res){//删除所有订单记录
    let u_id=req.body.u_id;
    //let u_id=req.session.accountInfo.u_id;
    //let service_order_id=req.body.service_order_id;
    accountModule.serviceOrderAllDel(u_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
        console.log(data);
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//订单详情
//显示订单详情
function serviceOrderDetailList(req,res){//订单详情显示
    //let u_id=req.session.accountInfo.u_id;
    let service_order_id=req.body.service_order_id;
    accountModule.serviceOrderDetailList(service_order_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
        console.log(data);
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//删除订单
function serviceOrderDetailDel(req,res){//删除订单详情
    //let u_id=req.session.accountInfo.u_id;
    let order_det_id=req.body.order_det_id;
    accountModule.serviceOrderDetailDel(order_det_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
        console.log(data);
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    });
}

//评价
function evaluateList(req,res){//显示评价
    accountModule.evaluateList().then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err) {
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
function evaluateAdd(req,res){//添加评价
    let evaluate_text=req.body.evaluate_text;
    let evaluate_img=req.body.evaluate_img;
    let evaluate_start=req.body.evaluate_start;
    let u_id=req.body.u_id;
    //let u_id=req.session.accountInfo.u_id;
    let good_id=req.body.good_id;
    accountModule.evaluateAdd(evaluate_text,evaluate_img,evaluate_start,u_id,good_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
function evaluateDel(req,res){//删除评价
    let evaluate_id=req.body.evaluate_id;
    accountModule.evaluateDel(evaluate_id).then(function(data){
        res.send({flag:1,message:"成功",data:data});
    }).catch(function(err){
        res.send({flag:-1,message:"失败原因",err:err});
    })
}
module.exports={
    accountLogin,accountList,accountUpdate,//用户信息
    styleList,ornamentList,occasionList,figureList,figureAdd,figureDel,figureUpdate,//档案信息
    integralList,//积分
    serviceOrderList,searchServiceOrder,serviceOrderDel,serviceOrderDetailList,serviceOrderDetailDel,serviceOrderAllDel,//服务订单
    evaluateList,evaluateAdd,evaluateDel//评价
};




