(function () {
    let sname = getCookie('name');
    let names = document.querySelector('.name_s');
    names.innerHTML = sname;

    if (sname) {
        window.onload = function () {
            ajax({
                type: 'post',
                url: '../api/cart.php',
                success: str => {
                    let str1 = JSON.parse(str);
                    create(str1);
                }
            });

            function create(str1) {
                let contentCon = document.querySelector('.content-con');
                let html = str1.map(item => {
                    return `<li class="lista">
                                    <label><input type="checkbox" class="goods-list-item" style="margin-left: 50px;
                                        margin-top:50px;"></label>
                                    <div class="goods-image-column">
                            <img class="goods-image" src="${item.urlimg}" style="width: 100px; height: 100px;">
                            <span id="goods-info" class="jiesao">${item.title}</span>
                        </div>
                        <div class="goods-price" style="color:red;">
                            <span class="single-price">${item.pricecart}</span>
                        </div>
                        <div class="goods-counts">
                            <div class="input-group">
                                <div class="input-btn" style="margin-left: 30px;">
                                    <button type="button" class="car-decrease" style="margin-left: 20px;">-</button>
                                </div>
                                <div><input style="width:50px;height:20px;line-height:20px;display:block;margin-left:10px;"
                                        data-kucun="10" class="goods-count" type="text" value="1"></div>
                                <div class="input-btn">
                                    <button type="button" class="car-add">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="goods-money-count" style="color:red;">
                            <span class="single-total">${item.pricecart}</span>
                        </div>
                        <div class="goods-operate">
                            <span class="item-delete" style="display: block;">x</span>
                        </div>
                        </li>`
                }).join('');
                contentCon.innerHTML = html;

                let checkAll = document.querySelector('#check-all-top'); //全选
                let goodslist = document.querySelectorAll('.content-con .goods-list-item'); //复选框
                let itemdel = document.querySelectorAll('.item-delete'); //删除
                let singletotal = document.querySelectorAll('.goods-money-count .single-total'); //小计
                let nums = document.querySelector('.nums'); //数量
                let numd = document.querySelector('.numd'); //选择数量
                let seMoney = document.querySelector('#seMoney'); //总计
                let jiesuan = document.querySelector('#jiesuan'); //结算
                let dataList = document.querySelectorAll('.content-con li');
                let carAdd = document.querySelectorAll('.car-add'); //加
                let carCut = document.querySelectorAll('.car-decrease'); //减

                //点击加减控制数量(只能购买一件)
                for (let i = 0; i < carAdd.length; i++){
                    carAdd[i].index = i;
                    carAdd[i].onclick = () => {
                        alert('已达到最大购买量');
                    }
                    carCut[i].onclick = () => {
                        alert('至少买一件');
                    }
                }
                //全选
                nums.innerHTML = goodslist.length;
                checkAll.onclick = function () {
                    for (let i = 0; i < goodslist.length; i++) {
                        goodslist[i].checked = checkAll.checked;
                    }
                    total();
                }

                //选择所有复选框后控制全选
                for (let i = 0; i < goodslist.length; i++) {
                    goodslist[i].onclick = function () {
                        total();
                    }
                }

                //点击复选框反控制全选
                function isCheck() {
                    let num = 0; //计数器
                    let arr = []; //声明一个空数组存下标
                    for (let i = 0; i < goodslist.length; i++) {
                        if (goodslist[i].checked) { //
                            num++;
                            arr.push(i); //空数组存下标
                        }
                    }
                    if (num == goodslist.length && num != 0) {
                        checkAll.checked = true;
                    } else {
                        checkAll.checked = false;
                    }
                    return arr;
                }

                //删除单行
                for (let i = 0; i < itemdel.length; i++) {
                    itemdel[i].index = i; //绑定索引
                    itemdel[i].onclick = function () {
                        let res = confirm('确定删除？');
                        if (res) {
                            contentCon.removeChild(dataList[this.index]);
                            let sid = this.index + 1;
                            ajax({
                                type: 'get',
                                url: '../api/delete.php',
                                data: {
                                    sid: sid
                                },
                                success: str => {
                                    console.log(str);
                                }
                            })
                        }
                        total();
                    }
                }

                //计算总数量和总价格
                function total(arr) {
                    let goodsCount = document.getElementsByClassName('goods-count'); //数量（库存）
                    arr = isCheck(); //拿到对应下标
                    let sum = 0;
                    let priceSum = 0;
                    arr.forEach(function (item) {
                        sum += goodsCount[item].value * 1;
                        priceSum += singletotal[item].innerHTML * 1;
                    })

                    //计算总价钱
                    seMoney.innerHTML = priceSum + '元';
                    seMoney.style.fontSize = 20 + 'px';
                    //计算总数量
                    numd.innerHTML = sum;
                    //控制高亮
                    if (arr.length) {
                        jiesuan.className = 'active';
                    } else {
                        jiesuan.className = '';
                    }
                }
            }
        }
    }


})();