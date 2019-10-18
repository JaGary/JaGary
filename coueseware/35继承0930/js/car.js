(function () {
    /*
       需求：购物车实现(面向对象))
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

    class Car {
        constructor(id) {
            //构造函数
            this.carBox = $(id);
            this.init();
        }
        init() {
            //查找节点，和绑定事件
            this.creatList();//渲染数据到购物车 1.ajax
            this.addNum();//点击加添加数量
            this.cutNum();//点击减少数量
            this.manual();//手动输入修改数量
            this.removeRow();//删除某行 3.ajax gid
            this.allCheck();//全选 
            this.checkRow();//勾选某一行复选框 4.ajax 要不要把总数量和总价存起来？如果多个页面要展示这个数据，就做接口存起来
            this.allRemove();
        }
        creatList() {
            //发送ajax获取数据，渲染到页面
            console.log('渲染成功');
        }
        total(now, num, type) {
            //数量的变化
            // console.log(now, num);
            let kuncun = $(now).parent().find('.nownum').data('num');//data-num
            if (num < 1) {
                num = 1;
            } else if (num > kuncun) {
                num = kuncun;
                //这里可以给个提示：您输入的值超过了库存量
            }
            //2.ajax 不用type更简单，把页面的num传到数据库，更新数据库
            $(now).parent().find('.nownum').val(num);

            //小计=数量*单价
            let price = $(now).parent().prev().text().slice(2);//单价
            let all = (num * price).toFixed(2);//小计
            $(now).parent().next().html('￥ ' + all);
            this.allNum();
        }
        addNum() {
            //点击加添加数量
            let _this = this;
            this.carBox.on('click', '.addnum', function () {
                let num = $(this).prev().val();
                num++;
                // console.log(num);
                _this.total($(this), num, 'add');//修改数量和单价

            });

        }
        cutNum() {
            let _this = this;
            this.carBox.on('click', '.cutnum', function () {
                let num = $(this).next().val();
                num--;
                _this.total($(this), num, 'cut');
            });

        }
        manual() {
            let _this = this;
            this.carBox.on('input', '.nownum', function () {
                let num = $(this).val();
                _this.total($(this), num, 'manual');
            });
        }
        removeRow() {
            let _this = this;
            this.carBox.on('click', '.good_del', function () {
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
                } else {
                    $('#del').css('display', 'block');
                }
                _this.allNum();
            });

        }
        allCheck() {
            $('#allchecked input').click(function () {
                let isok = $('#allchecked input').prop('checked');
                $('.good_check input').prop('checked', isok);

            });
        }
        checkArr() {
            let arr = [];//存放勾选复选框的下标
            $('.good_check input').each(function (index, item) {
                if ($(item).prop('checked')) {
                    //被勾选了
                    arr.push(index);
                }
            });
            return arr;
        }
        allNum() {
            let checkall = this.checkArr();//被勾选的行的下标，存在数组里面
            // console.log(arr);
            //计算总数量和总价格
            let num = 0;//放商品总数量
            let total = 0;//放总价
            checkall.forEach(function (item, index) {
                num += $('#cart .nownum').eq(checkall[index]).val() * 1;//累加
                total += $('#cart .good_total').eq(checkall[index]).text().slice(2) * 1;

            });
            $('#allnum').html(`已选 ${num} 件商品`);
            $('#totalprice').html(`总计（不含运费）：￥ ${total.toFixed(2)}`);
        }
        checkRow() {
            let _this = this;
            this.carBox.on('click', '.good_check input', function () {
                let len = $('.good_check input').length;//本事复选框的个数
                let achecknum = $('.good_check input:checked').length;
                if (len == achecknum) {
                    //已经全选
                    $('#allchecked input').prop('checked', true);
                } else {
                    $('#allchecked input').prop('checked', false);
                }
                _this.allNum();
            });
        }
        allRemove() {
            $('#delall').click(function () {
                let checkall = this.checkArr().reverse();//被勾选的行的下标，存在数组里面
                let ok = confirm('您确定要删除我们？');
                if (ok) {
                    checkall.forEach(function (item, index) {
                        $('#cart .goods').eq(checkall[index]).remove();
                    });
                    this.allNum();
                }
            }.bind(this));

        }
    }

    //调用购物车
    new Car('#cart');
})();