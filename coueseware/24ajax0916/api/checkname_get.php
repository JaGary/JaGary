<?php
    //3.接收前端传来的数据，判断用户名是否存在

    $name = $_REQUEST['name'];//接收数据的这种校验，要放在前端去检测，不要打开后端接口检测
    // echo $name;//发送数据给前端

    $arr = array('admin','malin','dazhe');

    if(in_array($name,$arr)) {
        //真：找到，不给注册
        echo 'no';
    }else {
        echo 'yes';
    }
?>