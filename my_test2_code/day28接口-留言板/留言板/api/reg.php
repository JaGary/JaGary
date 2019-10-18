<?php
    include 'conn.php';

    $name = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $psw = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';

    $sql = "INSERT INTO users(username,password) VALUE ('$name','$psw');";

    $res = $conn->query($sql);

    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

?>