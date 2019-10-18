<?php
    include 'conmon.php';

    $pas = isset($_REQUEST['apsw']) ? $_REQUEST['apsw'] : '';
    $name = isset($_REQUEST['namecode']) ? $_REQUEST['namecode'] : '';

    $sql = "INSERT INTO user(name1,psw) VALUE ('$name','$pas');";

    $res = $coon->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
?>