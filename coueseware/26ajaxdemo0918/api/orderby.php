<?php
    include 'conn.php';

    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1';
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5';
    $paixu = isset($_REQUEST['paixu']) ? $_REQUEST['paixu'] : '';
    // echo $page;接收数据记得回到前端检测一下，没问题再往下走

    /*
        * 接收前端数据：ipage 1、num 5
        * 写查询语句：SELECT * FROM goods LIMIT 起始下标,条数;

        page   每页条数num    下标index
        1        10                0
        2        10                10
        3        10                20

        page和num求index
        index=(page-1)*num
    */

    //1.写查询语句
    $index = ($page - 1) * $num;
    if($paixu) {
        $sql = "SELECT * FROM goodlist ORDER BY price $paixu LIMIT $index,$num ";
    }else{
        $sql = "SELECT * FROM goodlist LIMIT $index,$num";
    }
    


    //2.执行语句
    $res = $conn->query($sql);
    // var_dump($res);
    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    //语句：查询整个表的
    $sql2 = 'SELECT * FROM goodlist';
    $res2 = $conn->query($sql2);
    // var_dump($res2);
    // echo $res2->num_rows;

    //4.把数组转成字符串，echo给前端
    // echo json_encode($arr);

    $data = array(//制作关联数组，就可以一次性传多个值给前端
        'total' => $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
    );

    echo json_encode($data);

    //5.关闭数据库
    $res->close();
    $conn->close();
?>