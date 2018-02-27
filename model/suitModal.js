/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：套装表 套装详情modal层
 */
const pool=require("../model/sqlPool.js");
//展示套装详情
function suitList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT  DISTINCT c.main_id,b.good_id,a.img_url,b.color,b.material,b.style,b.good_name,b.occasion,b.price,b.size,d.number FROM gimage AS a,good AS b,suit_good AS c,(SELECT good_id,COUNT(1) AS number FROM order_det GROUP BY good_id) AS d WHERE a.img_id = b.img_id AND b.good_id = c.assistant_id AND b.good_id = d.good_id AND c.main_id=1";
        pool.query(sql,[]).then(function(data){
            console.log(data);
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//展示套装单品
function singleList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT  b.good_id,b.color,b.material,b.style,b.good_name,b.occasion,b.price ,a.img_url FROM gimage AS a,good AS b,suit_good AS c WHERE a.img_id = b.img_id AND c.assistant_id=b.good_id AND c.main_id=1";
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//展示相同风格的套装
function samesuitList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT DISTINCT b.good_id,a.img_url,b.color,b.material,b.style,b.good_name,b.occasion,b.price FROM gimage AS a,good AS b,suit_good AS c WHERE a.img_id = b.img_id AND b.good_type=1 AND b.style=(SELECT style FROM good WHERE good_id=1)";
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//加入购物车
function addCar(goodId,uId,carNum){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="insert into car values(null,?,?,now(),1,?)";
        pool.query(sql,[goodId,uId,carNum]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//加入收藏夹
function addCollect(goodId,uId){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="insert into collection values(null,?,?,now(),1)";
        pool.query(sql,[goodId,uId]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//套装数量
function suitNum(goodId,evaId,number){
    "use strict";
    console.log(number);
    return new Promise(function (resolve,reject) {
        for(var i=1;i<number;i++){
            let sql = "insert into order_det values(null,?,?,1,now())";
            pool.query(sql,[goodId,evaId,number]).then(function (data) {
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        }
    })
}
//查询商品对应的评价内容
function evaList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT evaluate_text,evaluate_img FROM evaluate WHERE good_id=1";
        let sql1="SELECT COUNT(1) AS num FROM evaluate WHERE good_id=1 GROUP BY good_id";
        let a,b;
        pool.query(sql,[]).then(function(data){
            console.log(data);
            a=data;
        }).catch(function(err){
            reject(err);
        }).then(function(){
            pool.query(sql1,[]).then(function(data){
                b=data;
                resolve({"a":a,"b":b})
            })
        }).catch(function(err){
            reject(err);
        })
    })
}
module.exports={
    suitList,
    singleList,
    samesuitList,
    addCar,
    addCollect,
    suitNum,
    evaList
}
