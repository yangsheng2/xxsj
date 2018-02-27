/*
* 文件名：signController.js web控制，登录和注册
* 创建者：高京生
* 创建时间：2017-11-15 09:36
* */
"use strict";
const signModel = require("../model/signModel.js");
//用户登录
//登录成功则用户信息存入req.session.userInfo
function signIn(req,res){
    "use strict";
    let userName = req.body.userName;
    let pwd = req.body.pwd;
    signModel.signIn(userName,pwd).then(function(data){
        if(data.length>0){
            req.session.userInfo = data[0];
            res.send({code:200});
        }else{
            res.send({code:400});
        }
        //code:200登录成功
        //code:400登录失败
    }).catch(function(err){
        res.send({code:500,info:err});
        //code:500服务器错误
    });
}
//用户注册
function signUp(req,res){
    "use strict";
    let userName = req.body.userName,
        pwd      = req.body.pwd,
        realName = req.body.realName,
        nickName = req.body.nickName,
        headImg  = req.body.headImg,
        sex      = req.body.sex,
        phone    = req.body.phone,
        integralrecord = req.body.integralrecord,
        personidcard = req.body.personidcard,
        cardFront = req.body.cardFront,
        cardSize = req.body.cardSize,
        cardToDate = req.body.cardToDate,
        userEmail    = req.body.userEmail;
    signModel.signUp(userName,pwd,realName,nickName,headImg,sex,phone,integralrecord,personidcard,cardFront,cardSize,cardToDate,userEmail).then(function(data){
        if (data.affectedRows === 1){
            res.send({code:200});
        }
        //code:200注册成功
    }).catch(function(err){
         if (err.code === 'ER_DUP_ENTRY'){
             res.send({code:400,info:err});
             //code:400注册失败，账号已存在
        }
    });
}



// function signLogin(req,res){
//     "use strict";
//     let userName = req.body.name;
//     let pwd = req.body.pwd;
//     let r1,r2;
//     signModel.signIn(userName,pwd).then(function(data){
//
//         // req.session.userInfo = data.data;
//         // res.send(data);
//         r1 = data;
//         res.send(r1)
//     })
//         .then(function () {
//             let ty = r1[1].good_type;
//
//             signModel.signIn2(ty).then(function (data) {
//                 r2 = data;
//                 console.log(r2);
//                 res.send(r2)
//             })
//         })
//
//
//         .catch(function(err){
//         console.log(err);
//         // res.send({code:500});
//     });
// }





module.exports={
    signIn,
    signUp
};