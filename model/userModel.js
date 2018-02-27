/*
* 文件名:管理员Dao层
* 新增：雷云凯
* 创建时间：2017-11-15 19:39
 */
"use strict";
const pool = require("./sqlPool.js");

// 用户档案表
function userArchivesList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from archives";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userArchivesAdd() {

}

function userArchivesDelete() {

}

function userArchiveUpdate() {

}

function userArchivesSearch() {

}

//用户照片表
function userPhotoList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from photos";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userPhotoAdd() {

}

function userPhotoDelete() {

}

function userPhotoUpdate() {

}

function userPhotoSearch() {

}

//用户关注表
function userFollowList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from follow";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userFollowAdd() {

}

function userFollowDelete() {

}

function userFollowUpdate() {

}

function userFollowSearch() {

}

//用户收藏表
function userCollectList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from collection";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userCollectAdd() {

}

function userCollectDelete() {

}

function userCollectUpdate() {

}

function userCollectSearch() {

}

//用户个人信息表
function userInfoList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from user";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userInfoAdd() {

}

function userInfoDelete() {

}

function userInfoUpdate() {

}

function userInfoSearch() {

}

//用户积分记录表
function userIntegralRecordList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from  integralRecord";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userIntegralRecordAdd() {

}

function userIntegralRecordDelete() {

}

function userIntegralRecordUpdate() {

}

function userIntegralRecordSearch() {

}

//用户积分等级表
function userIntegralGradeList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from  level";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userIntegralGradeAdd() {

}

function userIntegralGradeDelete() {

}

function userIntegralGradeUpdate() {

}

function userIntegralGradeSearch() {

}

//用户地址表
function userAddressList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from  address";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userAddressAdd() {

}

function userAddressDelete() {

}

function userAddressUpdate() {

}

function userAddressSearch() {

}

//用户售后表
function userCustomerServiceList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from  sale";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userCustomerServiceAdd() {

}

function userCustomerServiceDelete() {

}

function userCustomerServiceUpdate() {

}

function userCustomerServiceSearch() {

}

//用户订阅表。
function userSubscribeList() {
    return new Promise(function (resolve, reject) {
        let sql = "select * from sub ";
        pool.query(sql, []).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function userSubscribeAdd() {

}

function userSubscribeDelete() {

}

function userSubscribeUpdate() {

}

function userSubscribeSearch() {

}

module.exports = {
    //用户档案表
    userArchivesList,
    userArchivesAdd,
    userArchivesDelete,
    userArchiveUpdate,
    userArchivesSearch,
    //用户照片表
    userPhotoList,
    userPhotoAdd,
    userPhotoDelete,
    userPhotoUpdate,
    userPhotoSearch,
    //用户关注表
    userFollowList,
    userFollowAdd,
    userFollowDelete,
    userFollowUpdate,
    userFollowSearch,
    //用户收藏表
    userCollectList,
    userCollectAdd,
    userCollectDelete,
    userCollectUpdate,
    userCollectSearch,
    //用户个人信息表
    userInfoList,
    userInfoAdd,
    userInfoDelete,
    userInfoUpdate,
    userInfoSearch,
    //用户积分记录表
    userIntegralRecordList,
    userIntegralRecordAdd,
    userIntegralRecordDelete,
    userIntegralRecordUpdate,
    userIntegralRecordSearch,
    //用户积分等级表
    userIntegralGradeList,
    userIntegralGradeAdd,
    userIntegralGradeDelete,
    userIntegralGradeUpdate,
    userIntegralGradeSearch,
    //用户地址表
    userAddressList,
    userAddressAdd,
    userAddressDelete,
    userAddressUpdate,
    userAddressSearch,
    //用户售后表
    userCustomerServiceList,
    userCustomerServiceAdd,
    userCustomerServiceDelete,
    userCustomerServiceUpdate,
    userCustomerServiceSearch,
    //用户订阅表
    userSubscribeList,
    userSubscribeAdd,
    userSubscribeDelete,
    userSubscribeUpdate,
    userSubscribeSearch,
};
