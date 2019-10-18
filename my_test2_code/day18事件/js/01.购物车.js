(function () {
    var contentCon = document.querySelector('.content-con');
    //准备假数据
    var data = [{
        id: 001, //产品编号
        imgUrl: '../images/1.jpg', //图片路径
        price: 1499, //单价
        kucun: 10, //库存
        goodInfo: '优惠20元顺丰包邮 免息 送电源+蓝牙 NFC Huawei 人脸识别 NFC刷卡',
        title: 'Mate 9 全网通4G手机Pro'
    }, {
        id: 002, //产品编号
        imgUrl: '../images/2.jpg', //图片路径
        price: 1099, //单价
        kucun: 20, //库存
        goodInfo: '顺丰速发【新品】Huawei/华为 畅享9珍珠屏华为官网官方旗舰店nova4i青春版',
        title: 'MAXplus/mate20pro手机'
    }, {
        id: 003, //产品编号
        imgUrl: '../images/3.jpg', //图片路径
        price: 1999, //单价
        kucun: 15, //库存
        goodInfo: '顺丰速发【新品】全网通4G手机降价分期购送礼高配 华为官网官方旗舰店正品行货',
        title: 'Huawei/华为 Mate 9手机'
    }, {
        id: 004, //产品编号
        imgUrl: '../images/2.jpg', //图片路径
        price: 1099, //单价
        kucun: 20, //库存
        goodInfo: '顺丰速发【新品】Huawei/华为 畅享9珍珠屏华为官网官方旗舰店nova4i青春版',
        title: 'MAXplus/mate20pro手机'
    }, {
        id: 002, //产品编号
        imgUrl: '../images/2.jpg', //图片路径
        price: 1099, //单价
        kucun: 20, //库存
        goodInfo: '顺丰速发【新品】Huawei/华为 畅享9珍珠屏华为官网官方旗舰店nova4i青春版',
        title: 'MAXplus/mate20pro手机'
    }];

    //数据渲染
    var html = data.map(function (item) {
        return `<li data-id="${item.id}" class="data-list">
                    <label><input type="checkbox" class="goods-list-item" style="margin-left: 50px;
                    margin-top:50px;"></label>
                    <div class="goods-image-column">
                        <img class="goods-image" src="${item.imgUrl}" style="width: 100px; height: 100px;">
                        <span id="goods-info" class="jiesao">${item.goodInfo}</span>
                    </div>
                    <span class="title">${item.title}</span>
                    <div class="goods-price" style="color:red;">
                        <span>￥</span>
                        <span class="single-price">${item.price}</span>
                    </div>
                    <div class="goods-counts">
                        <div class="input-group">
                            <div class="input-btn" style="margin-left: 30px;">
                                <button type="button" class="car-decrease" style="margin-left: 20px;">-</button>
                            </div>
                            <div><input style = "width:50px;height:20px;line-height:20px;display:block;margin-left:10px;"
                            data-kucun = "${item.kucun}" class = "goods-count" type= "text" value = "1" ></div>
                            <div class="input-btn">
                                <button type="button" class="car-add">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="goods-money-count" style="color:red;">
                        <span>￥</span>
                        <span class="single-total">${item.price}</span>
                    </div>
                    <div class="goods-operate">
                        <button type="button" class="item-delete">删除</button>
                    </div>
                </li>`
    }).join('');
    contentCon.innerHTML = html;

    //功能实现
    //实现数量的加减
    var checkAll = document.getElementById('check-all-bottom'); //全选
    var goodList = document.getElementsByClassName('goods-list-item');
    var carAdd = document.getElementsByClassName('car-add'); //加
    var carCut = document.getElementsByClassName('car-decrease'); //减
    var goodsCount = document.getElementsByClassName('goods-count'); //数量（库存）
    var itemdelete = document.getElementsByClassName('item-delete'); //
    var dataList = document.getElementsByClassName('data-list'); //

    //计算小计
    var singleTotal = document.getElementsByClassName('single-total');
    var singlePrice = document.getElementsByClassName('single-price');

    //结算
    var seCount = document.querySelector('#seCount');
    var seMoney = document.querySelector('#seMoney');
    var jiesuan = document.querySelector('#jiesuan');
    addIndex(); //找到节点后绑定索引

    //改变购买量
    function changeSum(num, now) {
        var kucun = goodsCount[now].dataset.kucun;
        if (num < 1) {
            num = 1;
        } else if (num >= kucun) {
            num = kucun;
            console.log(num);
        }
        goodsCount[now].value = num;
        singleTotal[now].innerHTML = singlePrice[now].innerHTML * num;
        total();
    }

    //绑定索引
    function addIndex() {
        for (var i = 0; i < carAdd.length; i++) {
            carAdd[i].index = i; //绑定索引
            carCut[i].index = i;
            goodsCount[i].index = i;
            itemdelete[i].index = i;
        }

    }
    //库存的加减购买
    for (var i = 0; i < carAdd.length; i++) {
        //加
        carAdd[i].onclick = function () {
            var num = goodsCount[this.index].value;
            num++;
            changeSum(num, this.index);
        }
        //减
        carCut[i].onclick = function () {
            var num = goodsCount[this.index].value;
            num--;
            changeSum(num, this.index);
        }
        //控制输入的数量不超过库存
        goodsCount[i].oninput = function () {
            var num = this.value;
            changeSum(num, this.index);
            console.log(num);
        }

        //删除单行
        itemdelete[i].onclick = function () {
            console.log(this.index);
            var res = confirm('确定删除？');
            if (res) {
                //父节点.removeChild(子节点)
                //ul.removeChild(li)
                contentCon.removeChild(dataList[this.index]);
            }
            total();
            addIndex(); //删除后也要绑定索引重置
        }
    }
    //全选
    checkAll.onclick = function () {
        for (var i = 0; i < goodList.length; i++) {
            goodList[i].checked = checkAll.checked;
        }
        total();
    }

    //点击复选框反控制全选
    function isCheck() {
        var goodsCount = document.getElementsByClassName('goods-count'); //数量（库存）
        var num = 0; //计数器
        var arr = []; //声明一个空数组存下标
        for (var i = 0; i < goodList.length; i++) {
            if (goodList[i].checked) { //
                num++;
                arr.push(i); //空数组存下标
            }
            console.log(arr);
        }
        if (num == goodList.length && num != 0) {
            checkAll.checked = true;
        } else {
            checkAll.checked = false;
        }
        return arr;
    }

    //选择所有复选框后控制全选
    for (var i = 0; i < goodList.length; i++) {
        goodList[i].onclick = function () {
            total();
        }
    }

    //全删
    deleteMulty.onclick = function () {
        var arr = isCheck().reverse();
        var res = confirm('您确定删除我了吗？');
        if (res) {
            arr.forEach(function (item) {
                contentCon.removeChild(dataList[item]);
            })
        }
        total(); //调用函数使删除后数据也跟着变化
        addIndex(); //删除后也要绑定索引重置
    }

    //计算总数量和总价格
    function total(arr) {
        var arr = isCheck(); //拿到对应下标
        var sum = 0;
        var priceSum = 0;
        arr.forEach(function (item) {
            sum += goodsCount[item].value * 1;
            priceSum += singleTotal[item].innerHTML * 1;
        })
        console.log(sum);
        console.log(priceSum);
        //计算总价钱
        seMoney.innerHTML = '￥' + priceSum.toFixed(2);
        //计算总数量
        seCount.innerHTML = sum;
        //控制高亮
        if (arr.length) {
            jiesuan.className = 'active';
        } else {
            jiesuan.className = '';
        }
    }

})();