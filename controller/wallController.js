/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：照片墙详情
 */

    "use strict";
//模块引用
const wallModel = require("../model/wallModel.js");

//1. wallList , 返回我的照片墙所有信息
function wallList(req,res){
    "use strict";
    wallModel.wallList().then(function(data){
        res.json({flag:1,message:"显示成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//照片墙总数
function wallGetCount(req,res){
    var staffInfo;
    var count ;
    var jobList;
    wallModel.wallGetCount().then(function(data){//照片墙总数，用于分页
        console.log(data);
        count = data;
        res.json({flag:1,message:"显示成功",data:data})
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//2. wallAdd , 增加一张照片墙
function wallAdd(req,res){
    "use strict";
    let u_id = req.body.u_id;
    let photo_url = req.body.photo_url;
    let photo_state = req.body.photo_state;
    let photo_open = req.body.photo_open;
    let photo_des = req.body.photo_des;
    wallModel.wallAdd(u_id,photo_url,photo_state,photo_open,photo_des).then(function(data){
        res.json({flag:1,message:"添加成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//3. wallDel , 删除一张照片墙
function wallDel(req,res){
    "use strict";
    let photos_id = req.body.photos_id;
    wallModel.wallDel(photos_id).then(function(data){
        res.json({flag:1,message:"删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//4. wallUpdate , 更改一张照片墙
function wallUpdate(req,res){
    "use strict";
    let photos_id = req.body.photos_id;
    let photo_url = req.body.photo_url;
    let photo_state = req.body.photo_state;
    let photo_open = req.body.photo_open;
    let photo_des = req.body.photo_des;
    wallModel.wallUpdate(photo_url,photo_state,photo_open,photo_des,photos_id).then(function(data){
        res.json({flag:1,message:"修改成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//5. wallDelAll , 删除所有照片墙
function wallDelAll(req,res){
    "use strict";
    wallModel.wallDelAll().then(function(data){
        res.json({flag:1,message:"全部删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
module.exports={
    wallList,
    wallGetCount,
    wallAdd,
    wallDel,
    wallUpdate,
    wallDelAll
};