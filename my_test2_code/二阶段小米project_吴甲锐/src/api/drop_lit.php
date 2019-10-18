<?php
    include 'conmon.php';
    
    // $ranks = isset($_REQUEST['rank']) ? $_REQUEST['rank'] : '123';

    $sql = "SELECT * FROM goodlist ORDER BY price asc";

    // var_dump($ranks);
    $res = $coon->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);
    echo json_encode($arr);
?>