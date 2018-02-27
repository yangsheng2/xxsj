//高京生 cms员工登录路由层

const express = require("express");

const staffRoute = express.Router();
const viewController = require("../controller/viewController.js");
//登录
staffRoute.route("/login.staff").post(viewController.staffLogin);

module.exports = staffRoute;