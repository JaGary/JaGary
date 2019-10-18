<?php
    //接收id
    //isset() 是否接收到了参数，返回真假
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '' ;

    //文件路径
    $path = 'dianzan1.json';

    //打开文件
    $file = fopen($path,'r');

    //读取文件
    $cont = fread($file,filesize($path));

    //把字符串转成对象，方便遍历进行判断id值
    $arr = json_decode($cont,true);

    for($i = 0;$i < count($arr); $i++){
        if($id == $arr[$i]['id']){
            $arr[$i]['good']++;
            echo $arr[$i]['good'];
            break;
        }
    }

    //写入json
    $file = fopen($path,'w');

    //把对象转成字符串，再写入json文件
    fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));

    //关闭
    fclose($file);
?>