<?php
    //1.建立连接
    $servername = 'localhost';//主机
    $username = 'root';//登陆数据库用户名
    $password = 'root';
    $dbname = 'guestbook';

    $conn = new mysqli($servername,$username,$password,$dbname);
    
?>