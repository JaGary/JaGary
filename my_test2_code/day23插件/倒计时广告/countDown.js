function cutDown(opt) {
    let countDow = {
        ele: 'goods',
        url1: ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg'],
        url2: ['img/btn_buy0.jpg', 'img/btn_buy1.jpg'],
        endTime: '2019-9-30 00:00:00',
        time: '1000'
    }

    Object.assign(countDow, opt);

    let meinv = document.getElementById('meinv');
    let countDown = document.getElementById('countDown');
    let btnBuy = document.getElementById('btnBuy');
    let timer = null;

    let endTime = countDow.endTime;
    //console.log(endTime);
    let aendTime = Date.parse(endTime); //将时间戳换成毫秒数

    function countdown() {
        let nowTime = Date.now(); //获取当前时间
        let res = aendTime - nowTime; //相减

        //临界点
        if (parseInt(res / countDow.time) == 0) { //
            clearInterval(timer); //清空定时器
            countDown.innerHTML = '';
            //替换图片
            for (let i in countDow.url1) {
                meinv.src = countDow.url1[i];
            }
            for (let i in countDow.url2) {
                btnBuy.src = countDow.url2[i];
            }
        } else {
            let times = setTime(res); //毫秒变秒，再套用函数
            // console.log(times);
            let str1 = `剩余时间：${times.days}天${times.hours}时${times.mins}分${times.secs}秒`; //渲染
           
            countDown.innerHTML = str1;

        }
    }
    countdown(); //立即执行
    timer = setInterval(countdown, 1000);
}