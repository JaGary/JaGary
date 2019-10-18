<?php
    $password = $_REQUEST['password'];

    $arr2 = array('123');

    if(in_array($password,$arr2)){
        echo 'pas';
    }else{
        echo 'password';
    }
?>