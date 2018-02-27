/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：购物车
 */
"use strict";
const express = require("express");
const carRoute = express.Router();
const carController = require("../controller/carController.js");
carRoute.route("/list.do").get(carController.list);
carRoute.route("/add.do").post(carController.add);
carRoute.route("/del.do").post(carController.del);
carRoute.route("/update.do").post(carController.update);
carRoute.route("/delAll.do").post(carController.delAll);

module.exports = carRoute;