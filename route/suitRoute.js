/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：套装详情表，套装详情页 套装详情路由
 */
const myexpress=require("express");
const suitRoute=myexpress.Router();
const suitController=require("../controller/suitController.js");

suitRoute.route("/suitlist.do").post(suitController.suitlist);
suitRoute.route("/suitsingle.do").get(suitController.suitsingle);
suitRoute.route("/suitsame.do").get(suitController.sameSuit);
suitRoute.route("/suitnum.do").get(suitController.suitnum);
suitRoute.route("/suitaddcar.do").post(suitController.suitaddcar);
suitRoute.route("/suitaddcollect.do").post(suitController.suitaddcollect);
suitRoute.route("/suiteva.do").post(suitController.suiteva);
module .exports=suitRoute;