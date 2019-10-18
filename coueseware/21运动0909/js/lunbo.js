(function () {

    /*
        需求：轮播图
            * 所有的图片放在右侧，第一张图放在可视区
            * 焦点(幻灯片)动态生成（根据图片的个数来创建）
            * 开启定时器：自动轮播
            * 点击左右按钮：切换到上下张
            * 点击焦点：切换到对应的图片
    */


    var box = document.getElementById('box');
    var imglist = box.getElementsByTagName('li');
    var light = box.getElementsByClassName('light')[0];
    var prevBtn = box.getElementsByClassName('prev')[0];
    var nextBtn = box.getElementsByClassName('next')[0];
    var iw = imglist[0].offsetWidth;
    var timer = null;
    var now = 0;//可视区里面图片的下标

    //1.所有的图片放在右侧，第一张图放在可视区
    //2.焦点(幻灯片)动态生成（根据图片的个数来创建）
    var html = '';
    for (var i = 0; i < imglist.length; i++) {
        imglist[i].style.left = iw + 'px';
        html += `<span>${i + 1}</span>`;
    }
    imglist[0].style.left = 0;
    light.innerHTML = html;
    light.children[0].className = 'active';


    //3.开启定时器：自动轮播

    function lightMove() {
        //排他
        for (var i = 0; i < light.children.length; i++) {
            light.children[i].className = '';
        }
        light.children[now].className = 'active';
    }

    function next() {//下一张
        //旧图挪走，新图进场
        startMove(imglist[now], { 'left': -iw });
        //新图:快速放在右侧，再挪到可视区
        now++;
        if (now > imglist.length - 1) {//临界值
            now = 0;
        }
        imglist[now].style.left = iw + 'px';//候场
        startMove(imglist[now], { 'left': 0 });
        lightMove();//焦点跟随
    }

    function prev() {//上一张
        //旧图挪走，新图进场
        startMove(imglist[now], { 'left': iw });
        //新图:快速放在左侧，再挪到可视区
        now--;
        if (now < 0) {//临界值
            now = imglist.length - 1;
        }
        imglist[now].style.left = -iw + 'px';//候场
        startMove(imglist[now], { 'left': 0 });
        lightMove();//焦点跟随
    }
    timer = setInterval(next, 2000);//每隔两秒切换一个图片

    //4.点击左右按钮：切换到上下张

    //鼠标移入停止，移出要继续运动
    box.onmouseover = function () {
        clearInterval(timer);
    }

    box.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(next, 2000);//每隔两秒切换一个图片
    }

    prevBtn.onclick = function () {
        //上一张
        prev();
    }

    nextBtn.onclick = function () {
        //下一张
        next();
    }


    //5.点击焦点：切换到对应的图片
    light.onclick = function (ev) {
        if (ev.target.tagName.toLowerCase() == 'span') {
            console.log(ev.target.innerHTML);
            var index = ev.target.innerHTML - 1;
            if (index > now) {
                //新图从右边切入
                startMove(imglist[now], { 'left': -iw });
                imglist[index].style.left = iw + 'px';
                startMove(imglist[index], { 'left': 0 });
            }
            if (index < now) {
                //新图从左边切入
                startMove(imglist[now], { 'left': iw });
                imglist[index].style.left = -iw + 'px';
                startMove(imglist[index], { 'left': 0 });
            }
            now = index;
            lightMove();//焦点跟随
        }
    }

})();