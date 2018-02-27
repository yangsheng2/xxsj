/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：照片墙详情
 */
"use strict";
const express = require("express");
const wallRoute = express.Router();
const wallController = require("../controller/wallController.js");
wallRoute.route("/login.do").post(wallController.login);
wallRoute.route("/list.do").get(wallController.list);
wallRoute.route("/getCount.do").post(wallController.getCount);
wallRoute.route("/add.do").post(wallController.add);
wallRoute.route("/del.do").post(wallController.del);
wallRoute.route("/update.do").post(wallController.update);
wallRoute.route("/delAll.do").post(wallController.delAll);

module.exports = wallRoute;