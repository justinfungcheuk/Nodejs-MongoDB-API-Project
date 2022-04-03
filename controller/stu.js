//導入模型
const {
    createModel,
    listModel
} = require(process.cwd() + "/models/stu")
// process.cwd() 代表命令行輸入命令的路徑


//定義處理方法
const create = async (req,res) => {
    //res.send("this is stu create")
    //1. 接收數據
    let postData = req.body
   
    //2. 過濾（忽略）
    //3. 操作數據庫
    let rs = await createModel(postData)
    //4. 判斷返回
    if(rs){
        res.send({
            meta: {
                state: 200,
                msg: "添加成功"
            },
            data: null
        })
    }else{
        res.send({
            meta: {
                state: 500,
                msg: "添加失敗"
            },
            data: null
        })
    }
}

//列表
/**
 * @api {get} /stu 學生模塊列表
 * @apiName Add
 * @apiGroup Stu
 *
 * @apiParam {Number} pageno    當前頁
 * @apiParam {Number} pagesize  每頁顯示條數
 *
 * @apiSuccess {String} meta 狀態碼 和 顯示信息
 * @apiSuccess {String} data 數據
 */


const index = async (req, res) => {
    //res.send("this is index")
    //1. 接收數據
    let getData = req.query
    // console.log(getData) { pageno: '1', pagesize: '2' }
    //2. 過濾

    let skip = (parseInt(getData.pageno) - 1) * parseInt(getData.pagesize)
    //3. 獲取數據
    let data = await listModel(skip, parseInt(getData.pagesize))
    //4. 響應數據
    res.send({
        meta: {
            state: 200,
            msg: "查詢成功"
        },
        data: data
    })
}

//導出成員
module.exports = {
    create,
    index
}