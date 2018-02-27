/**
 * Created by Administrator on 2017/11/15.
 */
"use strict";
const pool=require("./sqlPool.js");
Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};//时间转换
function allDesignerList(levelStar,service,sex,num,nowPage,province) {
    "use strict";
    var page = num * (nowPage - 1);
    var num = parseInt(num);
    var str=[];
    return new Promise(function (resolve,reject) {
        let sql="select distinct staff.* from staff,service,staff_with_service where " +
            "staff.staff_id=staff_with_service.staff_id and staff_with_service.service_id=service.service_id " +
            " and staff.state=1  and service.state=1 and staff_with_service.state=1";
        if(levelStar=="全部"&&service=="全部"&&sex=="全部"&&province=="全部全部"){
            sql+=" limit ?,?";
            str.push(page);
            str.push(num);
        }else{
        if(levelStar!="全部"){
            sql+=" and level_id=?";
            str.push(levelStar)
        };
        if(service!="全部"){
            sql+=" and service_type=?";
            str.push(service)
        };
        if(sex!="全部"){
            sql+=" and staff_sex=?";
            str.push(sex)
        };
        if(province!="全部全部"){
            province='%'+province+'%';
            sql+=" and staff_addr like ?";
            str.push(province)
        }
        sql+=" limit ?,?";
            str.push(page);
            str.push(num)
        }
        pool.query(sql,str).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};//设计师显示
function allpage(levelStar,service,sex,province) {
    "use strict";
    var str=[];
    return new Promise(function (resolve,reject) {
        let sql="select count(distinct staff.staff_id) as num  from staff,service,staff_with_service where " +
            "staff.staff_id=staff_with_service.staff_id and staff_with_service.service_id=service.service_id " +
            " and staff.state=1 and service.state=1 and staff_with_service.state=1";
        if(levelStar=="全部"&&service=="全部"&&sex=="全部"){
            sql="select count(distinct staff.staff_id) as num from staff,service,staff_with_service where " +
            "staff.staff_id=staff_with_service.staff_id and staff_with_service.service_id=service.service_id " +
            " and staff.state=1 and service.state=1 and staff_with_service.state=1";
        }else{
            if(levelStar!="全部"){
                sql+=" and level_id=?";
                str.push(levelStar)
            };
            if(service!="全部"){
                sql+=" and service_type=?";
                str.push(service)
            };
            if(sex!="全部"){
                sql+=" and staff_sex=?";
                str.push(sex)
            };
            if(province!="全部全部"){
                province='%'+province+'%';
                sql+=" and staff_addr like ?";
                str.push(province)
            }
        }
        //sql+=" group by staff.staff_id";
        pool.query(sql,str).then(function (data) {
            resolve(data);
            console.log(data)
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};//总页数
function allService() {
    "use strict";
    return new Promise(function (reslove,reject) {
        let sql="select * from service";
        pool.query(sql).then(function (data) {
            reslove(data);
        }).catch(function (err) {
            reject(err);
        })
    })
}
function userID(userName) {
"use strict";
return new Promise(function (resolve,reject) {
    let sql="select u_id from user where u_name=? and state=1";
    pool.query(sql,[userName]).then(function (data) {
        resolve(data);
        console.log(data)
    }).catch(function (err) {
        reject(err);
        console.log(err)
    })
})
};//查找用户id
function selectFollow(designer_id,userID) {
    "use strict";
     return new Promise(function (resolve,reject) {
         let sql="select * from follow where u_id=? and staff_id=? and state=1";
         pool.query(sql,[userID,designer_id]).then(function (data) {
             resolve(data);
         }).catch(function (err) {
             reject(err);
         })
     })

};//查找是否关注
function deleteFollow(designer_id,userID) {
    "use strict";
    var createDate = new Date().format("yyyy-MM-dd hh:mm:ss");
    return new Promise(function (resolve,reject) {
        let sql="update follow set state=0,create_date=? where staff_id=? and u_id=? and state=1";
        pool.query(sql,[createDate,designer_id,userID]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err)
            console.log(err)
        })
    })
};//删除关注
function downFollowNum(designer_id) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="update staff set follow_num=follow_num-1 where staff_id=? and state=1";
        pool.query(sql,[designer_id]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err)
        })
    })
};//关注数减1
function addFollow(designer_id,userID) {
    "use strict";

    var createDate = new Date().format("yyyy-MM-dd hh:mm:ss");
    return new Promise(function (resolve,reject) {
        let sql="insert into follow values (null,?,?,?,1)";
        pool.query(sql,[userID,designer_id,createDate]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
};//增加关注
function upFollowNum(designer_id) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="update staff set follow_num=follow_num+1 where staff_id=? and state=1";
        pool.query(sql,[designer_id]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err)
        })
    })
};//关注数加1
function select2Follow(designer_id,userID) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select * from follow where u_id=? and staff_id=? and state=0";
        pool.query(sql,[userID,designer_id]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
        })
    })

};//查找是否关注，state=0
function add2Follow(designer_id,userID) {
    "use strict";
    var createDate = new Date().format("yyyy-MM-dd hh:mm:ss");
    return new Promise(function (resolve,reject) {
        let sql="update follow set state=1,create_date=?  where staff_id=? and u_id=? and state=0";
        pool.query(sql,[createDate,designer_id,userID]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err)
        })
    })
};//增加关注 state=1
function like(designer_id) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="update staff set like_num=like_num+1 where staff_id=?";
        pool.query(sql,[designer_id]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err);
        })
    })
};//点赞
function notLike(designer_id) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="update staff set like_num=like_num-1 where staff_id=?";
        pool.query(sql,[designer_id]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err);
        })
    })
}//取消赞
function province() {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select province from province";
        pool.query(sql,[]).then(function (data) {
            resolve(data)
        }).catch(function (err) {
            reject(err);
            console.log(err);
        })
    })
}//省显示
function city(province) {
    "use strict";
    return new Promise(function (resolve,reject) {
        let sql="select city from city,province where province.province_id=city.p_id and province=?";
        pool.query(sql,[province]).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
}//市显示
function nameSelect(name) {
    "use strict";
    return new Promise(function (resolve,reject) {
        var str=[]
        let sql
        if(name==""){
             sql="select staff.*,service_type from staff,service  where staff.service_id=service.service_id  and staff.state=1 and service.state=1";
        }else{
            name='%'+name+'%';
            str.push(name)
            sql="select staff.*,service_type from staff,service  where staff.service_id=service.service_id and staff_name like ? and staff.state=1 and service.state=1";
        }
        console.log(sql)
        pool.query(sql,str).then(function (data) {
            resolve(data);
        }).catch(function (err) {
            reject(err);
            console.log(err)
        })
    })
}//按姓名查询
module.exports={
    allDesignerList,
    allpage,
    userID,
    selectFollow,
    deleteFollow,
    downFollowNum,
    addFollow,
    upFollowNum,
    select2Follow,
    add2Follow,
    like,
    notLike,
    province,
    city,
    nameSelect,
    allService
};