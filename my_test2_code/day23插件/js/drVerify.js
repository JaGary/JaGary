function drverify(opt) {
    var dvarify = {
        ele: 'box1',
        ele2: 'box'
    }

    Object.assign(dvarify, opt);

    var box1 = document.getElementById(dvarify.ele);
    console.log(box1);
    var box = document.getElementById(dvarify.ele2);

    //鼠标长按事件
    box1.onmousedown = function (ev) {
        var disX = ev.offsetX; //偏移量
        document.onmousemove = function (ev) { //鼠标抚摸事件
            var iLeft = ev.pageX - disX - box.offsetLeft;
            //临界值判断
            if (iLeft >= box.offsetWidth - box1.offsetWidth) {
                iLeft = box.offsetWidth - box1.offsetWidth;
                box.children[1].innerHTML = '恭喜您!验证通过!';
                box1.innerHTML = '√';
                box.style.backgroundColor = '#58bc58';
            } else if (offsetX = 0) {
                box1.style.left = 0
            }
            box1.style.left = iLeft + 'px'; //改变样式
        }

        //鼠标松开事件
        document.onmouseup = function (ev) {
            document.onmousemove = null;
            if (offsetX <= 100) {
                box1.style.left = 170 + 'px';
            }
        }
    }
}