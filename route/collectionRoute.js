/**
 * 文件名：collectionRoute.js 我的收藏
 * 创建者：唐媛
 * 创建时间：2017/11/14 18:50.
 */

"use strict";
const express = require("express");
const collectionRoute = express.Router();
const collectionController = require("../controller/collectionController.js");
collectionRoute.route("/login.do").get(collectionController.login);
collectionRoute.route("/list.do").get(collectionController.list);
//collectionRoute.route("/add.do").post(collectionController.add);
collectionRoute.route("/del.do").post(collectionController.del);
collectionRoute.route("/delAll.do").post(collectionController.delAll);

module.exports = collectionRoute;
