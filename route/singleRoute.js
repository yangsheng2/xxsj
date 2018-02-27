/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：单品详情路由
 */
const myexpress=require("express");
const singleRoute=myexpress.Router();
const singleController=require("../controller/singleController.js");

singleRoute.route("/singlelist.do").get(singleController.singlelist);
singleRoute.route("/singlenum.do").get(singleController.singlenum);
singleRoute.route("/singleaddcar.do").post(singleController.singleaddcar);
singleRoute.route("/singleaddcollect.do").post(singleController.singleaddcollect);
singleRoute.route("/singleeva.do").post(singleController.singleeva);
module .exports=singleRoute;