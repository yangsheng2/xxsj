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
const saleController = require("../controller/saleController.js");
const caseController = require("../controller/caseController.js");
const indexController = require("../controller/indexController.js");


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

/*售后页面的操作*/
userRoute.route("/saleAdd.do").post(saleController.saleAdd);

/*案例详情的相关操作*/
userRoute.route("/caseList.do").post(caseController.caseList);

/*首页的相关操作*/
userRoute.route("/openList.do").post(indexController.openList);


userRoute.route("/testSession.do").post(userController.testSession);

module.exports = userRoute;