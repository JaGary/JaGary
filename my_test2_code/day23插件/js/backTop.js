//回到顶部

function bTop(opt) {
    btopOpt = {
        ele:'box'
    }

    Object.assign(btopOpt, opt);

    var box = document.getElementById(btopOpt.ele);

    window.onscroll = () => {
        if (window.scrollY >= 500) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    }

    //点击快速回到顶部
    // box.onclick = () => {
    //     window.scrollTo(0, 0);
    // }

    //点击缓慢回到顶部：定时器，scrollTop = window.scrollY
    box.onclick = () => {
        let scrollTop = scrollY;//滚动条滚动距离等于
        let timer = setInterval(() => {
            if (scrollTop >= 0) {
                scrollTop -= 20;
                window.scrollTo(0, scrollTop);
            } else {
                clearInterval(timer);
            }
        }, 20);
    }
}