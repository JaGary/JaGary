<?php
    include 'conmon.php';

    $id = isset($_REQUEST['sid']) ? $_REQUEST['sid'] : '';
    $sql = "delete from cart_goods where id = '$id'";
    $res = $coon->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>