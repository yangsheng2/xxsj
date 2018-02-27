/**
 * Created by Administrator on 2017/11/14 0014.
 * 创建者：唐媛
 * 操作：购物车
 */

//模块引用
const carModel = require("../model/carModel.js");

//1. carList , 返回我的购物车所有信息
function carList(req,res){
    "use strict";
    let pageSize = req.body.pageSize;
    let curPage = req.body.curPage;
    carModel.carList(curPage,pageSize).then(function(data){
        res.json({flag:1,message:"显示成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//2. carAdd , 增加一条购物车
function carAdd(req,res){
    "use strict";
    let goods_id = req.body.goods_id;
    let u_id = req.body.u_id;
    carModel.carAdd(goods_id,u_id).then(function(data){
        res.json({flag:1,message:"增加一条购物车成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//3. carDel , 删除一条购物车
function carDel(req,res){
    "use strict";
    let car_id = req.body.car_id;
    carModel.carDel(car_id).then(function(data){
        res.json({flag:1,message:"删除一条购物车成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//4. carUpdate , 更改一条购物车
function carUpdate(req,res){
    "use strict";
    let car_sale_num = req.body.car_sale_num;
    let color = req.body.color;
    let material = req.body.material;
    let size = req.body.size;
    let car_id = req.body.car_id;
    carModel.carUpdate(car_sale_num,color,material,size,car_id).then(function(data){
        res.json({flag:1,message:"更改购物车成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
//5. carDelALL , 删除所有购物车
function carDelALL(req,res){
    "use strict";
    carModel.carDelALL().then(function(data){
        res.json({flag:1,message:"删除所有购物车成功",data:data});
    }).catch(function(err){
        console.log(err);
        res.send({flag:-1,message:"失败原因",err:err});
    });
}
module.exports={
    carList,
    carAdd,
    carDel,
    carUpdate,
    carDelALL
};