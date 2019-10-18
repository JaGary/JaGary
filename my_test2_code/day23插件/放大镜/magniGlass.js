function magin(opt) {
    let magGlass = {
        ele1: 'bimg',
        imgTop: 'top',
        smallerImg: 'smaller'
    }

    Object.assign(magGlass, opt);

    var box = document.getElementById(magGlass.ele);
    var bimgs = box.getElementsByClassName(magGlass.ele1)[0];
    var top = box.getElementsByClassName(magGlass.imgTop)[0];
    var smaller = box.getElementsByClassName(magGlass.smallerImg)[0];

    

    let html = '';
    for (let i in magGlass.arr) {
        html += `<li><img src="${magGlass.arr[i]}" alt=""></li>`;
    }
    
    smaller.innerHTML = html;

    //第一个高亮
    // smaller.children[0].className = "active";

    bimgs.innerHTML = `<img src="${magGlass.arr[0]}" alt="">`;
    top.innerHTML = `<img src="${magGlass.arr[0]}" alt="">
        <div class="mask"></div>`;
    var mask = box.getElementsByClassName("mask")[0];

    //鼠标移入出现，移出隐藏
    top.onmouseover = function () {
        mask.style.display = "block";
        bimgs.style.display = "block";
    };

    //移出隐藏
    top.onmouseout = function () {
        mask.style.display = "none";
        bimgs.style.display = "none";
    };

    //抚摸事件
    top.onmousemove = function (ev) {
        var aTop = ev.pageY - box.offsetTop - mask.offsetHeight / 2; //让光标居中
        var aLeft = ev.pageX - box.offsetLeft - mask.offsetWidth / 2;

        //临界值
        if (aLeft >= box.offsetWidth - mask.offsetWidth) {
            aLeft = box.offsetWidth - mask.offsetWidth;
        } else if (aLeft <= 0) {
            aLeft = 0;
        }
        if (aTop >= box.offsetHeight - mask.offsetHeight) {
            aTop = box.offsetHeight - mask.offsetHeight;
        } else if (aTop <= 0) {
            aTop = 0;
        }

        //比例系数
        var sacX = aLeft / (box.offsetWidth - mask.offsetWidth);
        var sacY = aTop / (box.offsetHeight - mask.offsetHeight);

        mask.style.left = aLeft + "px";
        mask.style.top = aTop + "px";
        //大图运动距离：大图的最大运动距离 * 比例系数
        bimgs.children[0].style.left =
            (bimgs.offsetWidth - bimgs.children[0].offsetWidth) * sacX + "px";
        bimgs.children[0].style.top =
            (bimgs.offsetHeight - bimgs.children[0].offsetHeight) * sacY + "px";
    };

    //小图切换大图
    var alis = document.querySelectorAll(".smaller li");
    
    var liImg = document.querySelectorAll(".smaller img");
    
    //给第一个孩子高亮
    for (var i = 0; i < alis.length; i++) {
        alis[0].className = "active";
    }
    for (var i = 0; i < liImg.length; i++) {
        //小图切换大图
        liImg[i].onclick = function () {

            //左边大图的切换
            this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0].src = this.src;
            //右边大图的切换
            this.parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0].src = this.src;

            for (var i = 0; i < alis.length; i++) {
                alis[i].className = ""; //清空小图高亮效果
            }
            this.parentNode.className = "active"; //增加高亮效果
        };
    }
    
}