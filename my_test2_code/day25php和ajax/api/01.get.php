<?php
    header('Content-type:text/html;charset=utf-8');//设置编码

    $goodlist = array();//var arr = [];
    $name = array('华为','苹果');
    $price = array(5888,6888);
    $color = array('黑色','绿色');
    // echo array_rand($name);//获取随机下标
    // echo $name[array_rand($name)];
    for($i = 0; $i < 10; $i++) {
        $good = array(
            'gid' => $i + 1,
            'name' => $name[array_rand($name)],
            'price' => $price[array_rand($price)],
            'color' => $color[array_rand($color)]
        );

        $goodlist[] = $good;//js里面的push()
    }

    // var_dump($goodlist);//前端接收：字符串

    //把对象转成字符串：
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);
?>