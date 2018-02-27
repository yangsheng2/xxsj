/*
* 文件名: 静态页面请求路由层
* 新增：高京生
* 创建时间：2017-11-17 0:00
 */
"use strict";
const express = require("express");
const viewRoute = express.Router();
const viewController = require("../controller/viewController.js");


//高京生 ejs route
viewRoute.route("/userManage.html").get(viewController.userManage);
module.exports = viewRoute;