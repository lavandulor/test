# 网易云课堂高级前端开发工程师课程
## 《MV* & 组件化开发 React专题》考试 答题demo
## 1.请实现支持如下代码的InputNumber组件，可以受控和非受控
```
function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
```
### 答案：/page/imputNumber.js

## 2.请写一个满足以下要求的confirm方法组件：（1）能在任意组件(示例如下)的componentDidMount生命周期中挂载，并返回一个promise；（2）能通过该promise返回的结果判断confirm组件是否成功挂载。
```
async componentDidMount(){
    let res = await confirm("确定删除吗")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
}
```

### 答案：/page/comfirm.js
