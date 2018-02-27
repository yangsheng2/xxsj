/*
* 文件名：signModel.js web model层，登录和注册
* 创建者：高京生
* 创建时间：2017-11-15 09:36
* */
"use strict";
const pool = require("../model/sqlPool.js");

//用户登录
function signIn(userName, pwd) {
    return new Promise(function (resolve, reject) {
        let sql = "select * from user where u_name=? and pwd=?";
        pool.query(sql,[userName, pwd])
            .then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
        })
    })
}

//用户注册
function signUp(userName,pwd,realName,nickName,headImg,sex,phone,integralrecord,personidcard,cardFront,cardSize,cardToDate,userEmail) {
    return new Promise(function (resolve, reject) {
        let sql = "insert into userinfo values";
        sql +="(NULL,?,?,?,?,?,?,?,?,?,'system',DEFAULT,0,?,?,?,?,1)";
        //cardToDate必须是字符串
        pool.query(sql,[userName,pwd,realName,nickName,headImg,sex,phone,integralrecord,personidcard,cardFront,cardSize,cardToDate,userEmail])
            .then(function (data) {
                console.log(data);
                resolve(data);
            }).catch(function (err) {
                console.log(err);
                reject(err);
        })
    })
}

// function signIn2(ty) {
//     return new Promise(function (resolve, reject) {
//         let sql = "";
//
//         if (ty == 1){
//             sql = "select * from goods where good";
//         }else if (ty ==2){
//             sql = "select * from suit";
//         }
//         console.log(ty, typeof ty)
//
//         pool.query(sql,[])
//             .then(function (data) {
//                 resolve(data);
//             }).catch(function (err) {
//             console.log(err);
//             reject(err);
//         })
//     })
// }
module.exports = {
  signIn,
  signUp
};