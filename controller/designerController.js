/**
 * Created by Administrator on 2017/11/17.
 * 杨胜 11 17 9：41
 */
"use strict";
const designerModal=require("../modal/designerModal.js");
function designerBannerList(req,res) {
    let designerId=req.body.designerId;
    designerModal.designerBannerList(designerId).then(function (data) {
        res.json(data);
    }).catch(function (err) {
            res.send(err);
            console.log(err);
        })
};//banner显示//案例
function serviceList(req,res) {
    let designerId=req.body.designerId;
    designerModal.serviceList(designerId).then(function (data) {
        res.json(data)

    }).catch(function (err) {
        res.send(err);
        console.log(err)
    })
}//服务类型显示
function staffStyle(req,res) {
    let designerId=req.body.designerId;
    designerModal.staffStyle(designerId).then(function (data) {
        res.json(data)

    }).catch(function (err) {
        res.send(err)
    })
}//设计师风采;
function staff_evaluate(req,res) {
    let designerId=req.body.designerId;
    let num=req.body.num;
    let nowPage=req.body.nowPage;
    designerModal.staff_evaluate(designerId,num,nowPage).then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.send(err);
        console.log(err)
    })
}//评价
function designerCase(req,res) {
    let designerId=req.body.designerId;
    let num=req.body.num;
    let nowPage=req.body.nowPage;
    designerModal.designerCase(designerId,num,nowPage).then(function (data) {
        res.json({"designerBanner":data});
    }).catch(function (err) {
        res.send(err);
        console.log(err);
    })
};//banner显示//案例
function deleteStaff(req,res) {
    "use strict";
    let staffId=req.body.staffId;
    designerModal.deleteStaff(staffId).then(function (data) {
        if(data.affectedRows>0){
            res.send("禁用成功")
        }else{
            res.send("禁用失败")
        }
    }).catch(function (err) {
        res.send(err);
        console.log(err);
    })
}//删除员工；
module.exports={
    designerBannerList,
    serviceList,
    staffStyle,
    staff_evaluate,
    designerCase,
    deleteStaff
}