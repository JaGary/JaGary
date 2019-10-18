(function () {

    //吸顶菜单
    let main1 = document.querySelector('.main1');
    window.onscroll = function () {
        let scTop = window.scrollY;
        if (scTop >= 140) {
            main1.className = 'main1 fixed';
        } else {
            main1.className = 'main1';
        }
    }


    //轮播图
    let playimages = document.querySelector('.cont_left_img');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let bigLi = document.querySelectorAll('.big_img img');
    let light = document.querySelector('.line');
    let spanLi = document.querySelectorAll('.line span');
    
    let timer = null;
    let now = 0; //正在播放的li的下标
    let zIndex = 2;

    //开启定时器自动轮播
    timer = setInterval(next, 2000);

    function next() {
        now++;
        tab();
    }

    function prev() {
        now--;
        tab();

    }

    //焦点跟随
    function lightMove() {
        for (let i = 0; i < light.children.length; i++) {
            light.children[i].className = '';
        }
        light.children[now].className = 'active';

    }

    function tab() {
        if (now > bigLi.length - 1) { //now到了最后一张回到第一张
            now = 0;
        } else if (now < 0) {
            now = bigLi.length - 1;
        }

        if (zIndex > bigLi.length) { //层级到了临界点就归零
            zIndex = 1;
            for (let ele of bigLi) {
                ele.style.zIndex = 0;
            }
        }
        bigLi[now].style.zIndex = zIndex++;
        bigLi[now].style.opacity = 0; //像手风琴效果：高度变化
        startMove(bigLi[now], {
            'opacity': 100
        });
        lightMove();
    }


    //  鼠标划过停止定时器
    playimages.onmouseover = () => {
        clearInterval(timer);
    }

    playimages.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    }

    //点击按钮切换图片
    //切换下一张
    nextBtn.onclick = () => {
        next();
        lightMove();

    }

    //切换到上一张
    prevBtn.onclick = () => {
        prev();
        lightMove();

    }


    //点击焦点切换图片
    function lightBtn() {
        for (let j = 0; j < bigLi.length; j++) {
            spanLi[j].onclick = () => {
                let ind = spanLi[j].innerHTML;
                for (let i = 0; i < spanLi.length; i++) {
                    bigLi[i].style.zIndex = 0;
                    spanLi[i].className = '';
                }
                spanLi[j].className = 'active';
                bigLi[j].style.zIndex = ind;
            }
        }
    }
    lightBtn();

    //渲染详情页数据
    // let titleTop = document.querySelector('.title_top'); //头部名
    // let title = document.querySelector('.title');
    // let infot = document.querySelector('.infot'); //说明
    // let price = document.querySelector('.price'); //价格
    // let colorW = document.querySelector('.color_w'); //颜色
    // let sumAll = document.querySelector('.sum_sum'); //总价
    // let prices = document.querySelector('.price_s'); //价格2
    // let sumInf = document.querySelector('.sum_inf'); //总说明
    // let simg = document.querySelector('.simg'); //小图
    // let bigImg = document.querySelector('.big_img'); //大图

    // function init() {
    //     ajax({
    //         type: 'get',
    //         url: '../api/detail.php',
    //         success: str => {
    //             create(str);
    //         }
    //     });

    //     function create(str) {
    //         let astr = JSON.parse(str);
    //         let html1 = astr.map(item => {
    //             return `<img src="${item.imgurl1}" alt="" style="z-index: 1">
    //             <img src="${item.imgurl2}" alt="">
    //             <img src="${item.imgurl3}" alt="">
    //             <img src="${item.imgurl4}" alt="">`
    //         });
    //         bigImg.innerHTML = html1;
    //     }
    // }
})();