<?php
    include 'conn.php';
    $ipag = isset($_REQUEST['ipag']) ? $_REQUEST['ipag'] : '';
    $n = isset($_REQUEST['n']) ? $_REQUEST['n'] : '';

    $data = array (
        'ipag' => $ipag,
        'num' => $n
    );

    echo json_encode($data);
?>