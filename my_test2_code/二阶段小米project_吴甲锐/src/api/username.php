<?php
    include 'conmon.php';

    $val2 = isset($_REQUEST['val2']) ? $_REQUEST['val2'] : '';

    $sql = "SELECT * FROM regUser WHERE phone = '$val2'";

    $res = $coon->query($sql);

    if($res->num_rows){
        echo 'no';
    }else{
        echo 'yes';
    }
?>