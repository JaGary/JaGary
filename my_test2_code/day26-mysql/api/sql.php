<?php
    //1.建立连接
    include 'conn.php';//导入
    
    //直接写入
    // $servername = 'localhost';//主机
    // $username = 'root';//登陆数据库用户名
    // $password = 'root';
    // $dbname = 'data';

    // $coon = new mysqli($servername,$username,$password,$dbname);
    
    //查询数据表
    $sql = 'SELECT * FROM datas';

    $res = $coon->query($sql);

    //提取结果集里面的数据部分
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    
    //把数据传给前端：对象->字符串;因为一个接口只能有一个打印输出
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    $coon->set_charset('utf-8');//设置编码
    
    //3.关闭数据库
    $res->close();
    $coon->close();
?>