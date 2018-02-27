"use strict";

const pool = require("./sqlPool.js");

function adminLogin(name,pwd) {
    return new Promise(function (resolve, reject) {
        let sql = "select * from manager where manager_num=? and manager_pwd=?";
        pool.query(sql, [name, pwd]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}

function staffLogin(name,pwd) {
    return new Promise(function (resolve, reject) {

        let sql = "select * from staff_cms where sc_name=? and pwd=?";
        pool.query(sql, [name, pwd]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err);
        });
    });
}

module.exports = {
    adminLogin,
    staffLogin
};