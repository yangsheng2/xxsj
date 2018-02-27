/**
 * Created by Administrator on 2017/11/15 0015.
 * 创建者：唐媛
 * 操作：商品订单及详情
 */
"use strict";
const express = require("express");
const goodsOrderRoute = express.Router();
const goodsOrderController = require("../controller/goodsOrderController.js");
goodsOrderRoute.route("/login.do").post(goodsOrderController.login);
goodsOrderRoute.route("/list.do").post(goodsOrderController.list);
goodsOrderRoute.route("/del.do").post(goodsOrderController.del);
goodsOrderRoute.route("/delAll.do").post(goodsOrderController.delAll);

module.exports = goodsOrderRoute;
