/*
购物车特效实现：参考淘宝的多店铺效果
    - 商品列表渲染(目前是准备假数据)
    - 点击加减按钮、手动输入控制数量的改变(数量在库存范围内)
    - 数量变-小计要跟着变
    - 删除当行
    - 全选：计算总价和总数量(很多地方需要调用该功能)
    - 全删:删除多行
*/

(function () {

    //1.商品列表渲染(目前是准备假数据)
    var p = new Promise(function (resolve) {
        $.ajax({
            type: 'get',
            url: 'api/data.json',//替换成你的接口即可
            success: str => {
                // console.log(str);
                resolve(str);
            }
        })
    });

    p.then(function (arr) {
        var html = arr.map(function (item, index) {
            return `<div class="goods-item" data-id="${item.id}">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <div class="col-md-1 car-goods-info"><label><input type="checkbox"
                                            class="goods-list-item" data-id="${index}"></label></div>
                                <div class="col-md-3 car-goods-info goods-image-column"><img class="goods-image" src="${item.imgUrl}"
                                        style="width: 100px; height: 100px;"><span
                                        id="goods-info">${item.goodsInfo}</span></div>
                                <div class="col-md-3 car-goods-info goods-params">${item.goodsParams}</div>
                                <div class="col-md-1 car-goods-info goods-price"><span>￥</span><span
                                        class="single-price" >${item.price}</span></div>
                                <div class="col-md-1 car-goods-info goods-counts">
                                    <div class="input-group">
                                        <div class="input-group-btn"><button type="button"
                                                class="btn btn-default car-decrease" data-id="${index}">-</button></div>
                                                <div><input style="width:50px;height:30px;line-height:30px;display:block;" data-kucun="${item.goodsCount}" class="good_num" type="text" value="1" data-id="${index}"></div>
                                                
                                        <div class="input-group-btn"><button type="button"
                                                class="btn btn-default car-add" data-id="${index}">+</button></div>
                                    </div>
                                </div>
                                <div class="col-md-1 car-goods-info goods-money-count"><span>￥</span><span
                                        class="single-total">199</span></div>
                                <div class="col-md-2 car-goods-info goods-operate"><button type="button"
                                        class="btn btn-danger item-delete" data-id="${index}">删除</button></div>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        $('.goods-content').html(html);//渲染数据
    });

    //2.点击加减按钮、手动输入控制数量的改变(数量在库存范围内),数量变-小计要跟着变
    $('.goods-content').on('click', '.car-add', function () {
        // console.log(777);
        var num = $(this).parent().prev().children().eq(0).val();
        var kucun = $(this).parent().prev().children().eq(0).data('kucun');
        num++;
        if (num >= kucun) {//临界值设置
            num = kucun;
        }
        $(this).parent().prev().children().eq(0).val(num);//这里要有接口
        // console.log(num);
        var index = $(this).data('id');
        xiaoji(num, index);
    });

    $('.goods-content').on('click', '.car-decrease', function () {
        // console.log(777);
        var num = $(this).parent().next().children().eq(0).val();
        num--;
        if (num <= 1) {//临界值设置
            num = 1;
        }
        $(this).parent().next().children().eq(0).val(num);//这里要有接口
        // console.log(num);
        var index = $(this).data('id');
        xiaoji(num, index);
    });

    $('.goods-content').on('input', '.good_num', function () {
        // console.log(908);
        var num = $(this).val();//这里要有接口
        var kucun = $(this).data('kucun');
        if (num <= 1) {//临界值设置
            num = 1;
        }
        if (num >= kucun) {//临界值设置
            num = kucun;
        }
        $(this).val(num);
        // console.log(num);
        // console.log($(this).index());
        var index = $(this).data('id');
        xiaoji(num, index);
    });

    function xiaoji(num, index) {
        var price = $('.single-price').eq(index).html();
        var total = num * price;
        $('.single-total').eq(index).html(total);
    }

    //3.删除当行

    $('.goods-content').on('click', '.item-delete', function () {
        var index = $(this).data('id');
        $('.goods-item').eq(index).remove();//这里要有接口
        update();
    });

    //重置索引
    function update() {
        // console.log(890);
        $('.item-delete').each(function (index, item) {
            $('.item-delete').eq(index).attr('data-id', index);
            $('.car-add').eq(index).attr('data-id', index);
            $('.car-decrease').eq(index).attr('data-id', index);
            $('.good_num').eq(index).attr('data-id', index);
            $('.goods-list-item').eq(index).attr('data-id', index);
        });
    }
    // update();?

    //4.全选
    $('#checked-all-bottom').click(function () {
        $('.goods-list-item').prop('checked', $(this).prop('checked'));
    });

    $('.goods-content').on('click', '.goods-list-item', function () {
        // console.log(7778);
        var num = $('.goods-list-item:checked').size();
        var len = $('.goods-list-item').size();
        if (num == len) {
            //全选中
            $('#checked-all-bottom').prop('checked', true);
        } else {
            $('#checked-all-bottom').prop('checked', false);
        }
        console.log(checked_rows());//被勾选的行数
        var arr = checked_rows();
        changeNum(arr);
    });

    //判断哪行被选中了
    function checked_rows() {
        var arr = [];
        $('.goods-list-item').each(function (index, item) {
            if ($('.goods-list-item').eq(index).prop('checked')) {
                //这一行被勾选
                arr.push(index);
            }
        });
        return arr;
    }

    //计算总价和总数量
    function changeNum(arr) {
        var total = 0;
        var price = 0;
        for (var item of arr) {
            //item是下标
            total += $('.good_num').eq(item).val() * 1;
            price += $('.single-total').eq(item).html() * 1;
        }
        console.log(total, price);
    }
})();