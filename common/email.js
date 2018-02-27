/*
* 文件名：email.js 发送email的公共文件
* 创建者：高京生
* 创建时间：2017-11-14 19:21
* */
"use strict";
const nodemailer = require("nodemailer");
module.exports  = {
    email(user,pass,subject,text,toMail,content,arr,fun) {
        // 测试用账号
        // let  user="994406788@qq.com";
        // let  pass="upcekvwoauhbbdjg";
        /*
        * user 发送者邮箱，必须
        * pass 发送者邮箱密码，必须
        * subject 邮件主题，必须
        * text 邮件文本内容
        * toMail 目标邮箱，必须
        * contect html内容
        * arr 其他内容，数组
        * */
        let fromEmail = nodemailer.createTransport({
            service:"qq",
            auth:{
                user:user,
                pass:pass
            }
        });
        let message = {
            from:user,
            to:toMail,
            subject:subject,
            text:text,
            html:content,
            attachments:arr
        };
        fromEmail.sendMail(message,function (err,data) {
            fun(err,data);
            fromEmail.close();
        });
    }
};
