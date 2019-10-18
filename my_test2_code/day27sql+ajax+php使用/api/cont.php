<?php
    include 'conn.php';

    //接收参数
    $page = isset($_REQUEST['ipage']) ? $_REQUEST['ipage'] : '1' ;
    $num = isset($_REQUEST['num']) ? $_REQUEST['num'] : '5' ;
    $rank = isset($_REQUEST['rank']) ? $_REQUEST['rank'] : '' ;

    $index = ($page - 1) * $num;

    //查询语句
    //排序
    if($rank){
        $sql = "SELECT * FROM datas ORDER BY price $rank LIMIT $index,$num";
    }else{
        $sql = "SELECT * FROM datas LIMIT $index,$num";
    }
    
    
    
    //执行语句
    $res = $coon->query($sql);
    
    // //提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    
    // //查询整个表
    $sql2 ='SELECT * FROM datas';

    $res2 = $coon->query($sql2);
 
    $data = array(//制作关联数组，一次性传多个值
        'total'=> $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
    );

    //数组转换成字符串，将数据传给前端（第一次）
    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    //第二次
    echo json_encode($data);

    //字符编码
    $coon->set_charset('utf-8');

    //关闭数据库
    $coon->close();
    $res->close();
?>