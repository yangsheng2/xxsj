/**
 * Created by seraphimwx on 2017/11/16.
 * 路由操作：确认订单信息【地址管理、未付款状态下的商品订单信息】
 */
const myexpress = require("express");
const orderRoute = myexpress.Router();
const orderController = require("../controller/orderController.js");

orderRoute.route("/orderList.do").post(orderController.addrList);
orderRoute.route("/orderListOrder.do").post(orderController.orderList);
orderRoute.route("/orderAdd.do").post(orderController.orderAdd);
orderRoute.route("/orderDel.do").post(orderController.orderDel);
orderRoute.route("/orderUpdate.do").post(orderController.orderUpdate);
module.exports = orderRoute;


