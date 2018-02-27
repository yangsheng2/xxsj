/**
 * Created by Administrator on 2017/11/14.
 *  * 杨胜
 * 修改日期 11/14 20:33
 */
"use strict";
const myexpress=require("express");
const serviceIndexRoute = myexpress.Router();
const serviceIndexControllor = require("../controller/serviceIndexControllor.js");
serviceIndexRoute.route("/designerList.do").post(serviceIndexControllor.designerList);//设计师显示查询和分页
module.exports = serviceIndexRoute;