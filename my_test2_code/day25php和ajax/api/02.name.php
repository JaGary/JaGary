<?php
//第三步 接收前端传来的数据，判断用户名是否存在
    $name = $_REQUEST['name'];//要放在前端去检测，不要打开后端接口检测

    $arr = array('man','wjr','dengbo','kesheng','rangui');
    
    if(in_array($name,$arr)){
        echo 'no';
    }else{
        echo 'yes';
    }
?>