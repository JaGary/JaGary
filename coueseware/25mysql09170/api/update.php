<?php

    //3.接收id。修改json数据里面，对应的id那条数据的点赞数量，在原本基础上加一
    //isset() 是否接收到了参数，返回真假
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';

    //文件路径
    $path = 'weibo.json';

    //打开文件
    $file = fopen($path,'r');//只读

    //读取文件
    $content = fread($file,filesize($path));//拿到字符串

    // echo $content;
    // var_dump($content);
    //把字符串转成对象，方便遍历进行判断id值
    $arr = json_decode($content,true);//true:[{},{},{}] false:{{},{},{}}

    for($i = 0; $i < count($arr); $i++) {
        if($id == $arr[$i]['id']) {
            $arr[$i]['good']++;
            echo $arr[$i]['good'];//点赞后的值
            break;
        }
    }

    //写入json文件
    $file = fopen($path,'w');//写入模式

    //把对象转成字符串，再写入json文件
    fwrite($file,json_encode($arr,JSON_UNESCAPED_UNICODE));

    //关闭
    fclose($file);
?>