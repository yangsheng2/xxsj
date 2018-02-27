/**
 * Created by Administrator on 2017/11/14.
 */
"use strict";
const pool = require("./sqlPool.js");
function designerList(levelStar,nowpage,num) {
    "use strict";
    var page = num * (nowpage - 1);
    var num = parseInt(num);
    var str=[];
    let sql;
    console.log(1)
    return new Promise(function (resolve,reject) {
        if(levelStar!="全部"){
             sql="select * from staff where level_id=? and state=1 limit ?,? ";
            str.push(levelStar)
        }else{
             sql="select * from staff where state=1  limit ?,?"
        }
        str.push(page,num);
        pool.query(sql,str).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err);
            console.log(err)
        });
    });
};
function allPageList(levelStar) {
    "use strict";
    var str=[];
    let sql;
    return new Promise(function (resolve,reject) {
        if(levelStar!="全部"){
             sql="select count(1) as num from staff where level_id=? and state=1";
            str.push(levelStar)
        } else{
            sql="select count(1) as num from staff where state=1";
        }
        pool.query(sql,str).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    });
}
module.exports={
    designerList,
    allPageList
};