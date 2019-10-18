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


//给你一个对象，封装成参数拼接在网站后面
function objTostr(obj) {
    arr = [];
    for (i in obj) {
        arr.push(i + '=' + obj[i]); //拼接组成arr
        for (j in arr) { //遍历arr
            arr2 = arr[0] + '&' + arr[1]; //拼接arr的每一项并用&连接
        }
    }
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