(function () {
    /*
        需求：购物车实现(面向过程))
            * 点击加减可以修改数量和小计
            * 删除当行
            * 全选不选
            * 全删
            
        接口：
            * 渲染数据接口：订单表(详情页点击购买的时候存的数据)
            * 数量加减
            * 删除当行、删除全部
            * 选做：保存总数量和总价格
    */

    //1.点击加减可以修改数量和小计

    function total(now, num) {//数量和小计的变化 now-点击的元素
        //数量的变化
        let kuncun = $(now).parent().find('.nownum').data('num');//data-num
        if (num < 1) {
            num = 1;
        } else if (num > kuncun) {
            num = kuncun;
            //这里可以给个提示：您输入的值超过了库存量
        }
        $(now).parent().find('.nownum').val(num);

        //小计=数量*单价
        let price = $(now).parent().prev().text().slice(2);//单价
        let all = (num * price).toFixed(2);//小计
        $(now).parent().next().html('￥ ' + all);
        // console.log(price);
        allNum();
    }

    //点击加
    $('#cart').on('click', '.addnum', function () {
        let num = $(this).prev().val();
        num++;
        total($(this), num);
    });

    //点击减
    $('#cart').on('click', '.cutnum', function () {
        let num = $(this).next().val();
        num--;
        total($(this), num);
    });

    //手动输入
    $('#cart').on('input', '.nownum', function () {
        let num = $(this).val();
        total($(this), num);
    });

    //删除当行 集合里面找集合
    $('#cart').on('click', '.good_del', function () {
        // console.log($(this));
        let ok = confirm('您确定要删我吗？');
        if (ok) {
            $(this).parent().remove();
        }
        if ($('#cart .addnum').size() == 0) {
            //已经没有数据
            $('#del').css('display', 'none');
            // $('#del').css({
            //     'display': 'none'
            // });
        }
        allNum();
    });

    //复选框控制总量和总价
    function checkedArr() {
        let arr = [];//存放勾选复选框的下标
        $('.good_check input').each(function (index, item) {
            if ($(item).prop('checked')) {
                //被勾选了
                arr.push(index);
            }
        });
        return arr;
    }

    function allNum() {
        let checkall = checkedArr();//返回被勾选的下标数组
        let num = 0;//放商品总数量
        let total = 0;//放总价
        checkall.forEach(function (item, index) {
            num += $('#cart .nownum').eq(checkall[index]).val() * 1;//累加
            total += $('#cart .good_total').eq(checkall[index]).text().slice(2) * 1;

        });
        $('#allnum').html(`已选 ${num} 件商品`);
        $('#totalprice').html(`总计（不含运费）：￥ ${total.toFixed(2)}`);

        //控制全选按钮
        let len = $('.good_check input').length;//本事复选框的个数
        let achecknum = $('.good_check input:checked').length;
        if (len == achecknum) {
            //已经全选
            $('#allchecked input').prop('checked', true);
        } else {
            $('#allchecked input').prop('checked', false);
        }

    }


    $('#cart').on('click', '.good_check input', function () {

        allNum();
        // console.log(checkall);
        // console.log(num, total.toFixed(1));

    });

    //全选功能
    $('#allchecked input').click(function () {
        let isok = $('#allchecked input').prop('checked');
        $('.good_check input').prop('checked', isok);
        allNum();
    });

    //全删：删除被选中行
    $('#delall').click(function () {
        let checkall = checkedArr().reverse();//返回被勾选的下标数组
        let ok = confirm('您确定要删除我们？');
        if (ok) {
            checkall.forEach(function (item, index) {
                $('#cart .goods').eq(checkall[index]).remove();
            });
        }
        allNum();
        if ($('#cart .addnum').size() == 0) {
            //已经没有数据
            $('#del').css('display', 'none');
            // $('#del').css({
            //     'display': 'none'
            // });
        }
    });

})();