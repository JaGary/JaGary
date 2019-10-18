<?php
    include 'conmon.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    //验证数据库数据是否和表单数据一样
    $sql = "SELECT * FROM user WHERE name1 = '$name' and psw = '$psw'";
    
    $res1 = $coon->query($sql);
    
    
    if($res1->num_rows){
        echo 'yes';
    }else{
        echo 'no';
    }
?>