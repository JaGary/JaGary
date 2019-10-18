<?php
	/*
	 服务器代理获取城市：
	 
	 	* http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=27.46.236.176
	 	* 返回城市

	 * */
	
	$ip=isset($_GET['ip']) ? $_GET['ip'] : '';
	
	$url="http://ip.taobao.com/service/getIpInfo.php?ip=$ip";
	
	$content=file_get_contents($url);
	
	echo $content;
?>