/*
* 文件名:管理员控制层
* 新增：雷云凯
* 创建时间：2017-11-15 19:39
 */
"use strict";
const userModel = require("../model/userModel.js");


// //高京生 ejs 操作
// function userManagement(req,res) {
//     res.render("userManagement");
// }

// 用户档案表
function userArchivesList(req, res) {
    userModel.userArchivesList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userArchivesAdd(req, res) {

}

function userArchivesDelete(req, res) {

}

function userArchiveUpdate(req, res) {

}

function userArchivesSearch(req, res) {

}

//用户照片表
function userPhotoList(req, res) {
    userModel.userPhotoList()
        .then(function (data) {
            res.json({code: 200, data: data});
        }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userPhotoAdd(req, res) {

}

function userPhotoDelete(req, res) {

}

function userPhotoUpdate(req, res) {

}

function userPhotoSearch(req, res) {

}

//用户关注表
function userFollowList(req, res) {
    userModel.userFollowList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userFollowAdd(req, res) {

}

function userFollowDelete(req, res) {

}

function userFollowUpdate(req, res) {

}

function userFollowSearch(req, res) {

}

//用户收藏表
function userCollectList(req, res) {
    userModel.userCollectList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userCollectAdd(req, res) {

}

function userCollectDelete(req, res) {

}

function userCollectUpdate(req, res) {

}

function userCollectSearch(req, res) {

}

//用户个人信息表
function userInfoList(req, res) {
    userModel.userinformationList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userInfoAdd(req, res) {

}

function userInfoDelete(req, res) {

}

function userInfoUpdate(req, res) {

}

function userInfoSearch(req, res) {

}

//用户积分记录表
function userIntegralRecordList(req, res) {
    userModel.userIntegralRecordList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userIntegralRecordAdd(req, res) {

}

function userIntegralRecordDelete(req, res) {

}

function userIntegralRecordUpdate(req, res) {

}

function userIntegralRecordSearch(req, res) {

}

//用户积分等级表。
function userIntegralGradeList(req, res) {
    userModel.userIntegralGradeList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userIntegralGradeAdd(req, res) {

}

function userIntegralGradeDelete(req, res) {

}

function userIntegralGradeUpdate(req, res) {

}

function userIntegralGradeSearch(req, res) {

}

//用户地址表
function userAddressList(req, res) {
    userModel.userAddressList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userAddressAdd(req, res) {

}

function userAddressDelete(req, res) {

}

function userAddressUpdate(req, res) {

}

function userAddressSearch(req, res) {

}

//用户售后表
function userCustomerServiceList(req, res) {
    userModel.userCustomerServiceList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userCustomerServiceAdd(req, res) {

}

function userCustomerServiceDelete(req, res) {

}

function userCustomerServiceUpdate(req, res) {

}

function userCustomerServiceSearch(req, res) {

}

//用户订阅表
function userSubscribeList(req, res) {
    userModel.userSubscribeList().then(function (data) {
        res.json({code: 200, data: data});
    }).catch(function (err) {
        console.log(err);
        res.send({code: 500});
    });
}

function userSubscribeAdd(req, res) {

}

function userSubscribeDelete(req, res) {

}

function userSubscribeUpdate(req, res) {

}

function userSubscribeSearch(req, res) {

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
