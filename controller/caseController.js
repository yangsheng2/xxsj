/**
 * Created by Administrator on 2017/11/17 0017.
 * 创建人：唐媛
 * 操作：案例详情
 */

//模块引用
const caseModel = require("../model/caseModel.js");
//1. caseList , 返回案件详情
function caseList(req,res){
    "use strict";
    let pageSize = req.body.pageSize;
    let curPage = req.body.curPage;
    caseModel.caseList(curPage,pageSize).then(function(data){
        res.json({flag:1,message:"显示成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}

module.exports={
    caseList
};