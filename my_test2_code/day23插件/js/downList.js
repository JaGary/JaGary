//下拉菜单
function downList(opt) {
    downOpt = {
        ele:'box'
    }
    
    Object.assign(downOpt, opt);

    var btn = document.getElementById('btn');
    var box = document.getElementById(downOpt.ele);
    istrue = true;//开关
    
    //数据渲染（报错）
    // var html = downOpt.con.map((item) => {
    //     return `<div class="con">${item}</div>`
    // }).join('');
    // box.innerHTML = html;

    btn.onclick = (ev) => {
        if (istrue) { //true false
            //第一次：显示
            box.style.height = '200px'; //通过高度的变化
            // box.style.display = 'block';//通过显示隐藏
        } else {
            box.style.height = '0';
            // box.style.display = 'none';
        }
        istrue = !istrue; //istrue =!true
        ev.stopPropagation(); //阻止冒泡
    }

    document.onclick = () => {
        box.style.height = '0';
        // box.style.display = 'none';
        istrue = true;
    }

}
    