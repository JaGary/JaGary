<?php
    include 'conmon.php';

    $sql = 'SELECT * FROM detail';
    $res = $coon->query($sql);

    $arr = $res->fetch_all(MYSQLI_ASSOC);

    echo json_decode($arr);
?>