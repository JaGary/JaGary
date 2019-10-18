<?php
    //数据库
    include 'conn.php';

    $username = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';

    $sql = "SELECT * FROM users WHERE username = '$username'";

    $res = $conn->query($sql);

    if($res->num_rows){
        echo 'no';
    }else{
        echo 'yes';
    }

    //将数据返回前端
    
    // $coon->set_charset('utf-8');//设置编码

    // $res->close();
    // $conn->close();
?>