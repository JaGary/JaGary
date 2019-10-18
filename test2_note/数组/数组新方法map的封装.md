> map的封装 

```
var arr = [1,2,3]
//需求:数组的每一项增加20%
//需求:数组的每一项增加5
//需求:数组的每一项拼接666

//map(fn)返回一个数量相等的数组，内容是什么取决于在fn中返回的值

function map(arr,fn){
    //第一个参数，arr接收数组，第二个参数：接收回调函数
    
    var newarr = [];
    arr.forEath(function(item){
        //遍历传进来的数据
        var num = fn(item);//实参：把要处理的数据丢到外面
        newarr.push(num);
    });
    return newarr;
}

var arr1 = map(arr,function(item){//item--形参
    return item+5;//吧处理好的数据，又返回
})；//实参-回调函数

console.log(arr1);

var arr2 = map(arr, function (item) {//item-形参
        return item + '666';//把处理好的数据，又返回
    });//实参-回调函数
 console.log(arr2);
 
  var arr3 = map(arr, function (item) {//item-形参
        return `<li>${item}</li>`;;//把处理好的数据，又返回
    });//实参-回调函数
    
   console.log(arr3);
```

