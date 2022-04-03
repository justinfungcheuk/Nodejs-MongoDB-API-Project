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
const model = db.model("api",{
    uname:{type:String, default:"神龍教主"},
    pwd:{type:String},
    age:{type:Number},
    sex:{type:String}
})

// 四，創建實例操作（CURD）

// 讀 -----------------

//model.findOne({})
model.find({}).skip(1).limit(1)
.then(res => {
    console.log(res)
    db.close()
    return res
})
.catch(err => {
    console.log(err)
    return false
})  

/**
 * 總結：
 * 
 * 安裝： yarn add mongoose 或者 npm i mongoose
 * 
 * 使用 http://mongoosejs.net 或 http://mongoosejs.com 
 */