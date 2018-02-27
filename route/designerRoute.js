/**
 * Created by Administrator on 2017/11/17.
 * 杨胜 11 17 9：41
 */
"use strict";
const  myexpress=require("express");
const designerRoute=myexpress.Router();
const designerController=require("../controller/designerController.js");
designerRoute.route("/designerBannerList.do").post(designerController.designerBannerList);//banner显示
designerRoute.route("/serviceList.do").post(designerController.serviceList);//服务显示
designerRoute.route("/staff_evaluate.do").post(designerController.staff_evaluate)//评价显示
designerRoute.route("/staffStyle.do").post(designerController.staffStyle);//设计师风采
designerRoute.route("/designerCase.do").post(designerController.designerCase);//案列显示
designerRoute.route("/deleteStaff").post(designerController.deleteStaff);//案列显示
module.exports=designerRoute;