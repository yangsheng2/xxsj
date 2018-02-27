/**
 * 文件名：collectionController.js
 * 创建者：唐媛
 * 创建时间：2017/11/14 18:50.
 * 收藏相关的业务操作
 */

    "use strict";
//模块引用
const collectionModel = require("../model/collectionModel.js");

//1. colList , 返回我的收藏所有信息
function colList(req,res){
    "use strict";
    let pageSize = req.body.pageSize;
    let curPage = req.body.curPage;
    collectionModel.listCol(curPage,pageSize).then(function(data){
        res.json({flag:1,message:"显示成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//3. colDel , 删除一条收藏
function colDel(req,res){
    "use strict";
    let col_id = req.body.col_id;
    collectionModel.delCol(col_id).then(function(data){
        res.json({flag:1,message:"删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//4. colDelAll , 删除所有收藏
function colDelAll(req,res){
    "use strict";
    collectionModel.delAllCol().then(function(data){
        res.json({flag:1,message:"全部删除成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
module.exports={
    colList,
    colDel,
    colDelAll
};