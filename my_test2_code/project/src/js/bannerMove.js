(() => {
    //banner图轮播

    let playimages = document.querySelector('.main1-right');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next');
    let bigLi = document.querySelectorAll('.main1_list_img li');
    let light = document.querySelector('.light');
    let spanLi = document.querySelectorAll('.light span');
    let timer = null;
    let now = 0;//正在播放的li的下标
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
        bigLi[now].style.zIndex = zIndex++;
        bigLi[now].style.opacity = 0;//像手风琴效果：高度变化
        startMove(bigLi[now], { 'opacity': 100 });
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
    
})();