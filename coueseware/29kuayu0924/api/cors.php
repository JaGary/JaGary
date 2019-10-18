<?php
	$origin = $_SERVER['HTTP_ORIGIN'];//不需要你传,只要你发送请求了，就会有这个数据，请求头里面的数据
	//数据在1907服务器里面
    $allow_origin = array(  //只要是这里的设置过的路径，这个域名下面所有文件都可以访问这个接口
        'http://localhost:1909',
        'http://www.baidu.com'
    );  

    if(in_array($origin, $allow_origin)){  //授权
        header('Access-Control-Allow-Origin:'.$origin);  //添加这段响应头：后端做
    }  
    
    echo 'hello1909';
?>