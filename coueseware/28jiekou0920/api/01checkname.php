<?php
    include 'conn.php';
    //验证用户名是否存在
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';

    //sql语句
    $sql = "SELECT * FROM userinf WHERE username='$name'";

    //执行语句
    $res = $conn->query($sql);

    // var_dump($res);
    //判断是否可以通过验证
    if($res->num_rows) {
        //查找到，不能注册
        echo 'no';
    }else{
        echo 'yes';
    }

    //关闭数据库
    // $res->close();
    // $conn->close();
?>