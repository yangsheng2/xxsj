/**
 * Created by Administrator on 2017/11/17 0017.
 * 创建人：唐媛
 * 操作：首页的相关操作
 */

//模块引用
const indexModel = require("../model/indexModel.js");
//1. caseList , 返回公开的照片
function openList(req,res){
    "use strict";
    let photos_id = req.body.photos_id;
    indexModel.openList(photos_id).then(function(data){
        res.json({flag:1,message:"显示成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}

module.exports={
    openList
};