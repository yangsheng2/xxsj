/**
 * �ļ�����collectionModel.js
 * �����ߣ�����
 * ����ʱ�䣺2017/11/14 18:50.
 * �ղ���ص�ҵ�����
 */

//����ģ��
const pool = require("../model/sqlPool.js"); //���ӳ�ģ��

/**
 * 1. listCol , ��ȡ�����ղ���Ϣ
 * */
function listCol(currentPage,pageSize){
    "use strict";
    //����һ��promise����
    return new Promise(function (resolve, reject) {
        pageSize = pageSize || 10;
        currentPage = currentPage || 1;
        let start= (currentPage-1)*pageSize;
        pageSize = parseInt(pageSize);
        let sql = "select collection.*,good_name,good_type,price,remark,gimage.img_url from collection join good on collection.good_id=good.good_id join gimage on good.good_id=gimage.good_id where collection.col_state=1;" ;
        pool.query(sql,[start,pageSize]).then(function(data){   //pool.query���ص���һ��promise�������Կ���ʹ��then
            //�ɹ�ִ��ִ�еķ���
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//delCol , ɾ��һ���ղ�
function delCol(col_id){
    "use strict";
    //����һ��promise����
    return new Promise(function (resolve, reject) {
        let sql = "update collection set col_state=0 where col_id=?" ;
        pool.query(sql,[col_id]).then(function(data){   //pool.query���ص���һ��promise�������Կ���ʹ��then
            //�ɹ�ִ��ִ�еķ���
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
//delAllCol , ɾ�������ղ�
function delAllCol(){
    "use strict";
    //����һ��promise����
    return new Promise(function (resolve, reject) {
        let sql = "update collection set col_state=0" ;
        pool.query(sql,[]).then(function(data){   //pool.query���ص���һ��promise�������Կ���ʹ��then
            //�ɹ�ִ��ִ�еķ���
            resolve(data);
        }).catch(function(err){
            reject(err);
        });
    });
}
module.exports={
    listCol,
    delCol,
    delAllCol
};