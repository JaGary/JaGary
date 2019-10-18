(() => {
    /*
        需求：仿flash轮播图
            * 给小图的ul设置宽度
            * 开启定时器自动轮播
                * 大图：li改变层级
                * 小图：ul改变left
            * 点击按钮切换图片
                * 移入定时器停止，移出运动
                * 移入左边区域：左按钮出现，反之右按钮出现
            * 点击小图切换大图
    */

    let playimages = document.querySelector('#playimages');
    let markLeft = document.querySelector('#mark_left');
    let markRight = document.querySelector('#mark_right');
    let prevBtn = document.querySelector('#prev');
    let nextBtn = document.querySelector('#next');
    let smallUl = document.querySelector('#playimages .small_pic ul');
    let bigLi = document.querySelectorAll('#big_pic li');
    let iw = smallUl.children[0].offsetWidth;
    let timer = null;
    let now = 0;//正在播放的li的下标
    let zIndex = 2;

    //1.给小图的ul设置宽度
    smallUl.style.width = smallUl.children.length * iw + 'px';

    //2.开启定时器自动轮播
    timer = setInterval(next, 2000);

    function next() {
        now++;
        tab();
    }

    function prev() {
        now--;
        tab();
    }

    function tab() {
        if (now > bigLi.length - 1) {//now到了最后一张回到第一张
            now = 0;
        } else if (now < 0) {
            now = bigLi.length - 1;
        }

        if (zIndex > bigLi.length) {//层级到了临界点就归零
            zIndex = 1;
            for (let ele of bigLi) {
                ele.style.zIndex = 0;
            }
        }
        //大图的轮播 z-index  font-size fontSize 驼峰命名 backgroundColor
        bigLi[now].style.zIndex = zIndex++;
        // bigLi[now].style.height = 0;//像手风琴效果：高度变化
        // startMove(bigLi[now], { 'height': 320 });
        bigLi[now].style.opacity = 0;//像手风琴效果：高度变化
        startMove(bigLi[now], { 'opacity': 100 });

        //小图的轮播
        if (now == 0) {
            smallUl.style.left = 0;
        } else if (now == smallUl.children.length - 1) {
            smallUl.style.left = -iw * (now - 2) + 'px';
        } else {
            startMove(smallUl, { 'left': (now - 1) * -iw });
        }

        //小图高亮
        for (let ele of smallUl.children) {
            ele.style.opacity = 0.6;
        }
        startMove(smallUl.children[now], { 'opacity': 100 });
        // startMove(smallUl, { 'left': now * -iw });
    }

    //3.点击按钮切换图片

    playimages.onmouseover = () => {
        clearInterval(timer);
    }

    playimages.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    }

    //按钮出现
    prevBtn.onmouseover = markLeft.onmouseover = () => {
        startMove(prevBtn, { 'opacity': 100 });
    }

    prevBtn.onmouseout = markLeft.onmouseout = () => {
        startMove(prevBtn, { 'opacity': 0 });
    }

    nextBtn.onmouseover = markRight.onmouseover = () => {
        startMove(nextBtn, { 'opacity': 100 });
    }

    nextBtn.onmouseout = markRight.onmouseout = () => {
        startMove(nextBtn, { 'opacity': 0 });
    }

    //切换下一张
    nextBtn.onclick = () => {
        next();
    }

    //切换到上一张
    prevBtn.onclick = () => {
        prev();
    }
})();