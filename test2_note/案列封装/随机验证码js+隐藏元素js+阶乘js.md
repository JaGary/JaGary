> 自调用：
> 把变量都写在函数内部变成局部变量，用完就自动释放内容，垃圾回收机制回收
>
> 

>案例：阶乘函数的封装

```
(function () {

        //函数的封装：声明式

        function factorial(num) {//num==5 求5的阶乘  形参

            var res = 1;

            for (var i = 1; i <= num; i++) {

                res *= i;

            }

            return res;//记得返回值是最终的那个值，一定是for循环结束的返回值才是最后的结果

        }

        //调用:复制一行：shift + alt + 下键

        var tex = document.getElementById('tex');

        var btn = document.getElementById('btn');

        var box = document.getElementById('box');

        //点击按钮的时候，拿到表单的值，计算阶乘，结果放到box里面

        btn.onclick = function () {

            var val = tex.value;//取值

            var res = factorial(val);//实参 加工

            box.innerHTML = val + '的阶乘是：' + res; //赋值

        }

    })();



```



> 封装一个显示和隐藏页面元素方法 ------js，插件，（完整js，引入就行）

```
function hideShow(btn, ele) {//要参数：参数一：点击的对象；参数二：显示隐藏的对象
    btn.onclick = function () {
        if (ele.style.display == 'block') {//null == 'block'  'block'== 'block' 'none'=='block'
            ele.style.display = 'none';
        } else {
            //第一次：显示
            ele.style.display = 'block';
        }
    }
}
```

> 
>
> 一个随机验证码js插件源码

```
  (function () {

        //找节点
        var num = document.getElementById('num');
        var rannum = document.getElementById('rannum');
        var btn = document.getElementById('btn');
        var inf = document.getElementById('inf');

        /*
            伪代码：中文大纲

            需求：
                * 生成一个四位数随机数：封装函数：0-9之间任意4个数字组合
                * 点击一次，生成一个随机数替换rannum的值 
                * 点击提交的时候：验证输入的数据是否和随机数一样，给出提示
        */

        function checkCode(n) {
            //0-9之间任意n个数字组合
            // var num = parseInt(Math.random() * 10);//0-9.999  0-9
            // console.log(num);
            var html = '';
            for (var i = 0; i < n; i++) {
                var num = parseInt(Math.random() * 10);//5 4
                html += num;
            }
            return html;//拼接好的四位随机数
        }

        //1.生成一个四位数随机数
        rannum.value = checkCode(4);//马上生成一个随机数放到表单

        //2.点击一次，生成一个随机数替换rannum的值
        rannum.onclick = function () {
            rannum.value = checkCode(4);
        }

        //3.点击提交的时候：验证输入的数据是否和随机数一样，给出提示
        btn.onclick = function () {
            var val1 = num.value;
            var val2 = rannum.value;
            if (val1 == val2) {
                inf.innerHTML = '验证通过';
                inf.style.color = '#58bc58';
                console.log('等于');
            } else {
                inf.innerHTML = '验证不通过';
                inf.style.color = 'red';
                console.log('不等');
            }
        }
    })();
```

