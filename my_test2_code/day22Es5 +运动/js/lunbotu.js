(function () {
    /* 需求：轮播图
     * 所有的图片放在右侧，第一张图放在可视区
     * 焦点(幻灯片)动态生成（根据图片的个数来创建）
     * 开启定时器：自动轮播
     * 点击左右按钮：切换到上下张
     * 点击焦点：切换到对应的图片
     */


    //找节点
    var box = document.getElementById('box');
    var imglist = box.getElementsByTagName('li');
    var light = box.getElementsByClassName('light')[0];
    var prevBtns = box.getElementsByClassName('prev')[0];
    var nextBtns = box.getElementsByClassName('next')[0];
    var iw = imglist[0].offsetWidth;
    var timer = null;
    var now = 0; //表示下标

    //焦点生成
    var html = '';
    for (var i = 0; i < imglist.length; i++) {
        imglist[i].style.left = iw + 'px';
        html += `<span>${i + 1}</span>`;

    }
    //渲染到页面
    imglist[0].style.left = 0; //第一张放到可视区
    light.innerHTML = html;
    light.children[0].className = 'active'; //第一个高亮


    function next() { //下一张
        //旧图挪走，新图进场
        startMove(imglist[now], {
            'left': -iw
        });
        //新图快速放到右侧
        now++;
        if (now > imglist.length - 1) { //临界值
            now = 0;
        }
        imglist[now].style.left = iw + 'px'; //候场
        startMove(imglist[now], {
            'left': 0
        })
        lightMove() //焦点跟随
    }


    function prev() { //上一张
        startMove(imglist[now], {
            'left': iw
        });
        //新图快速放到右侧
        console.log(imglist[now]);
        now--;
        if (now < 0) { //临界值
            now = imglist.length - 1;
        }
        imglist[now].style.left = -iw + 'px'; //候场
        startMove(imglist[now], {
            'left': 0
        })
        lightMove() //焦点跟随
    }

    //开启定时器
    //焦点
    function lightMove() { //高亮
        for (var i = 0; i < light.children.length; i++) {
            light.children[i].className = ''; //排他
        }
        light.children[now].className = 'active';
    }
    //定时器
    timer = setInterval(next, 2000); //两秒切换一张图片

    //鼠标移入取消定时器
    box.onmouseover = function () {
        clearInterval(timer);
        nextBtns.style.display = 'block';
        prevBtns.style.display = 'block';
    }
    //移出开启
    box.onmouseout = function () {
        clearInterval(timer); //清楚定时器防止重叠
        timer = setInterval(next, 2000); //两秒切换一张图片
        nextBtns.style.display = 'none';
        prevBtns.style.display = 'none';
    }

    //点击切换
    nextBtns.onclick = function () { //下一张
        next();
    }
    prevBtns.onclick = function () { //上一张
        prev();
    }


    //点击焦点切换
    //绑定索引的 ---失败
    // var aspan = box.getElementsByTagName('span');
    // // console.log(aspan);
    // for (var i = 0; i < aspan.length; i++) {
    //     aspan[i].index = i;
    //     aspan[i].onclick = function () {
    //         var ind = this.innerHTML;
            
    //         if (ind > this.index) {
    //             //新图从右边切入
    //             // console.log(imglist[this.index]);
    //             // console.log(this.index);
    //             // console.log(ind);
    //             startMove(imglist[this.index], {
    //                 'left': -iw
    //             });
    //             imglist[ind - 1].style.left = iw + 'px';
    //             startMove(imglist[ind - 1], {
    //                 'left': 0
    //             });
    //         } 
    //         // this.index = ind;
    //         for (var i = 0; i < light.children.length; i++) {
    //             light.children[i].className = ''; //排他
    //         }
            
    //         light.children[this.index].className = 'active';
    //         // ind -= 1;
    //         this.index = ind+1;
    //         // console.log(ind);
    //         // console.log(this.index);
    //     }
    // }

    //点击焦点切换
    //事件委托
    light.onclick = function (ev) {
        if (ev.target.tagName.toLowerCase() == 'span') {
            var ind = ev.target.innerHTML - 1;
            if (ind > now) {
                //新图从右边切入
                startMove(imglist[now], {
                    'left': -iw
                });
                imglist[ind].style.left = iw + 'px';
                startMove(imglist[ind], {
                    'left': 0
                });
            } else if (ind < now) {
                //新图从左边切入
                startMove(imglist[now], {
                    'left': iw
                });
                imglist[ind].style.left = -iw + 'px';
                startMove(imglist[ind], {
                    'left': 0
                });
            }
            now = ind;
            lightMove();
        }
    }

    //下标--报错
    // var aspan = box.getElementsByTagName('span');
    // for (let j = 0; j < aspan.length; j++){
    //     var ind = this.innerHTML - 1;
    //     if (ind > now) {
    //         //新图从右边切入
    //         startMove(imglist[now], {
    //             'left': -iw
    //         });
    //         imglist[ind].style.left = iw + 'px';
    //         startMove(imglist[ind], {
    //             'left': 0
    //         });
    //     } else if (ind < now) {
    //         //新图从右边切入
    //         startMove(imglist[now], {
    //             'left': iw
    //         });
    //         imglist[ind].style.left = -iw + 'px';
    //         startMove(imglist[ind], {
    //             'left': 0
    //         });
    //     }
    //     now = ind;
    //     lightMove();
    // }
})();