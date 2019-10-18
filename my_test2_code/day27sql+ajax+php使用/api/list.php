<?php
    include 'conn.php';

    //接收参数
    $page = isset($_REQUEST['ipage']) ? ($_REQUEST['ipage']) : '1';
    $num = isset($_REQUEST['num']) ? ($_REQUEST['num']) : '4';
    $rank = isset($_REQUEST['rank']) ? ($_REQUEST['rank']) : '';

    $tet1 = isset($_REQUEST['tet1']) ? ($_REQUEST['tet1']) : '';
    $tet2 = isset($_REQUEST['tet2']) ? ($_REQUEST['tet2']) : '';

    $text = isset($_REQUEST['text']) ? ($_REQUEST['text']) : '';
    
    $index = ($page - 1) * $num;

    //查询语句
    //价格排序
    if($rank){
        $sql = "SELECT * FROM taobao ORDER BY price $rank LIMIT $index,$num";
    }else{
        $sql = "SELECT * FROM taobao LIMIT $index,$num";
        //价格区间
        if($tet1 && $tet2){
            $sql = "SELECT * FROM taobao WHERE price BETWEEN $tet1 AND $tet2";
        }else{
            $sql = "SELECT * FROM taobao LIMIT $index,$num";
            //模糊查询
            if($text){
                $sql = "SELECT * FROM taobao WHERE name1 LIKE '%$text%'";
            }else{
                $sql = "SELECT * FROM taobao LIMIT $index,$num";
            }
        }
        
    }
   
    //模糊查询
    if($text){
        $sql = "SELECT * FROM taobao WHERE name1 LIKE '%$text%'";
    }else{
        $sql = "SELECT * FROM taobao LIMIT $index,$num";
        //价格区间
        if($tet1 && $tet2){
            $sql = "SELECT * FROM taobao WHERE price BETWEEN $tet1 AND $tet2";
        }else{
            $sql = "SELECT * FROM taobao LIMIT $index,$num";
            //排序
            if($rank){
                $sql = "SELECT * FROM taobao ORDER BY price $rank LIMIT $index,$num";
            }else{
                $sql = "SELECT * FROM taobao LIMIT $index,$num";
            }
        }
    }

    //价格区间
    // if($tet1 && $tet2){
    //     $sql = "SELECT * FROM taobao WHERE price BETWEEN $tet1 AND $tet2";
    // }else{
    //     $sql = "SELECT * FROM taobao LIMIT $index,$num";
    //     //排序
    //     if($rank){
    //         $sql = "SELECT * FROM taobao ORDER BY price $rank LIMIT $index,$num";
    //     }else{
    //         $sql = "SELECT * FROM taobao LIMIT $index,$num";
    //         //模糊查询
    //         if($text){
    //             $sql = "SELECT * FROM taobao WHERE title LIKE '%$text%'";
    //         }else{
    //             $sql = "SELECT * FROM taobao LIMIT $index,$num";
    //         }
    //     }
    // }

    //执行语句
    $res = $coon->query($sql);

    //提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);

    $sql2 ='SELECT * FROM taobao';

    
    $res2 = $coon->query($sql2);

    //价格区间
    // $res3 = $coon->query($sql3);

    $data = array(
        'total'=> $res2->num_rows,
        'list' => $arr,
        'page' => $page,
        'num' => $num
    );

    //将数据传给前端
    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    // //字符编码
    $coon->set_charset('utf-8');

    $coon->close();
    $res->close();

    
?>