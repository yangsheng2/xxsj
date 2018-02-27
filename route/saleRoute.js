/**
 * Created by Administrator on 2017/11/16 0016.
 * 创建者：唐媛
 * 操作：售后
 */
"use strict";
const express = require("express");
const saleRoute = express.Router();
const saleController = require("../controller/saleController.js");
saleRoute.route("/login.do").post(saleController.login);
saleRoute.route("/add.do").post(saleController.add);

module.exports = saleRoute;