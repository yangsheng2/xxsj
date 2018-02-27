/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：商品表，商品页
 */
const myexpress = require("express");
const goodsRoute = myexpress.Router();
const goodsControl = require("../controller/goodsController.js");

goodsRoute.route("/list.do").post(goodsControl.goodsList);
goodsRoute.route("/search.do").post(goodsControl.goodsSearch);
module.exports = goodsRoute;
