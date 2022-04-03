// 一，導入模塊
const mongoose = require("mongoose")
// 二，連接數據庫
const db = mongoose.createConnection("mongodb://shop2:admin888@localhost:27017/shop", {useNewUrlParser: true, useUnifiedTopology: true}, err=>{
if(err){
    console.log("-----------------------")
    console.log("數據庫連接失敗:",err)
    console.log("-----------------------")
    return;
}
console.log("數據連接成")
})
// 三，設置數據模型（聲明是那個集合，限制字段個數和字段類型
const model = db.model("stu",{
    uname:{type:String, default:"神龍教主"},
    age:{type:Number},
    sex:{type:String}
})

//四，方法
const createModel = postData => { 
const insertObj = new model(postData)
return insertObj.save()
.then(res=>{
    return res
})
.catch(err => {
    console.log("插入失敗" + err)
    return false
})
}

const listModel = (skipNum, limitNum) => { // () 代表不用傳遞參數，直接返回數據
    // console.log(skip, limit)
    return model.find().skip(skipNum).limit(limitNum)
    .then(res=>{
        return res
    })
    .catch(err => {
        console.log("查詢失敗" + err)
        return [] // 如果沒有就返回空數組
    })
    }

module.exports = {
    createModel,
    listModel
}