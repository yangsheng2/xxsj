/*
* 文件名:管理员路由层
* 新增：雷云凯
* 创建时间：2017-11-15 19:39
 */
"use strict";
const express = require("express");
const adminRoute = express.Router();
const userController = require("../controller/userController.js");

//判断登录 高京生
//全局判断是否登录。
//adminRoute.route("/*").all(userController.isLogin);
// 高京生 ejs route
// adminRoute.route("/userManage.html").get(userController.userManagement);
//用户档案表
adminRoute.route("/userArchivesList").get(userController.userArchivesList);
adminRoute.route("/userArchivesAdd").post(userController.userArchivesAdd);
adminRoute.route("/userArchivesDelete").get(userController.userArchivesDelete);
adminRoute.route("/useruserArchiveUpdate").get(userController.userArchiveUpdate);
adminRoute.route("/userArchivesSearch").get(userController.userArchivesSearch);
//用户照片表
adminRoute.route("/userPhotoList").get(userController.userPhotoList);
adminRoute.route("/userPhotoAdd").post(userController.userPhotoAdd);
adminRoute.route("/userPhotoDelete").get(userController.userPhotoDelete);
adminRoute.route("/userPhotoUpdate").get(userController.userPhotoUpdate);
adminRoute.route("/userPhotoSearch").get(userController.userPhotoSearch);
//用户关注表
adminRoute.route("/userFollowList").get(userController.userFollowList);
adminRoute.route("/userFollowAdd").post(userController.userFollowAdd);
adminRoute.route("/userFollowDelete").get(userController.userFollowDelete);
adminRoute.route("/userFollowUpdate").get(userController.userFollowUpdate);
adminRoute.route("/userFollowSearch").get(userController.userFollowSearch);
//用户收藏表
adminRoute.route("/userCollectList").get(userController.userCollectList);
adminRoute.route("/userCollectAdd").post(userController.userCollectAdd);
adminRoute.route("/userCollectDelete").get(userController.userCollectDelete);
adminRoute.route("/userCollectUpdate").get(userController.userCollectUpdate);
adminRoute.route("/userCollectSearch").get(userController.userCollectSearch);
//用户个人信息表
adminRoute.route("/userInfoList").get(userController.userInfoList);
adminRoute.route("/userInfoAdd").post(userController.userInfoAdd);
adminRoute.route("/userInfoDelete").get(userController.userInfoDelete);
adminRoute.route("/userInfoUpdate").get(userController.userInfoUpdate);
adminRoute.route("/userInfoSearch").get(userController.userInfoSearch);
//用户积分记录表
adminRoute.route("/userIntegralRecordList").get(userController.userIntegralRecordList);
adminRoute.route("/userIntegralRecordAdd").get(userController.userIntegralRecordAdd);
adminRoute.route("/userIntegralRecordDelete").get(userController.userIntegralRecordDelete);
adminRoute.route("/userIntegralRecordUpdate").get(userController.userIntegralRecordUpdate);
adminRoute.route("/userIntegralRecordSearch").get(userController.userIntegralRecordSearch);
//用户积分等级表
adminRoute.route("/userIntegralGradeList").get(userController.userIntegralGradeList);
adminRoute.route("/ userIntegralGradeAdd").post(userController.userIntegralGradeAdd);
adminRoute.route("/userIntegralGradeDelete").get(userController.userIntegralGradeDelete);
adminRoute.route("/userIntegralGradeUpdate").get(userController.userIntegralGradeUpdate);
adminRoute.route("/userIntegralGradeSearch").get(userController.userIntegralGradeSearch);
//用户地址表
adminRoute.route("/userAddressList").get(userController.userAddressList);
adminRoute.route("/userAddressAdd").post(userController.userAddressAdd);
adminRoute.route("/userAddressDelete").get(userController.userAddressDelete);
adminRoute.route("/userAddressUpdate").get(userController.userAddressUpdate);
adminRoute.route("/userAddressSearch").get(userController.userAddressSearch);
//用户售后表
adminRoute.route("/userCustomerServiceList").get(userController.userCustomerServiceList);
adminRoute.route("/userCustomerServiceAdd").post(userController.userCustomerServiceAdd);
adminRoute.route("/userCustomerServiceDelete").get(userController.userCustomerServiceDelete);
adminRoute.route("/userCustomerServiceUpdate").get(userController.userCustomerServiceUpdate);
adminRoute.route("/userCustomerServiceSearch").get(userController.userCustomerServiceSearch);
//用户订阅表
adminRoute.route("/userSubscribeList").get(userController.userSubscribeList);
adminRoute.route("/userSubscribeAdd").get(userController.userSubscribeAdd);
adminRoute.route("/userSubscribeDelete").get(userController.userSubscribeDelete);
adminRoute.route("/userSubscribeUpdate").get(userController.userSubscribeUpdate);
adminRoute.route("/userSubscribeSearch").get(userController.userSubscribeSearch);
//用户服务订单表
//用户服务订单详情表
//用户购物车表

module.exports = adminRoute;