/*
* 文件名：signRoute.js web路由，登录和注册
* 创建者：高京生
* 创建时间：2017-11-15 09:36
* */
"use strict";
const express = require("express");
const signRoute = express.Router();

const signController = require("../controller/signController.js");
signRoute.route("/signIn.do").post(signController.signIn);
signRoute.route("/signUp.do").post(signController.signUp);
module.exports = signRoute;