<?php
    include 'conn.php';
    //登陆功能
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : 'dazhe';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '123456';

    //sql语句
    $sql = "SELECT * FROM userinf WHERE username='$name' AND psw='$password'";

    //执行语句
    $res = $conn->query($sql);

    // var_dump($res);
   
    if($res->num_rows) {
        //登陆成功
        echo 'yes';
    }else{
        //登陆失败
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