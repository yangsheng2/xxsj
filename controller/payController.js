/**
 * Created by Administrator on 2017/11/17.
 * ������֧��ҳ����Ʋ�
 */
"use strict";
const payModal=require("../model/payModal.js");
//����֧����Ϣչʾ
function paylist(req,res) {
    "use strict";
    payModal.List().then(function (data) {
        res.send(data);
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    })
}
//����֧�����
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