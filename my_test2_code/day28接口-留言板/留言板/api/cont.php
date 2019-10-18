<?php
    include 'conn.php';

    $cont = isset($_REQUEST['cont']) ? $_REQUEST['cont'] : '';
    $deline = isset($_REQUEST['deline']) ? $_REQUEST['deline'] : '';
    $uid = isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
    
    echo $cont;
    // $sql = "INSERT INTO contents(uid1,content,dateline) VALUES($uid,$cont,$deline)";

    // $res = $conn->query($sql);
    // echo $res;

    // echo json_encode($res);

    // $data = array(
    //     'str' => $cont,
    //     'str2' => $deline,
    //     'name2' => $uid
    // )
    
    // echo json_encode($data);

?>