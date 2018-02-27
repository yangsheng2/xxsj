/**
 * Created by seraphimwx on 2017/11/14.
 * 操作：商品表,商品页
 */
//引用模块
const pool = require("../model/sqlpool.js"); //连接池模块
/**
 * 1. getAll , 获取所需外键信息
 * */
function getAll(){
    "use strict";
    //返回一个promise对象
    return new Promise(function (resolve, reject) {
        "use strict";
        let r1,r2,r3,r4;
        let sql1 = "select fk_value from fk where fk_name='性别'" ;
        let sql2 = "select fk_value from fk where fk_name='风格'" ;
        let sql3 = "select fk_value from fk where fk_name='场合'" ;
        let sql4 = "select fk_value from fk where fk_name='排序方式'" ;
        pool.query(sql1,[fkvalue]).then(function(data){
            r1=data;
        }).catch(function(err){
            console.log("error1",err);
        }).then(function () {
            pool.query(sql2,[fkvalue]).then(function(data){
                r2=data;
            }).catch(function (err) {
                console.log("error2",err);
            })
        }).then(function () {
            pool.query(sql3,[fkvalue]).then(function(data){
                r3=data;
            }).catch(function (err) {
                console.log("error3",err);
            })
        }).then(function () {
            pool.query(sql4,[fkvalue]).then(function(data){
                r4=data;
                console.log("in modal");
                console.log("r1-r4::",r1,r2,r3,r4);
            }).catch(function (err) {
                console.log("error4",err);
            })
        });
    });
}
//2..getgoodsBySearch， 根据不同的性别、风格、场合、排序方式 查询不同的商品信息
function getgoodsBySearch(style,occasion,sales,collection,like,pageSize,currentPage){
    "use strict";
    console.log("in modal");
    return new Promise(function (resolve, reject) {
        console.log("in promise");
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let arr = []; //参数数组
        let sql = "SELECT DISTINCT a.img_url,b.collection_num,b.like_num FROM gimage AS a,good AS b WHERE a.img_id=b.img_id and 1=1";
        if(style.length>0){
            console.log("in style");
            style = "%"+style+"%";
            sql+=" and style like ?";
            arr.push(style);
        }
        if(occasion.length>0){
            occasion = "%"+occasion+"%";
            sql+=" and occasion like ?";
            arr.push(occasion);
        }
        if(sales.length>0){
            sales = "%"+sales+"%";
            sql+=" and sales like ?";
            arr.push(sales);
        }
        if(collection.length>0){
            collection = "%"+collection+"%";
            sql+=" and collection_num like ?";
            arr.push(collection);
        }
        if(like.length>0){
            like = "%"+like+"%";
            sql+=" and like_num like ?";
            arr.push(like);
        }
        sql+=" limit ?,? ";
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        arr.push(start,pageSize);
        console.log("push");
        pool.query(sql,arr).then(function(data){
            console.log("data in sql-----",data);
            resolve(data);
        }).catch(function(err){
            reject(err);
            console.log(err)
        });
    });
}

//3..goodsList,显示所有商品并分页
function goodsList(pageSize,currentPage) {
    "use strict";
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let sql = "SELECT DISTINCT a.img_url,b.collection_num,b.like_num FROM gimage AS a,good AS b WHERE a.img_id=b.img_id limit ?,?";
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        pool.query(sql,[start,pageSize]).then(function(data){
            console.log("data:::::",data);
            console.log("pagesize:::::",pageSize);
            resolve(data);
        }).catch(function(err){
            console.log(err);
            reject(err);
        })
    });
}
//4..统计商品总数 goodsSum
function goodsSum() {
    "use strict";
    return new Promise(function (resolve, reject) {
        let sql = "select count(1) from good";
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
module.exports={
    getAll,
    getgoodsBySearch,
    goodsSum,
    goodsList
};