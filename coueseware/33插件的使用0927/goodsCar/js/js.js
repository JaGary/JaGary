(function () {
    /*
        购物车特效实现：参考淘宝的多店铺效果
            - 商品列表渲染(目前是准备假数据)
            - 点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
            - 数量变-小计要跟着变
            - 删除当行
            - 全选：计算总价和总数量(很多地方需要调用该功能)
            - 全删:删除多行
    */
    var goodsContent = document.querySelector('.goods-content');

    var goodsList = [{
        id: 1234567876,//商品id
        imgUrl: 'img/3.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',//商品名字
        goodsParams: '四季度后付款的酸辣粉',//参数
        price: 199,//商品单价
        goodsCount: 5//库存量

    },
    {
        id: 145564876,
        imgUrl: 'img/4.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '四季度后付款的酸辣粉',
        price: 299,
        goodsCount: 6
    },
    {
        id: 1234564876,
        imgUrl: 'img/5.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '块电费简单来说记录',
        price: 399,
        goodsCount: 10
    },
    {
        id: 12345623876,
        imgUrl: 'img/6.jpg',
        goodsInfo: '号地块健身房回复的科技示范户快速坚实的看了看大家发快递了很费劲的开始放假',
        goodsParams: '块电费简单来说记录',
        price: 399,
        goodsCount: 12
    }
    ];

    //1.商品列表渲染(目前是准备假数据)
    var html = goodsList.map(function (item) {
        return `<div class="goods-item" data-id="${item.id}">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="col-md-1 car-goods-info"><label><input type="checkbox"
                                        class="goods-list-item"></label></div>
                            <div class="col-md-3 car-goods-info goods-image-column"><img class="goods-image" src="${item.imgUrl}"
                                    style="width: 100px; height: 100px;"><span
                                    id="goods-info">${item.goodsInfo}</span></div>
                            <div class="col-md-3 car-goods-info goods-params">${item.goodsParams}</div>
                            <div class="col-md-1 car-goods-info goods-price"><span>￥</span><span
                                    class="single-price">${item.price}</span></div>
                            <div class="col-md-1 car-goods-info goods-counts">
                                <div class="input-group">
                                    <div class="input-group-btn"><button type="button"
                                            class="btn btn-default car-decrease">-</button></div>
                                            <div><input style="width:50px;height:30px;line-height:30px;display:block;" data-kucun="${item.goodsCount}" class="good_num" type="text" value="1"></div>
                                            
                                    <div class="input-group-btn"><button type="button"
                                            class="btn btn-default car-add">+</button></div>
                                </div>
                            </div>
                            <div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span
                                    class="single-total">199</span></div>
                            <div class="col-md-2 car-goods-info goods-operate"><button type="button"
                                    class="btn btn-danger item-delete">删除</button></div>
                        </div>
                    </div>
                </div>`;
    }).join('');
    goodsContent.innerHTML = html;



    //2.点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
    var carDecrease = goodsContent.getElementsByClassName('car-decrease');//减按钮
    var carAdd = goodsContent.getElementsByClassName('car-add');//加按钮
    var goodNum = goodsContent.getElementsByClassName('good_num');//数量
    var singleTotal = goodsContent.getElementsByClassName('single-total');//小计
    var singlePrice = goodsContent.getElementsByClassName('single-price');//单价
    var itemDelete = goodsContent.getElementsByClassName('item-delete');//单价
    var goodsItem = goodsContent.getElementsByClassName('goods-item');//单价
    var goodsListItem = goodsContent.getElementsByClassName('goods-list-item');//单价
    var checkedAll = document.querySelector('#checked-all-bottom');
    var selectGoodsCount = document.querySelector('#selectGoodsCount');
    var selectGoodsMoney = document.querySelector('#selectGoodsMoney');
    var jiesuan = document.querySelector('#jiesuan');
    var deleteMulty = document.querySelector('#deleteMulty');

    addIndex();//渲染完就绑定索引

    function changeNum(num, now) {//思路1：太麻烦
        // var num = now.parentNode.parentNode.children[1].value;
        var kucun = now.parentNode.parentNode.children[1].children[0].dataset.kucun;
        if (num < 1) {//下限：最小一份
            num = 1;
        } else if (num >= kucun) {//上限：不能超过库存量
            num = kucun;
        }
        now.parentNode.parentNode.children[1].children[0].value = num;
    }

    function changeNum2(num, now) {//思路2：绑定索引的方式
        var kucun = goodNum[now].dataset.kucun;

        if (num < 1) {//下限：最小一份
            num = 1;
        } else if (num >= kucun) {//上限：不能超过库存量
            num = kucun;
        }
        goodNum[now].value = num;
        //小计==数量 * 单价
        singleTotal[now].innerHTML = num * singlePrice[now].innerHTML;
        total();//数量变化，总价和总数量要跟着变
    }

    function addIndex() {
        //绑定索引
        for (var i = 0; i < carAdd.length; i++) {
            carAdd[i].index = i;
            carDecrease[i].index = i;
            goodNum[i].index = i;
            itemDelete[i].index = i;
        }
    }


    for (var i = 0; i < carAdd.length; i++) {
        //绑定索引

        carAdd[i].onclick = function () {
            //加数量

            //思路1
            // var num = this.parentNode.parentNode.children[1].children[0].value;
            // num++;
            // changeNum(num, this);

            //思路2：
            var num = goodNum[this.index].value;
            num++;
            changeNum2(num, this.index);
            console.log(this.index);
        }

        carDecrease[i].onclick = function () {//减数量
            // var num = this.parentNode.parentNode.children[1].children[0].value;
            // num--;
            // changeNum(num, this);
            var num = goodNum[this.index].value;
            num--;
            changeNum2(num, this.index);
        }

        goodNum[i].oninput = function () {
            //手动输入数据
            // var num = this.value;
            // console.log(num);
            // changeNum(num, this);

            var num = this.value;
            changeNum2(num, this.index);
        }

        //删除当行
        itemDelete[i].onclick = function () {
            console.log(this.index);
            var res = confirm('您确定要删除这行吗？');
            if (res) {
                //父节点.removeChild(goodsItem[])
                goodsContent.removeChild(goodsItem[this.index]);
            }
            total();
            addIndex();
        }
    }

    //3、全选

    checkedAll.onclick = function () {
        for (var i = 0; i < goodsListItem.length; i++) {
            goodsListItem[i].checked = checkedAll.checked;
        }
        total();
    }

    //反控制全选
    function ischeckall() {
        var isok = false;
        var num = 0;
        var arr = [];//存放被勾选的下标，方便后期判断第几行被选中
        for (var i = 0; i < goodsListItem.length; i++) {
            if (goodsListItem[i].checked) {
                num++;
                arr.push(i);
            }
        }
        if (num == goodsListItem.length && num != 0) {//控制全选的勾选状态
            checkedAll.checked = true;
        } else {
            checkedAll.checked = false;
        }
        return arr;
    }

    function total(arr) {
        //计算总数量和总价格
        var arr = ischeckall();//拿到了被勾选的那行对应的下标 [0,2,3]
        var sum = 0;//存总数量
        var priceAll = 0;//存总价的
        arr.forEach(function (item) {
            sum += goodNum[item].value * 1;
            priceAll += singleTotal[item].innerHTML * 1;
        });
        console.log(sum);
        console.log(priceAll);
        selectGoodsCount.innerHTML = sum;
        selectGoodsMoney.innerHTML = priceAll.toFixed(2);
        if (arr.length) {
            //肯定有被勾选的产品，可以让结算高亮显示(可以点击了)
            jiesuan.className = 'col-md-1 bottom-menu submitData';
        } else {
            jiesuan.className = 'col-md-1 bottom-menu submitData submitDis';
        }
    }

    for (var i = 0; i < goodsListItem.length; i++) {
        goodsListItem[i].onclick = function () {
            total();
        }
    }

    //全删
    deleteMulty.onclick = function () {
        var arr = ischeckall().reverse();//拿到被勾选的行数，就知道要删除哪些行了
        //goodsContent.removeChild(goodsItem[this.index]);
        var res = confirm('您确定要删除选中的行吗？');
        if (res) {
            arr.forEach(function (item) {
                goodsContent.removeChild(goodsItem[item]);
            });
            total();
            addIndex();
        }
    }
    
})();