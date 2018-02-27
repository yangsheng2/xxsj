/**
 * Created by Administrator on 2017/11/15.
 * 11 15 杨胜 11:00
 */
"use strict";
const allDesignerModal=require("../modal/allDesignerModal.js");
//所有设计师显示
function allDesignerList(req,res) {
    "use strict";
    let levelStar=req.body.levelStar;//星级查询条件
    let service=req.body.service;//服务查询条件
    let sex=req.body.sex;//性别查询条件
    let city=req.body.city;
    let province=req.body.province;
    if(province!="全部"&&city=="全部"){
        province
    }else{
        province=province+city
    }
    let num=req.body.num;//每页显示多少条
    let nowPage=req.body.nowPage;//当前页
    var alldata=[];
    //显示设计师
    allDesignerModal.allDesignerList(levelStar,service,sex,num,nowPage,province).then(function (data) {
        for(var i=0;i<data.length;i++){
            data[i].remark2=data[i].remark2.split("and")
        }
        alldata.push(data)
    }).then(function () {
        //显示查询后的总页面
        allDesignerModal.allpage(levelStar,service,sex,province).then(function (data) {
            alldata.push(data)
            res.json(alldata)
        }).catch(function (err) {
            res.send(err);
            console.log(err)
        })
    })
};
function allService(req,res) {
    allDesignerModal.allService().then(function (data) {
        res.json(data)
    }).catch(function (err) {
        res.send(err)
        console.log(err)
    })
}
//关注
function follow(req,res) {
    "use strict";
    let designer_id=req.body.sid;//获取点击的设计师id
    let username=req.body.username;//获取登录的用户名
    let userID;//用用户名查询出来的用户id
    let selectFollow;//查询是否关注
    //查询用户id
    allDesignerModal.userID(username).then(function (data) {
        userID=data[0].u_id;
        console.log(userID)
    }).then(function () {
        //查询是否关注
       allDesignerModal.selectFollow(designer_id,userID).then(function (data) {
           selectFollow=data;
       }).then(function () {
           //如果关注长度大于0，则删除
           if(selectFollow.length>0){
               //删除关注
               allDesignerModal.deleteFollow(designer_id,userID).then(function (data) {
                   if(data.affectedRows>0){
                       res.send("取消关注");
                       let d1=data;
                       //关注数量减1
                       allDesignerModal.downFollowNum(designer_id).then(function (data) {
                       }).catch(function (err) {
                           console.log("error",err)
                       })
                   }
               })}else {
               //否则增加关注
               //先查找状态为0的
               allDesignerModal.select2Follow(designer_id,userID).then(function (data) {
                   if(data.length>0){
                       allDesignerModal.add2Follow(designer_id,userID).then(function (data) {
                               if(data.affectedRows>0){
                                   res.send("关注成功");
                                   let d2=data;
                                   allDesignerModal.upFollowNum(designer_id).then(function (data) {
                                   }).catch(function (err) {
                                       console.log(err)
                                   })
                               }
                           }
                       )
                   }else {
                       allDesignerModal.addFollow(designer_id,userID).then(function (data) {
                           if(data.affectedRows>0){
                               res.send("关注成功");
                               let d2=data;
                               allDesignerModal.upFollowNum(designer_id).then(function (data) {
                               }).catch(function (err) {
                                   console.log(err)
                               })
                           }
                       })
                   }
               });

           }
       })
    })
};
//点赞
function like(req,res) {
    let like=req.body.like;//获取点赞值
    let designer_id=req.body.sid;//获取点击的设计师id
    //如果是赞，则加1
    if(like=="赞"){
        allDesignerModal.like(designer_id).then(function (data) {
            if(data.affectedRows>0){
                res.send("点赞成功")
            }
        }).catch(function (err) {
            res.send(err);
            console.log(err)
        })
    }
    //不是赞-1
    if(like=="取消赞"){
        allDesignerModal.notLike(designer_id).then(function (data) {
            if(data.affectedRows>0){
                res.send("取消成功")
            }
        }).catch(function (err) {
            res.send(err);
            console.log(err)
        })
    }
};
//省显示
function province(req,res) {
    allDesignerModal.province().then(function (data) {
        res.json(data);
        console.log(data)
    }).catch(function (err) {
        res.send(err);
        console.log(err);
    })
};
//市显示
function city(req,res) {
    let province=req.body.province;
    allDesignerModal.city(province).then(function (data) {
        res.json(data);
        console.log(data)
    }).catch(function (err) {
        res.send(err);
        console.log(err);
    })
};
//按姓名搜索
function nameSelect(req,res) {
    "use strict";
    let name=req.body.name;
    allDesignerModal.nameSelect(name).then(function (data) {
        for(var i=0;i<data.length;i++){
            data[i].remark2=data[i].remark2.split("and")
        }
        res.json(data);
    }).catch(function (err) {
        res.send(err);
        console.log(err)
    })

}
module.exports={
    allDesignerList,
    follow,
    like,
    province,
    city,
    nameSelect,
    allService
};