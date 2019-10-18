var checkReg = {

    name: function (str) { //账号字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/; //数字字母下划线任意
        // var reg = /^[a-zA-Z]\S{5,19}$/; //账号字母开头, 6 - 20位  \S 空格以外的字符
        return reg.test(str);
    },

    password: function (str) {//密码验证，6-18位 不为空
        var reg = /^\S{6,18}$/;
        // var reg = /^[a-zA-Z]\S{6,17}$/; //6-18位，以字母开头的除空格外任意字符
        return reg.test(str);
    },

    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },

    tel: function (str) { //电话号码
        var reg = /^1[3-9]\d{9}$/;// 1开头，第二位3-9 共11位
        return reg.test(str);
    },

    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },

    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/; //18位或15位数，最后一位有可能是X
        return reg.test(str);
    },
    
    psweasy: function (str) { //6-18位首字母开头  //密码验证
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },

    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },

    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    },

    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g; // g -全局匹配
        return str.replace(reg, '');
    },
}