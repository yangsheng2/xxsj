/**
 * Created by Administrator on 2017/11/17.
 * ������֧��ҳ���·��
 */
const myexpress=require("express");
const payRoute=myexpress.Router();
const payController=require("../controller/payController.js");

payRoute.route("/paylist.do").get(payController.paylist);
payRoute.route("/payend.do").post(payController.payend);

module .exports=payRoute;