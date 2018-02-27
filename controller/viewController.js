/*
* 文件名: 静态页面 业务层
* 新增：高京生
* 创建时间：2017-11-17 0:00
 */
"use strict";
const viewModel = require("../model/viewModel.js");

function adminLogin(req,res) {

    let name = 1;
    let pwd  =1;

    viewModel.adminLogin(name, pwd).then(function (data) {
        req.session.login = data[0];
        res.send({code: 200, data: data,im:"管理员登录成功"});

    }).catch(function (err) {
        res.send({code: 500,err:err});
    });


}

function staffLogin(req,res) {

    let name = 2;
    let pwd  =2;

    viewModel.staffLogin(name, pwd).then(function (data) {
        req.session.login = data[0];
        res.send({code: 200, data: data,im:"管理员登录成功"});

    }).catch(function (err) {
        res.send({code: 500,err:err});
    });

}
//判断是否登录
function isLogin(req, res, next) {
    res.send("1");
}


//高京生 ejs 操作。
function userManage(req,res) {
    let name;
    console.log(req.session.login);
    if (req.session.login.manager_id){
        name = "管理员"+req.session.login.manager_id;
    }
    if (req.session.login.sc_id){
        name = "设计师"+req.session.login.sc_id;
    }
    console.log(name,req.session.login.sc_id);
    res.render("userManage",{"data":name});
}
module.exports = {
    userManage,
    adminLogin,
    staffLogin,
    isLogin
};
