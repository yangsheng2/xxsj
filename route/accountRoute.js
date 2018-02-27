/*
* 文件名：userRoute.js web路由，登录和注册
* 创建者：高京生
* 创建时间：2017-11-15 09:36
* */
"use strict";
const express = require("express");
const userRoute = express.Router();

const userController = require("../controller/userController.js");
const wallController = require("../controller/wallController.js");
const collectionController = require("../controller/collectionController.js");
const carController = require("../controller/carController.js");
const goodsOrderController = require("../controller/goodsOrderController.js");
const accountController=require("../controller/accountController.js");

userRoute.route("/userReg.do").post(userController.userReg);
//注册时短信验证
userRoute.route("/userSms.do").post(userController.userSms);
userRoute.route("/userConfirm.do").post(userController.userConfirm);
userRoute.route("/userLogin.do").post(userController.userLogin);

//userRoute.route("/*").all(userController.isLogin);

/*照片墙的相关操作*/
userRoute.route("/wallList.do").get(wallController.wallList);
userRoute.route("/wallGetCount.do").post(wallController.wallGetCount);
userRoute.route("/wallAdd.do").post(wallController.wallAdd);
userRoute.route("/wallDel.do").post(wallController.wallDel);
userRoute.route("/wallUpdate.do").post(wallController.wallUpdate);
userRoute.route("/wallDelAll.do").post(wallController.wallDelAll);

/*我的收藏的相关操作*/
userRoute.route("/colList.do").post(collectionController.colList);
userRoute.route("/colDel.do").post(collectionController.colDel);
userRoute.route("/colDelAll.do").post(collectionController.colDelAll);

/*我的购物车的相关操作*/
userRoute.route("/carList.do").post(carController.carList);
userRoute.route("/carAdd.do").post(carController.carAdd);
userRoute.route("/carDel.do").post(carController.carDel);
userRoute.route("/carUpdate.do").post(carController.carUpdate);
userRoute.route("/carDelALL.do").post(carController.carDelALL);

/*商品订单及详情的相关操作*/
userRoute.route("/goodOrderList.do").post(goodsOrderController.goodOrderList);
userRoute.route("/goodOrderDel.do").post(goodsOrderController.goodOrderDel);
userRoute.route("/goodOrderDelALL.do").post(goodsOrderController.goodOrderDelALL);

userRoute.route("/testSession.do").post(userController.testSession);


//用户信息
userRoute.route("/accountLogin.do").post(accountController.accountLogin);//拦截登录
userRoute.route("/accountList.do").post(accountController.accountList);//拦截地址显示
userRoute.route("/accountUpdate.do").post(accountController.accountUpdate);//拦截地址显示

//档案

userRoute.route("/styleList.do").post(accountController.styleList);//拦截地址
userRoute.route("/ornamentList.do").post(accountController.ornamentList);//拦截地址
userRoute.route("/occasionList.do").post(accountController.occasionList);//拦截地址
userRoute.route("/figureList.do").post(accountController.figureList);//拦截地址
userRoute.route("/figureAdd.do").post(accountController.figureAdd);//拦截地址增加
userRoute.route("/figureDel.do").post(accountController.figureDel);//拦截地址删除
userRoute.route("/figureUpdate.do").post(accountController.figureUpdate);//拦截地址修改

//积分
userRoute.route("/integralList.do").post(accountController.integralList);//拦截地址显示

//服务订单
userRoute.route("/serviceOrderList.do").post(accountController.serviceOrderList);
userRoute.route("/searchServiceOrder.do").post(accountController.searchServiceOrder);
userRoute.route("/serviceOrderDel.do").post(accountController.serviceOrderDel);
userRoute.route("/serviceOrderAllDel.do").post(accountController.serviceOrderAllDel);
userRoute.route("/serviceOrderDetailList.do").post(accountController.serviceOrderDetailList);
userRoute.route("/serviceOrderDetailDel.do").post(accountController.serviceOrderDetailDel);
//评价
userRoute.route("/evaluateList.do").post(accountController.evaluateList);
userRoute.route("/evaluateDel.do").post(accountController.evaluateDel);
userRoute.route("/evaluateAdd.do").post(accountController.evaluateAdd);



module.exports = userRoute;