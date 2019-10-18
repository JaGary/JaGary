(function () {
    //选项卡
    let mainLi = document.querySelector('.main3-top-1');
    let mainLi2 = document.querySelector('.main3-top-2');
    let lists1 = document.querySelector('.listli');
    let lists2 = document.querySelector('.listli2');
    let lists3 = document.querySelector('.listli3');
    let lists4 = document.querySelector('.listli4');
    let lists5 = document.querySelector('.listli5');
    
    console.log(mainLi.children[0]);
    //第一部分选项卡
    mainLi.children[0].onmousemove = function () {
        lists1.style.display = 'block';
        lists2.style.display = 'none';
        mainLi.children[0].style.color = '#ff6700';
        mainLi.children[1].style.color = '';
    }
    mainLi.children[1].onmousemove = function () {
        lists1.style.display = 'none';
        lists2.style.display = 'block';
        mainLi.children[1].style.color = '#ff6700';
        mainLi.children[0].style.color = '';
    }

    //第二部分选项卡
    mainLi2.children[0].onmousemove = function () {
        lists3.style.display = 'block';
        lists4.style.display = 'none';
        lists5.style.display = 'none';
        mainLi2.children[0].style.color = '#ff6700';
        mainLi2.children[1].style.color = '';
        mainLi2.children[2].style.color = '';
    }
    mainLi2.children[1].onmousemove = function () {
        lists3.style.display = 'none';
        lists4.style.display = 'block';
        lists5.style.display = 'none';
        mainLi2.children[0].style.color = '';
        mainLi2.children[1].style.color = '#ff6700';
        mainLi2.children[2].style.color = '';
    }
    mainLi2.children[2].onmousemove = function () {
        lists3.style.display = 'none';
        lists4.style.display = 'none';
        lists5.style.display = 'block';
        mainLi2.children[0].style.color = '';
        mainLi2.children[1].style.color = '';
        mainLi2.children[2].style.color = '#ff6700';
    }
   

    //回到顶部效果
    let backTop = document.querySelector('.backTop');

    window.onscroll = () => {
        if (window.scrollY >= 600) {
            backTop.style.display = 'block';
        } else {
            backTop.style.display = 'none';
        }
    }
    backTop.onclick = function () {
        window.scrollTo(0, 0);
    }


    //点击跳转到登录页面
    let loginBtn = document.querySelector('.login_btn');
    let regBtn = document.querySelector('.reg_btn');

    loginBtn.onclick = () => {
        location.href = 'log.html';
    };

    //点击跳转到注册页面
    regBtn.onclick = () => {
        // window.open("reg.html");
        location.href = 'reg.html';
    }

    //倒计时
    let cutdown = document.querySelector('.cutdown');
    let timer = null;//定时器
    let endTime = '2019-10-14 19:00:00';//终止时间
    let aendTime = Date.parse(endTime); //将时间戳换成毫秒数

    function countdown() {
        let nowTime = Date.now(); //获取当前时间
        let res = aendTime - nowTime; //相减
        
        //临界点
        if (parseInt(res / 1000) == 0) { //
            clearInterval(timer); //清空定时器
            cutdown.innerHTML = '';
        } else {
            let times = setTime(res); //毫秒变秒，再套用函数
            let str2 = `<span class="hour">${times.hours}</span>
                            <i>:</i>
                            <span class="min">${times.mins}</span>
                            <i>:</i>
                            <span class="sec">${times.secs}</span>`
            cutdown.innerHTML = str2;
        }
    }
    countdown(); //立即执行
    timer = setInterval(countdown, 1000);

})();