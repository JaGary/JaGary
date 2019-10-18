
// 1.json eval()

[
    {
        sid: 1,
        shopname: '茶叶阁',
        goodslist: [
            {
                gid: 1,
                title: '铁观音',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 2,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 3,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }
        ]
    }, {
        shopname: '茶叶阁',
        goodslist: [
            {
                gid: 1,
                title: '铁观音',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 2,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 3,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }
        ]
    }, {
        shopname: '茶叶阁',
        goodslist: [
            {
                gid: 1,
                title: '铁观音',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 2,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }, {
                gid: 3,
                title: '铁观音2',
                price: 12,
                url: 'xxx.jpg',
                num: 10
            }
        ]
    }
]

/*
多商铺：选做  优先做前端

用户信息表：

uid
name
password

商品信息表：商品的详细信息

{
    gid：商品id
    sid：店铺id
}

店铺信息表：

{
    sid：店铺id
    sname：店铺名字
}

订单表：谁买的 uid。商品？gid，店铺？sid

详情页：加入购物车，把上面uid、gid、sid

购物车：渲染数据

查询 uid=12的商品数据按店铺分组，把分组数据做好给前端；

uid
    店铺一：一组数据
    店铺二：一组数据
    店铺三：一组数据

多用户多商铺：多商铺选做，多用户购物车做出来
    商品信息表：数据是最全的
        gid(商品id)  sid(商铺id) gname(商品名字) sname(商铺名字) uname(用户名) url(商品url) 参数、颜色、库存、特点、口号、收藏量
    订单表字段：
        gid(商品id) uid(用户id) sid(商铺id) gname(商品名字) sname(商铺名字) uname(用户名) url(商品url) ……
    1、渲染到购物车：select * from dingdan where uid=10(登陆的时候存cookie)

    data[
            {
                gid : 1,
                uid : 10,
                sid : 1,
                gname : '铁观音',
                sname : '茶叶罐'
            },
            {
                gid : 2,
                uid : 10,
                sid : 1
            },
            {
                gid : 4,
                uid : 10,
                sid : 2
            },
            {
                gid : 6,
                uid : 10,
                sid : 3
            }
        ]

        [
            {
                sid : 1,
                sname : '茶叶罐',
                goodslist : [
                    {
                        gid : 1,
                        gname : '铁观音'
                    },{
                        gid : 2,
                        gname : '龙井'
                    }
                ]
            },{
                sid : 2,
                sname : '甜品窝',
                goodslist : [
                    {
                        gid : 4,
                        gname : '蛋黄酥'
                    }

                ]
            },{
                sid : 3,
                sname : '爱衣服',
                goodslist : [
                    {
                        gid : 6,
                        gname : '连衣裙'
                    }
                ]
            }
        ]

    var arr = [];
    for(var ele of data) {
        var obj = {};
        if(obj.sid == ele.sid) {
            var good = {
                gid : ele.gid
            }
            obj.goodslist.push(good);
        }else{
            obj.sid = ele.sid;
            obj.sname = ele.sname;
            obj.goodslist = [];
            var good = {
                gid : ele.gid
            }
            obj.goodslist.push(good);
        }
    }

    [
        {
            sid : xx,
            sname: xx,
            goodslist :[
                {
                    gid : 1
                },{
                    gid : 2
                }
            ]
        }
    ]

    2.修改数量：真的改变数据库的数据
    数据更改接口：update dingdan set=num++ where uid=10 and gid=1

    3.删除的时候：delete from dingdan where uid=xx and gid=xxx
    页面数据记得刷新：渲染数据的接口从新调用
*/








