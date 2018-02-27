/**
 * Created by Administrator on 2017/11/14.
 * 杨胜
 * 修改日期 11/14 20:33
 */
"use strict";
const serviceInderModal=require("../modal/serviceIndexModal.js");
//设计师显示
function designerList(req,res) {
    "use strict";
    let nowPage=req.body.nowPage;
    let num=req.body.num;
    let levelStar=req.body.levelStar;
    var allData=[];
    //设计师查询和显示
    serviceInderModal.designerList(levelStar,nowPage,num).then(function (data) {
     allData.push(data);
      console.log(data)
    }).then(function () {
        //设计师查询过后的总条数
        serviceInderModal.allPageList(levelStar).then(function (data) {
           allData.push(data);
           res.json(allData);
            console.log(allData)
        }).catch(function (err) {
            console.log(err);
            res.send(err)
        })
    })
}
module.exports={
    designerList
}