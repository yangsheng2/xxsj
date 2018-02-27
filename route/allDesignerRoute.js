/**
 * Created by Administrator on 2017/11/15.
 * 杨胜 11 15 9:47
 */
"use strict";
const myexpress=require("express");
const allDesignerRoute=myexpress.Router();
const allDesignerController=require("../controller/allDesignerController.js");
allDesignerRoute.route("/allDesignerList.do").post(allDesignerController.allDesignerList);
allDesignerRoute.route("/follow.do").post(allDesignerController.follow);
allDesignerRoute.route("/like.do").post(allDesignerController.like);
allDesignerRoute.route("/province.do").get(allDesignerController.province);
allDesignerRoute.route("/city.do").post(allDesignerController.city);
allDesignerRoute.route("/nameSelect.do").post(allDesignerController.nameSelect);
allDesignerRoute.route("/allService.do").get(allDesignerController.allService);
module.exports= allDesignerRoute;