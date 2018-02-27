/**
 * Created by Administrator on 2017/11/17.
 * ������֧��ҳ��modal��
 */
const pool=require("../model/sqlPool.js");
//��ѯ֧��������ţ��۸�
function List(){
    "use strict";
    return new Promise(function(resolve,reject){
        let sql="SELECT order_id,price FROM t_order WHERE u_id=1";
        pool.query(sql,[]).then(function(data){
            console.log(data);
            resolve(data);
        }).catch(function(err){
            reject(err);
        })
    })
}
//����֧�������Զ���״̬���и��� 1.δ֧�� 0.��֧��
function payend(para){
    "use strict";
    if(para==1){
        return new Promise(function (resolve, reject) {
            let sql="update t_order set state=0 where u_id=2";
            pool.query(sql,[]).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    }
    else{
        return new Promise(function(resolve,reject){
            resolve("Payment not completed");
        })
    }

}
module.exports={
    List,
    payend
}
