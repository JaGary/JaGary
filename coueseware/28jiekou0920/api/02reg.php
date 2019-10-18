<?php
    include 'conn.php';
    //注册功能
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

    //sql语句
    $sql = "INSERT INTO userinf(username,psw) VALUES('$name','$password')";

    //执行语句
    $res = $conn->query($sql);

    // var_dump($res);
   
    if($res) {
        //插入成功
        echo 'yes';
    }else{
        echo 'no';
    }

    /*
        select : 返回结果集
        insert、update、delete：返回布尔值
    */

    //关闭数据库
    // $res->close();
    // $conn->close();
?>