//js库文件：仿jq，这里提供一些方法，以后可以反复调用，提高我们开发效率

//封装一个函数可以实现下拉菜单的显示隐藏(点击版)



function hideShow(btn, ele) { //要参数：参数一：点击的对象；参数二：显示隐藏的对象
    btn.onclick = function () {
        if (ele.style.display == 'block') { //null == 'block'  'block'== 'block' 'none'=='block'
            ele.style.display = 'none';
        } else {
            //第一次：显示
            ele.style.display = 'block';
        }
    }
}


//封装一个函数可以生成任意范围内的随机数


function ranNum(min, max) {
    //得到一个min到max之间的随机数：极限的时候,Math.random()为零的时候，最小的时候;Math.random()是1的时候是最大的时候
    return parseInt(Math.random() * (max - min + 1)) + min;
}



//封装随机颜色
function randomColor(n) {
    var color = '';
    if (n == 16) {
        var str = '123456789abcdef';
        color += '#';
        for (i = 0; i < 6; i++) { //6位
            var index = parseInt(Math.random() * str.length); //随机取六位的下标
            color += str[index];
        }
        return color;
    }
}


//封装函数过滤敏感词
function filter(str) {
    var arr = ['fuck', '操', '小学生', '妈蛋', '反清复明', '金正恩', '垃圾'];
    arr.forEach(function (item) {
        var reg = new RegExp(item, 'ig'); //规则
        str = str.replace(reg, '***');
    });
    return str;
}



//封装一个统计字符串中每个字符个数的函数(通过键名找键值)
function news(str) {
    var num1 = {};
    var sum = '';
    for (i in str) {
        sum += str.charAt(i); //遍历str，从下标取键值
        console.log(sum);
        var s = 0; //定时器
        for (j in sum) { //遍历找出同样的
            if (sum.charAt(j) == str.charAt(i)) {
                s++; //如果符合就+1
            }
            num1[(str.charAt(i))] = s; //通过下标找到str字符串找到num1的键名
            // console.log(s);
        }
    }
    return num1;
}


//输出所有1-100之间7的倍数和包含7的数字

function multiple() {
    for (i = 1; i <= 100; i++) {
        if (i % 7 == 0) {
            var arr2 = i.toString(); //必须转换成字符串
            if (arr2.indexOf('7') != -1) { //indexOf()对字符串有效果
                console.log(arr2);
            }
        }
    }
}


//给你一个网站url，提取参数部分做成对象,封装
function StrObj(data) {
    var data1 = data.split('?')[1]; //分割只取？后的值
    var data2 = data1.split('&'); //分割
    var obj = {}; //声明个空对象
    for (var i in data2) { //遍历数组
        var arr1 = data2[i].split('='); //利用下标分割
        // console.log(arr1);
        obj[arr1[0]] = arr1[1]; //将分割好的值存入obj对象中
        // console.log(obj);
    }
    return obj; //返回obj
}

//封装提取参数部分做成对象
function strToObj(str) {
    var obj = {};
    var arr = str.split('&');
    //第一种
    // for(var i in arr){
    //     var arr1 = arr[i].split('=');
    //     obj[arr1[0]] = arr1[1];
    // }
    //第二种
    for (i = 0; i < arr.length; i++) {
        var arr1 = arr[i].split('=');
        obj[arr1[0]] = arr1[1];
    }
    return obj;
}


//给你一个对象，封装成参数拼接在网站后面
function objToStr(obj) {
    arr = [];
    let arr2 = '';
    for (i in obj) {
        arr.push(i + '=' + obj[i]); //拼接组成arr
        // for (j in arr) { //遍历arr
        //     arr2 += arr[j]+'&'; //拼接arr的每一项并用&连接
        // }
    }
    arr2 = arr.join('&');
    // arr2 = arr2.slice(0, arr2.length-1);//将arr2倒数第二个元素的&去掉
    return arr2; //返回arr2
}


//封装一个统计字符串中每个字符个数的函数
function objNum(str) {
    var obj = {};
    var str1 = '';
    for (i in str) {
        str1 += str.charAt(i); //遍历str，从下标取键值
        // console.log(str1);
        var s = 0; //计数器
        for (j in str1) {
            if (str1.charAt(j) == str.charAt(i)) { //当有相同的对象时就执行
                s++;
            }
            obj[str.charAt(i)] = s; //通过下标找到str字符串找到num1的键名
        }
    }
    return obj;
}


//补零
function size(num) {

    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

//获取时间
function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();

    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    return {
        years: year,
        months: size(month),
        days: size(day),
        hours: size(hour),
        mins: size(min),
        secs: size(sec),
    }
}


//接收一个秒数，转成：xx天xx时xx分xx秒
function setTime(num) { //
    var sec = num % 60; //秒数
    var min = parseInt(num / 60) % 60; //分
    var hour = parseInt(num / 60 / 60) % 24; //小时
    var day = parseInt(num / 60 / 60 / 24); //天数
    return {
        days: size(day),
        hours: size(hour),
        mins: size(min),
        secs: size(sec)
    }
}


//封装获取样式和设置样式
function css() {
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(arguments[0], false)) {
            //标准浏览器
            var attr = arguments[1]; //传入实参的下标
            return getComputedStyle(arguments[0], false)[attr];
        } else {
            //非标准浏览器
            //IE678
            var attr = arguments[1];
            return arguments[0].currentStyle[attr];
        }
    } else if (arguments.length == 3) {
        //设置样式
        var attr = arguments[1];
        arguments[0].style[attr] = arguments[2]; // box.style[display] = none;
        // 案例：css(box, 'display', 'block');
    }
}

//实现居中

function dataset() {
    var ileft = (window.innerWidth - box.offsetWidth) / 2;
    var itop = (window.innerHeight - box.offsetHeight) / 2;
    box.style.left = ileft + 'px';
    box.style.top = itop + 'px';
}



/*仿jq的ajax封装：
    ajax({
          type : 'get', 必填
          url : 接口,必填
          data : { //选填
          name ：'蛋黄酥',
          price : '39.9'
        },
        asyn : true,可选
        success : function(str) {
            //成功的回调
        },
        error : function(status) {//可选的
            //失败的回调
        }
     });*/
function ajax(opt) {
    let defOpt = {
        data: '',
        asyn: true
    }

    Object.assign(defOpt, opt);

    //创建对象
    let xhr = new XMLHttpRequest();

    if (defOpt.type.toLowerCase() == 'get') {
        //get请求
        if (defOpt.data) {
            //如果有数据
            // defOpt.url = defOpt.url + '?' + objToStr(defOpt.data);
            defOpt.url += '?' + objToStr(defOpt.data);
        }
        xhr.open('get', defOpt.url, defOpt.asyn);
        xhr.send(null);
    } else {
        //post请求
        xhr.open('post', defOpt.url, defOpt.asyn);
        let data = objToStr(defOpt.data);
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
        xhr.send(data);
    }

    //渲染数据
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //执行成功
                defOpt.success(xhr.responseText);
            } else {
                //失败
                if (defOpt.error) {
                    defOpt.error(xhr.status);
                }
            }
        }
    }
}


//获取cookie
function getcookie(key) {
    let str = document.cookie; //username=admin; age=18
    let arr = str.split('; ');
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//设置cookie
function setcookie(key, val, iday) {
    let now = new Date();
    now.setDate(now.getDate() + iday);
    document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

//删除
function removeCookie(key) {
    setcookie(key, '', -1);
}