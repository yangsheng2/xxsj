/**
 * Created by Administrator on 2017/11/17.
 * 操作：支付页面控制层
 */
"use strict";
const payModal=require("../model/payModal.js");
//操作支付信息展示
function paylist(req,res) {
    "use strict";
    payModal.List().then(function (data) {
        res.send(data);
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    })
}
//操作支付结果
function payend(req,res){
    "use strict";
    let para=req.body.para;
    payModal.payend(para).then(function(data){
            res.send(data);
    }).catch(function(err){
        res.send(err);
    })
}
module.exports= {
    paylist,
    payend
}