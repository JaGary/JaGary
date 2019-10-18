<?php
    header('Content-type:text/html;charset=utf-8');//设置编码

    $goodlist = array();//var arr = [];
    $name = array('华为','苹果','小米','oppo','诺基亚','爱立信');
    $price = array(5888,6888,4342,5435,1999,2999);
    $color = array('黑色','绿色','粉红色','金色','骚粉','钢琴黑');
    // echo array_rand($name);//获取随机下标
    // echo $name[array_rand($name)];
    for($i = 0; $i < 50; $i++) {
        $good = array(
            'gid' => $i + 1,
            'name' => $name[array_rand($name)],
            'price' => $price[array_rand($price)],
            'color' => $color[array_rand($color)]
        );

        $goodlist[] = $good;//js里面的push()  [{},{},{}]
    }

    // var_dump($goodlist);//前端接收：字符串

    //把对象转成字符串：echo ：1、打印数据到页面；2、把数据传给前端；
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
?>