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

// 增 -----------------
const insertObj = new model({
    uname: "張三",
    pwd: "123456",
    age: 18,
    sex: "男",
})
insertObj.save()
.then(res=>{
    console.log(res)
    return res
})
.catch(err => {
    console.log("插入失敗" + err)
    return false
})