<?php
    include 'conmon.php';

    $sql = 'SELECT * FROM cart_goods';
    $res = $coon->query($sql);

    $arr = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($arr);
?>