<?php
    include 'conmon.php';

    //接收参数
    $tel = isset($_REQUEST['val']) ? $_REQUEST['val'] : '';

    //执行语句
    $sql = "INSERT INTO regUser(phone) VALUE ('$tel');";
    
    $res = $coon->query($sql);
    //将数据传给前端
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    };
?>