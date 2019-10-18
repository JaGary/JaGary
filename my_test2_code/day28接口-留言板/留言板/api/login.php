<?php
    include 'conn.php';

    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';

    $sql = "SELECT * FROM users WHERE username = '$name'";
    $sql2 = "SELECT * FROM users WHERE password = '$psw'";

    if($sql && $sql2){
        echo 'yes';
    }else{
        echo 'no';
    }
?>