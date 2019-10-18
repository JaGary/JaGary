<?php
    include 'conmon.php';

    $urlimg = isset($_REQUEST['imgurl']) ? $_REQUEST['imgurl'] : '';
    $nums = isset($_REQUEST['num']) ? $_REQUEST['num'] : '';
    $textInf = isset($_REQUEST['textInf']) ? $_REQUEST['textInf'] : '';
    $price = isset($_REQUEST['price']) ? $_REQUEST['price'] : '';

    $sql = "INSERT INTO cart_goods(urlimg,title,pricecart,num) VALUE ('$urlimg','$textInf','$price','$nums')";
    $res = $coon->query($sql);

    // $arr = $res->fetch_all(MYSQLI_ASSOC);
    
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>