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
function objTostr(obj) {
    arr = [];
    let arr2 = '';
    for (i in obj) {
        arr.push(i + '=' + obj[i]); //拼接组成arr
        console.log(arr);
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

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

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


//封装第二种ajax

/*
    jq：ajax

    $.ajax({ //配置参数
        type : 'get',
        url : xxx,
        data : '',
        async : true,
        success : function(str) {
            //成功的回调
        },
        rejected : function(data) {
            //失败的回调
        }
    });
*/
//第二种ajax
function ajax2(opt) {
    function extend(obj1, obj2) {
        for (var key in obj2) {
            obj1[key] = obj2[key];
        }
    }

    //默认参数
    var defaults = {
        async: true,
        data: ''
    }

    //后面使用默认参数
    extend(defaults, opt);

    var xhr = new XMLHttpRequest();
    if (defaults.type.toLowerCase() == 'get') {
        //get请求
        if (defaults.data) {
            defaults.url += '?' + defaults.data;
        }
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.send(null);
    } else {
        //post请求
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaults.data);
    }

    //接收数据返回
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (defaults.success) {//如果有数据就返回
                    defaults.success(xhr.responseText);
                }
            } else {
                // alert('错误http状态码是：' + xhr.status);
                if (defaults.rejected) {
                    defaults.rejected(xhr.status);//入口。实参
                }
            }
        }
    }
}



//设置cookie值
function setCookie(key, val, iDay) {
    //key：键名；val：键值；iDay：失效时间
    var now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';//设置一个站点内的文件可以共享此cookie
}

function getCookie(key) {//获取cookie值
    var cookies = document.cookie;//name=malin; pwd=123456
    var arr = cookies.split('; ');//['name=malin','pwd=123456']
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');//['name','malin'
        if (key == arr2[0]) {
            return arr2[1];
        }
    };
}

function removeCookie(key) {//删除：设置失效时间为过去的时间，立即失效
    setCookie(key, '', -1);
}


/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },

    tel: function (str) { //号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    
    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },
    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    psweasy: function (str) { //6-18位首字母开头
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },
    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },
    name: function (str) { //账号字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    }
}

function cloneDeep(obj) {//深度拷贝
    var str = JSON.stringify(obj);
    var newobj = JSON.parse(str);
    return newobj;
}