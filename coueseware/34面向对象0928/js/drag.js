//构造函数:属性
function Drag(id) {
    this.box = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
    this.init();
}

//方法：挂在原型对象下面
Drag.prototype.init = function () {
    this.box.onmousedown = function (ev) {
        //1.鼠标按下的一瞬间：获取到相对距离 ev.offsetX
        this.fndown(ev);
    }.bind(this);
}

Drag.prototype.fndown = function (ev) {
    // console.log(ev.offsetX);
    this.disX = ev.offsetX;
    this.disY = ev.offsetY;
    document.onmousemove = function (ev) {
        //2.鼠标滑动的过程：不断的计算left和top(clientx - offsetx)
        this.fnmove(ev);
    }.bind(this);
    //3.鼠标释放的时候：不再计算left和top
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}

Drag.prototype.fnmove = function (ev) {
    var iLeft = ev.clientX - this.disX;
    var iTop = ev.clientY - this.disY;
    if (iLeft <= 50) {
        //临界值
        iLeft = 0;
    } else if (iLeft >= window.innerWidth - this.box.offsetWidth - 50) {
        iLeft = window.innerWidth - this.box.offsetWidth;
    }
    this.box.style.left = iLeft + 'px';
    this.box.style.top = iTop + 'px';
}