/**
 * Created by Administrator on 2017/11/14.
 * 创建***********
 * 文件名：accountModel 账户信息Dao
 * 创建人：刘玉娇
 * 创建时间：2017-11-14-20:05
 * 方法名：accountList==》用户的信息显示
 *      accountUpdate==》用户信息修改
 */
const pool=require("./sqlPool.js");//引用连接池
function accountLogin(u_name,pwd){
    "use strict";
    return new Promise(function(resolve,reject) {
        let sql = "select * from userinfo where u_name=?&&pwd=?";
        pool.query(sql,[u_name,pwd]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
    });
}
function accountList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="select * from userinfo";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
function accountUpdate(u_nickname,u_headimg,u_sex,u_phone,card_front,card_size,card_to_date,email,u_id){
    "use strict";
    return new Promise(function(resolve,reject){
       let sql="update userinfo set u_nickname=?,u_headimg=?,u_sex=?,u_phone=?,card_front=?,card_size=?,card_to_date=?,email=? where u_id=?";
        pool.query(sql,[u_nickname,u_headimg,u_sex,u_phone,card_front,card_size,card_to_date,email,u_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

//档案
//显示所有风格
function styleList(){//
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT fk_value FROM fk WHERE  fk_name='风格'";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
//显示所有配饰
function ornamentList(){//
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT fk_value FROM fk WHERE  fk_name='配饰'";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
//显示所有场合
function occasionList(){//
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT fk_value FROM fk WHERE  fk_name='场景'";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

//显示所有档案
function figureList(){//
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT * FROM archives";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

function figureUpdate(photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style,archives_name,shoe_long,ornament,occasion,archives_id){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="update archives set photo_front=?,photo_size=?,height=?,weight=?,bust=?,waist=?,crotch=?,hips=?,amark=?,u_id=?,style=?,archives_name=?,shoe_long=?,ornament=?,occasion=? where archives_id=?";
        pool.query(sql,[photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style,archives_name,shoe_long,ornament,occasion,archives_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
function figureDel(archives_id){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="update archives set state=0 where archives_id=?";
        //let sql="delete archives where archives_id=?";
        pool.query(sql,[archives_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
function figureAdd(photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style_name,archives_name,shoe_long,ornament,occasion){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="insert into archives values(null,?,?,?,?,?,?,?,?,?,now(),?,?,?,?,?,?,1)";
        pool.query(sql,[photo_front,photo_size,height,weight,bust,waist,crotch,hips,amark,u_id,style_name,archives_name,shoe_long,ornament,occasion]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

//积分
function integralList(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="select * from integralrecord";
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

//用户订单
//显示所有订单
function serviceOrderList(currentPage,account){
    "use strict";
    return new Promise(function(resolve,reject){//分页显示
        let sql="select * from t_service_order limit ?,?";
        let start =(currentPage-1)*account;
        pool.query(sql,[start,parseInt(account)]).then(function(data){
            resolve(data);
        }).catch(function (err) {
            reject(err);
        });
        //普通显示
        //let sql="select * from t_service_order";
        //console.log(sql);
        //pool.query(sql,[]).then(function(data){
        //    resolve(data);
        //}).catch(function(err){
        //    reject(err);
        //})
    });
}
//删除订单
function serviceOrderDel(service_order_id){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="update t_service_order set state=0 where service_order_id=?";
        //let sql="delete t_service_order where service_order_id=?";
        pool.query(sql,[service_order_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
//查询满足条件状态的订单
function searchServiceOrder(pay_state){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="select * from t_service_order where pay_state=?"
        pool.query(sql,[pay_state]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//删除所有的订单

function serviceOrderAllDel(u_id){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="update t_service_order set state=0  where u_id=?";
        pool.query(sql,[u_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}

//订单详情
//显示用户的订单详情
function serviceOrderDetailList(service_order_id){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql1="SELECT * "+
        "FROM t_service_order JOIN service_order_det ON t_service_order.service_order_id=service_order_det.service_order_id"+
        " JOIN service ON service.service_type=service_order_det.service_type"+
        " JOIN staff_evaluate ON staff_evaluate.evaluate_id=staff_evaluate.evaluate_id"+
        " JOIN address  ON service_order_det.address_id=address.address_id"+
        " JOIN province ON province.p_id=address.p_id"+
        " JOIN city ON city.c_id=address.c_id"+
        " JOIN area_1 ON area_1.a_id=address.a_id where t_service_order.service_order_id=?";
    pool.query(sql1,[service_order_id]).then(function(data){
        resolve(data);
    }).catch(function(err){
        reject(err);
    });
    });
}
//删除订单
function serviceOrderDetailDel(order_det_id){//删除订单详情
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="update service_order_det set state=0 where order_det_id=?";
        //let sql="delete service_order_det where service_order_id=?";
        pool.query(sql,[order_det_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    });
}
//评价
function evaluateList(){//显示评价
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="select * from evaluate";
        console.log(sql);
        pool.query(sql,[]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
function evaluateDel(evaluate_id){//删除评价
    "use strict";
    let sql="update evaluate set state=0 where evaluate_id=?";
    return new Promise(function(resolve,reject){
        pool.query(sql,[evaluate_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
function evaluateAdd(evaluate_text,evaluate_img,evaluate_start,u_id,good_id){//添加评价
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="insert into evaluate values(null,?,?,?,?,now(),?,1)";
        pool.query(sql,[evaluate_text,evaluate_img,evaluate_start,u_id,good_id]).then(function(data){
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}

module.exports={//暴露方法
    accountLogin,accountList,accountUpdate,//用户信息
    styleList,ornamentList,occasionList,figureList,figureUpdate,figureDel,figureAdd,//档案信息
    integralList,//积分
    serviceOrderList,searchServiceOrder,serviceOrderDel,serviceOrderDetailList,serviceOrderDetailDel,serviceOrderAllDel,//用户服务订单
    evaluateList,evaluateAdd,evaluateDel//评价
};