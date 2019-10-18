​    //1.告诉ajax你要什么

​    /*

​        open(请求方式,url,同步或异步)

​            参数一：请求方式 get 或 post

​            参数二：url，接口地址,如果需要传数据给后端，如果是get方式，数据是在url这里传输；url?name=jingjing&tel=12132132

​            参数三：同步或异步，同步false；异步：true

​    */





​    //2.ajax帮你发送请求

​    /*

​        send(参数)

​            * 如果是get方式：send(null)

​            * 如果是post，并且需要传数据给后端，send('name=jingjing&tel=12132132')

​    */



//3.做接口  （后端做）



//4.接收数据，做渲染 

处理服务器传回的数据，要用到一个 事件  ------ xhr.onreadystatechange 

```
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4) {
        alert(xhr.responseText);
    }
}
```

