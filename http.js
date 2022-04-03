//1. 引入 express模塊
const express = require("express")
//2. 創建app對象，通過語法express() 底層原理http模塊的createServer
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extende:true}));
app.use(bodyparser.json())
//3. 路由，語法 app.HTTP請求方法（路徑，回調函數）
app.get("/", (req,res)=>{// request response
    // send 是 express 用來響應數據
    res.send("Hello, webopenfather")
})

const stuController = require(process.cwd()+'/controller/stu')
// process.cwd() 當前命令與這個目錄
//學生添加
app.post('/stu', stuController.create)
//學生列表
app.get('/stu', stuController.index)

//4. 啟動服務監聽端口
// app.listen(3000)
app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})