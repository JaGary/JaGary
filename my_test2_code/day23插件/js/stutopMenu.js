function stuMenu(opt) {
    stutopMenu = {
        ele2:'box2'//默认参数
    }

    Object.assign(stutopMenu, opt);//必不可缺

    var box2 = document.getElementById(stutopMenu.ele2);

    window.onscroll = () => {
        var sTop = window.scrollY;//设定滚动距离
        if (sTop > stutopMenu.hTop) {
            box2.className = 'fix';//给盒子添加class 添加主要样式
        } else {
            box2.className = '';//空
        }
    }
}