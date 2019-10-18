> this的使用

this：

​            \* 第一种用法：指向调用该函数的对象

​            \* 第二种用法:指向事件前面的对象，当前的那个

```
function show() {
        console.log(this);//this指向window
    }

    window.show();//winodw最大的对象，我们学的大量方法都是属于window下面的

    // window.alert(112);//平时的写法，省略了window对象，像这种完整的写法，我们就非常的容易看出，就是window再调用alert

	//找节点
    var list = document.getElementById('list');
    var aLis = list.getElementsByTagName('li');//可以在document下找li这个集合，但是在文档里面找，范围太大，找到页面所有的li

    for (var i = 0; i < aLis.length; i++) {
        //循环给每一个li绑定点击事件
        aLis[i].onclick = function () {
            console.log(this);//指向当前被你点击的那个li
        }
    }
```



> this的使用案例

需求：选项卡的实现

​            知识点：

​                \* document.getElementsByClassName() 通过类名找到元素，集合

​                \* 添加样式：节点.style

​                \* 添加属性：节点名.属性名 (除了class之外)

​                \* 添加类名：节点名.className

```
(function () {
	//找节点
        var list = document.getElementById('list');
        var abtns = list.getElementsByTagName('input'); //通过标签名找节点
        var acons = list.getElementsByClassName('con'); //通过class名找节点
	//遇到数组少不了循环
		//节点名.length--- 表示这个节点的长度
		//abtns[i]--------表示这个节点的第i个下标
        for (var i = 0; i < abtns.length; i++) {//循环绑定事件
            abtns[i].index = i;//添加索引(自定义属性) abtns[0].index = 0；abtns[1].index = 1
            abtns[i].onclick = function () {//循环在前，点击在后，循环早已经结束，i已经循环到最后，跳出循环体的i值
                //排他
                for (var j = 0; j < abtns.length; j++) {
                    abtns[j].className = '';//全部都先清空类名
                    acons[j].style.display = 'none';
                }
                this.className = 'active';//每一次都应该只有一个是高亮的
                // console.log(this.index);
                acons[this.index].style.display = 'block';
           }
        }
}();
```

