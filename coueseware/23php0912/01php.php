<?php
    echo 'hello world<br>';

    //变量
    $num = 66;
    echo $num.'<br>';//字符串用.拼接，就相当于js +

    echo 'my php study<br>';

    $price = 68;

    // echo 'price:'.$price.'yuan';
    echo "price:$price <i>yuan</i><br>";//类似字符串模板

    //作用域
    $sum = 12;//全局变量

    function show() {
        $total = 89;//局部变量
        // echo $sum;//局部不能拿全局的变量
        // echo $GLOBALS['sum'];//超级变量
        // return $total ;
        // data($total);//利用函数实参传给形参的方式，把数据传到外部
    }

    // $res = show();//可以通过return拿到局部变量
    // echo $total;//全局不能拿局部变量
    // echo $GLOBALS['total'];//不可以拿
    // echo $res;
    show();

    // function data($num) {
    //     echo $num;
    // }

    //循环
    for($i = 0; $i < 8; $i++) {
        echo $i.'<br>';
    }

    //字符串的方法 strlen() 得到的字符的字节数
    $str = 'abc 放假';
    echo strlen($str);//utf-8:数字、英文字母、符号、空格占一个字节；汉字占3个字节

    //mb_strlen() 获取字符串长度 js:lenght
    echo mb_strlen($str);

    //strpos()
    echo strpos($str,'b');//找到返回下标，找不到返回false
?>
