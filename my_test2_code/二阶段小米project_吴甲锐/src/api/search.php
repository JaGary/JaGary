<?php
    include 'conmon.php';
    
    $num = isset($_REQUEST['searchs']) ? $_REQUEST['searchs'] : '';
    
    $sql = "SELECT * FROM goodlist WHERE title LIKE '%$num%'";
    
    $res = $coon->query($sql);
    
    //把数组转成字符串，echo给前端
    // $arr = $res1->fetch_all(MYSQLI_ASSOC);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

    //关闭数据库
    // $res1->close();
    // $conn->close();
?>