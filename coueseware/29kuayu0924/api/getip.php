<?php
/*
	 	获取外网ip:
	 	
	 	* url:http://2019.ip138.com/ic.asp 
	 	* 获取数据：file_get_contents($url)
	 	* 把ip提取出来
	 	* 
	 */
	
	// $url='http://www.ip138.com/';
	
	$content=file_get_contents($url);
	// echo $content;
	//iconv() 参数一：目前编码   参数二：目标编码  参数三：要转码的内容
	$content=iconv('gb2312','utf-8',$content);
	// echo $content;
	//preg_match($reg,$str,$res) 参数一：正则  参数二：字符串  参数三：结果
	preg_match('/\[(.+)\]/',$content,$res);//[10,12,3,09]
	
	var_dump($res);
	
	// echo $res[1];
?>