(() => {
    /*
        需求：轮播图第二种写法，图片是水平平铺，ul运动
            * 渲染数据到页面:li和焦点(分页)
            * 把第一张复制到末尾
            * ul的总宽：图片的个数 * 图片宽度
            * 开启定时器：自动轮播
            * 点击上下按钮可以切换图片
            * 点击焦点切换到对应图片
    */

    let banner = document.getElementById('banner1');
    let ul = banner.getElementsByTagName('ul')[0];
    let arr = ['img/001.jpg', 'img/002.jpg', 'img/003.jpg', 'img/004.jpg'];
    let page = banner.getElementsByClassName('page')[0];
    let btnNext = banner.getElementsByClassName('btn-next')[0];
    let btnPrev = banner.getElementsByClassName('btn-prev')[0];
    let timer = null;
    let now = 0;//在可视区中，对应li下标

    //1.渲染数据到页面:li和焦点(分页)
    // let html = arr.map((item, index) => {
    //     return `<li data-index="${index}"><img src="${item}"></li>`;
    // }).join('');
    let html = '';
    let strSpan = '';
    arr.forEach((item, index) => {
        html += `<li data-index="${index}"><img src="${item}"></li>`;
        strSpan += `<span class="">${index + 1}</span>`;
    });

    ul.innerHTML = html;
    page.innerHTML = strSpan;
    page.children[0].classList.add('active');

    //2.把第一张复制到末尾
    let firstLi = ul.children[0].cloneNode(true);
    ul.appendChild(firstLi);

    //3.ul的总宽：图片的个数 * 图片宽度
    let iw = ul.children[0].offsetWidth;
    // console.log(iw);
    ul.style.width = ul.children.length * iw + 'px';

    //4.开启定时器：自动轮播
    timer = setInterval(next, 2000);//2秒切换一个图片

    function next() {//下一张
        now++;
        // console.log(now, iw);
        tab();
    }

    function prev() {//下一张
        now--;
        // console.log(now, iw);
        tab();
    }

    //切换图片
    function tab() {
        if (now > ul.children.length - 1) {
            now = 1;//回到第二张
            ul.style.left = 0;
        }
        if (now < 0) {
            now = ul.children.length - 2;
            ul.style.left = (ul.children.length - 1) * -iw + 'px';//往右边走
        }
        startMove(ul, { 'left': now * -iw });
        light();
    }

    //焦点跟随
    function light() {
        //排他
        for (let ele of page.children) {
            ele.classList.remove('active');
        }
        let index = ul.children[now].dataset.index;
        page.children[index].classList.add('active');
    }

    //5.点击上下按钮可以切换图片

    //鼠标移入停止，离开就继续运动
    banner.onmouseover = () => {
        clearInterval(timer);
    }

    banner.onmouseout = () => {
        clearInterval(timer);
        timer = setInterval(next, 2000);//2秒切换一个图片
    }

    //上一张
    btnPrev.onclick = () => {
        prev();
    }

    //下一张
    btnNext.onclick = () => {
        next();
    }

    //4.点击焦点切换图片
    page.onclick = ev => {
        if (ev.target.tagName == 'SPAN') {
            now = ev.target.innerHTML - 1;
            tab();
        }
    }
})();