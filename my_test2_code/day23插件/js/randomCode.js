function ranCode(opt) {
    randomCd = {
        num: 'num'
    }
    Object.assign(randomCd, opt);

    var num = document.getElementById(randomCd.num);
    var box = document.getElementById(randomCd.ele);
    var btn = document.getElementById('btn');
    var inform = document.getElementById('inform');

    //随机生成验证码函数
    function checkCode(n) {
        var str = 'zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP1234567890';
        var html = '';
        for (i = 0; i < n; i++) {
            //取数
            var sum = parseInt(Math.random() * str.length); //0-str.length-1 
            //利用下标取数 
            var num = str[sum];
            html += num;
        }
        return html; //
    }

    var num2 = checkCode(randomCd.length);

    box.innerHTML =
        `<span>${num2[0]}</span><span>${num2[1]}</span><span>${num2[2]}</span><span>${num2[3]}</span>`;
    
    //点击事件
    box.onclick = () => {
        var num2 = checkCode(randomCd.length);
        box.innerHTML =
            `<span>${num2[0]}</span><span>${num2[1]}</span><span>${num2[2]}</span><span>${num2[3]}</span>`;
    }

    //验证验证码是否正确,校验
    btn.onclick = function () {
        var val1 = num.value;
        var val2 = num2;
        console.log(val2);
        if (val1 == val2) {
            inform.innerHTML = '验证通过';
            inform.style.color = '#58bc58';
        } else {
            inform.innerHTML = '验证码不正确';
            inform.style.color = 'red';
        }

    }
}