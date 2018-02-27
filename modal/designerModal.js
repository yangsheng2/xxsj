/**
 * Created by Administrator on 2017/11/17.
 */
"use strict";
const pool=require("./sqlPool.js");
function designerBannerList(designerId) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select product_name,product_photo_url,product_dec from staff_product,product_photo where staff_product.product_id=product_photo.product_id and staff_id=? and staff_product.state=1 and product_photo.state=1"
        pool.query(sql,[designerId]).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};//设计师banner显示
function serviceList(designerId) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select service_type,service_price from staff,service,staff_with_service where " +
            "staff.staff_id=staff_with_service.staff_id and staff_with_service.service_id=service.service_id " +
            "and staff.staff_id=? and staff.state=1 and service.state=1 and staff_with_service.state=1";
        pool.query(sql,[designerId]).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err)
        })
    })
};//设计师服务,价格显示
function staffStyle(designerId) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select staff.* from staff where staff_id=? and state=1";
        pool.query(sql,[designerId]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};//设计师风采
function staff_evaluate(designerId,num,nowPage) {
    "use strict";
    var page = num * (nowPage - 1);
    var num = parseInt(num);
    return new Promise(function (resolve,reject) {
        let sql="select staff_evaluate.* from staff,staff_evaluate where staff.staff_id=staff_evaluate.staff_id and staff.staff_id=? and staff.state=1 and staff_evaluate.state=1 limit ?,?"
       pool.query(sql,[designerId,page,num]).then(function (data) {
           resolve(data)
       }).catch(function (err) {
           reject(err);
           console.log(err)
       })
    })
}//评价
function designerCase(designerId,num,nowPage) {
    "use strict";
    var page = num * (nowPage - 1);
    var num = parseInt(num);
    return new Promise(function (resolve,reject) {
        let sql="select product_name,product_photo_url,product_dec,product_photo.remark from staff_product,product_photo where staff_product.product_id=product_photo.product_id and staff_id=? and staff_product.state=1 and product_photo.state=1 limit ?,?"
        pool.query(sql,[designerId,page,num]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};
function deleteStaff(staffId) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="update staff set state=-1 where staff_id=?";
        pool.query(sql,[staffId]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err);
            console.log(err);
        })
    })
}//删除员工
module.exports={
    designerBannerList,
    serviceList,
    staffStyle,
    staff_evaluate,
    designerCase,
    deleteStaff
}