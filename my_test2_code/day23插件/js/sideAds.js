function sideAds(opt) {
    var sideAd = {

    }
    Object.assign(sideAd, opt);

    var box = document.getElementById(sideAd.ele);

    //鼠标移入
    box.onmouseover = () => {
        startMove(box, { 'right': 0 });
    }

    //鼠标移出
    box.onmouseout = () => {
        startMove(box, { 'right': -200 });
    }
}