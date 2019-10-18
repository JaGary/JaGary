function floor(opt) {
    let floorJup = {

    }

    
    Object.assign(floorJup, opt);
   
    window.onload = () => {
        let menu = document.getElementById(floorJup.ele);
        let btns = menu.getElementsByTagName("li");
        let con = document.getElementById(floorJup.ele2);
        let cons = con.getElementsByTagName("li");

        for (i = 0; i < cons.length; i++) {
            cons[i].style.height = window.innerHeight + "px";
        }

        //循环绑定索引
        for (i = 0; i < btns.length; i++) {
            btns[i].index = i; //绑定索引
            btns[i].onclick = function () {
                clear();
                this.className = "active";
                var top = cons[this.index].offsetTop;
                window.scrollTo(0, top); //window.scrollto(x,y)表示可视窗口的
            };
        }

        //清空高亮效果
        function clear() {
            for (j = 0; j < btns.length; j++) {
                btns[j].className = ""; //清空点击事件类名
            }
        }

        //3.滚动到对应楼层的时候，按钮跟着高亮显示
        window.onscroll = () => {
            var scrollTop = window.scrollY;
            for (i = 0; i < btns.length; i++) {
                if (scrollTop >= cons[i].offsetTop) {
                    clear();
                    btns[i].className = "active";
                }
            }
        };
    };
}