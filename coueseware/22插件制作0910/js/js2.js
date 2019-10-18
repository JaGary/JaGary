(function () {

    /*
    需求：轮播图实现，仿falsh动画
        -自动轮播：
            - 上面：大图，z-index  透明度
            - 下面：小图 ul往左边运动一个图：li宽度，负数
        -点击左右按钮：切换上下张
        -点击小图：切换大图
    */

    //找节点
    let playimages = document.getElementById('playimages');
    let prevBtn = playimages.getElementsByClassName('prev')[0];
    let nextBtn = playimages.getElementsByClassName('next')[0];
    let markLeft = playimages.getElementsByClassName('mark_left')[0];
    let markRight = playimages.getElementsByClassName('mark_right')[0];
    let smallUl = playimages.getElementsByClassName('small')[0];
    let bigPic = playimages.getElementsByClassName('big_pic')[0];
    let text = playimages.getElementsByClassName('text')[0];
    let length = playimages.getElementsByClassName('length')[0];
    let aBigImgs = bigPic.getElementsByTagName('li');
    let timer = null;
    let zIndex = 2;//因为z-index已经有1
    let now = 0;//可视区的那张的下标
    let iW = smallUl.children[0].offsetWidth;
    let arr = ['风景图1', '风景图2', '风景图3', '风景图4', '风景图5', '风景图6'];

    //小图水平方向平铺
    smallUl.style.width = iW * smallUl.children.length + 'px';

    //1.输入移入遮罩，按钮出现
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

    //2.自动轮播：
    timer = setInterval(next, 2000);

    function next() {
        now++;
        tab();
    }

    function prev() {
        now--;
        tab();
    }

    function tab() {//切换到第now张图
        if (now > aBigImgs.length - 1) {//临界值的判断
            now = 0;
        } else if (now < 0) {
            now = aBigImgs.length - 1;
        }
        if (zIndex > aBigImgs.length) {//层级的临界值
            //达到最后一张
            for (let li of aBigImgs) {
                li.style.zIndex = 0;
            }
            zIndex = 1;
        }

        //大图轮播：

        //让底下的图片显示出来
        aBigImgs[now].style.zIndex = zIndex++;

        //渐隐渐现
        // aBigImgs[now].style.opacity = 0;
        // startMove(aBigImgs[now], { 'opacity': 100 });

        //高度变化
        aBigImgs[now].style.height = 0;
        startMove(aBigImgs[now], { 'height': 320 });

        //修改内容
        text.innerHTML = arr[now];
        length.innerHTML = `计算图片数量${now + 1}/6`;

        //小图运动
        // startMove(smallUl, { 'left': -iW * now });
        if (now == 0) {//第一张不许动
            smallUl.style.left = 0;
        } else if (now == smallUl.children.length - 1) {//最后一张不动
            smallUl.style.left = -iW * (now - 2) + 'px';
        } else {
            startMove(smallUl, { 'left': -iW * (now - 1) });
        }

        //小图高亮
        //排他
        for (let ele of smallUl.children) {
            ele.style.opacity = 0.6;
        }
        startMove(smallUl.children[now], { 'opacity': 100 });
    }

    //3.点击左右按钮：切换上下张
    playimages.onmouseover = () => {
        clearInterval(timer);
    }

    playimages.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    }

    prevBtn.onclick = () => {
        //上一张
        prev();
    }

    nextBtn.onclick = () => {
        //下一张
        next();
    }

    //4.点击小图：切换大图
    for (let i = 0; i < smallUl.children.length; i++) {
        smallUl.children[i].onclick = () => {
            console.log(i);
            now = i;//点击小图获取下标，替换当前的那张
            tab();
        }
    }

})();