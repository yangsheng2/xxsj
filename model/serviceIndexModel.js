/**
 * Created by Administrator on 2017/11/14.
 */
"use strict";
const pool = require("./sqlPool.js");
function designerList(levelStar,nowpage,num) {
    "use strict";
    var page = num * (nowpage - 1);
    var num = parseInt(num);
    return new Promise(function (resolve,reject) {
        let sql="select * from staff where level_id=? limit ?,? and state=1";
        pool.query(sql,[levelStar,page,num]).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err);
        });
    });
};
function allPageList(levelStar) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select count(1) as num from staff where level_id=? and state=1";
        pool.query(sql,[levelStar]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err)
        })
    });
}
module.exports={
    designerList,
    allPageList
};