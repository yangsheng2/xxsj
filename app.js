/*
* 文件名：app.js 主应用
* 创建者：高京生
* 创建时间：2017-11-14 16:16
* */
"use strict";

//先 npm init 初始化
//创建服务
const express = require("express");

//引用
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
//引用ejs
const ejs = require("ejs");
//cookie引用
const session = require("express-session");
const cookie = require("cookie-parser");
//引用日志模块
const morgan = require("morgan");
//引用短信模块
const sms = require("leancloud-storage/live-query");

//const email = require("./common/email.js");


//引用路由

const serviceIndexRoute = require("./route/serviceIndexRoute.js");
const allDesignerRoute= require("./route/allDesignerRoute.js");
const designerRoute=require("./route/designerRoute.js");
const app = express();
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    //res.header("Access-Control-Allow-Headers","X-Request-With");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    //res.header("Content-Type","application/x-www-form-urlencoded");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    //res.header("'Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-File-Name'");
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

/*
* 文件名:引用路由地址
* 新增：雷云凯
* 创建时间：2017-11-14 20:31
 */
const adminRoute = require("./route/adminRoute.js");
const staffRoute = require("./route/staffRoute.js");
const viewRoute  = require("./route/viewRoute.js");

//配置
app.use(bodyParser.urlencoded({extended: false}));
//静态资源配置
app.use(express.static(__dirname + "/public"));
//favicon配置
app.use(favicon(__dirname + "/public/favicon.png"));
//短信发送初始化
sms.initialize("guJYj4YvvUmMBUdS1SthyFRC-gzGzoHsz", "XDlkDLzyX32xVLKmVpal6j0E");
//cookie配置
app.use(cookie());
app.use(session({
    secret: '1234',
    name: 'app',
    cookie: {maxAge: 50000},
    rolling: true,
    resave: true
}));
//ejs配置
app.set("views", __dirname + "/view");
app.engine("html", ejs.__express);
app.set("view engine", "html");
//转到路由，可增加

app.use("/se",serviceIndexRoute);
app.use("/al",allDesignerRoute);
app.use("/de",designerRoute);

// app.use("/user",userRoute);
// app.use("",userRoute);
/*
* 文件名:使用路由地址
* 新增：雷云凯
* 创建时间：2017-11-14 20:31
* */
// 高京生 ejs拦截配置
//app.use("",viewRoute);
//app.use("/admin",adminRoute);
// app.use("/staff", staffRoute);
// app.use("",staffRoute);
// app.use("",commodityRoute);



//监听端口8888
app.listen(8888, function () {
    console.log("服务已经启动");
});
//配置日志
app.use(morgan("short"));