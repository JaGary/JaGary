(function () {
    /*
        需求：留言板
            用户名验证；
            注册
            登陆
            退出
            发帖
            顶贴
            踩贴
            点击加载更多
    */

    let username1 = document.getElementById('username1');
    let verifyUserNameMsg = document.getElementById('verifyUserNameMsg');
    let btnReg = document.getElementById('btnReg');
    let password1 = document.getElementById('password1');

    /*
        验证用户名
        请求方式：get
            接口路径：guestbook/index.php
            参数：
                m : index
                a : verifyUserName
                username : 要验证的用户名
            返回数据：
                {
                    code : 返回的信息代码 0 = 没有错误，1 = 有错误 
                    message : 返回的信息具体返回信息
                }
    */
    username1.onblur = () => {
        ajax({
            type: 'get',
            url: 'guestbook/index.php',
            data: {
                m: 'index',
                a: 'verifyUserName',
                username: username1.value.trim()
            },
            success: str => {
                // console.log(str);
                let arr = JSON.parse(str);
                
                if (arr.code) {
                    //1 2有错误
                    verifyUserNameMsg.style.color = 'red';
                } else {
                    //0:没有错误
                    verifyUserNameMsg.style.color = '#58bc58';
                }
                verifyUserNameMsg.innerHTML = arr.message;
                console.log(arr);
            }
        });
    }

    /*
        用户注册
        get/post
            guestbook/index.php
                m : index
                a : reg
                username : 要注册的用户名
                password : 注册的密码
            返回
                {
                    code : 返回的信息代码 0 = 没有错误，1 = 有错误
                    message : 返回的信息 具体返回信息
                }
        */
    let username2 = document.getElementById('username2');
    let password2 = document.getElementById('password2');
    let btnLogin = document.getElementById('btnLogin');

    btnReg.onclick = () => {
        ajax({
            type: 'post',
            url: 'guestbook/index.php',
            data: {
                m: 'index',
                a: 'reg',
                username: username1.value.trim(),
                password: password1.value.trim()
            },
            success: str => {
                // console.log(str);
                let arr = JSON.parse(str);
                // console.log(arr);
                alert(arr.message);//弹出提示信息
                //清空和聚焦
                username1.value = '';
                password1.value = '';
                verifyUserNameMsg.innerHTML = '';
                username2.focus();
            }
        });
    }

    /*
        用户登陆
        get/post
            guestbook/index.php
                m : index
                a : login
                username : 要登陆的用户名
                password : 登陆的密码
            返回
                {
                    code : 返回的信息代码 0 = 没有错误，1 = 有错误
                    message : 返回的信息 具体返回信息
                }
        */

    btnLogin.onclick = () => {
        ajax({
            type: 'post',
            url: 'guestbook/index.php',
            data: {
                m: 'index',
                a: 'login',
                username: username2.value.trim(),
                password: password2.value.trim()
            },
            success: str => {
                // console.log(str);
                let arr = JSON.parse(str);
                console.log(arr);
                update();
                alert(arr.message);//弹出提示信息

            }
        });
    }


    //获取cookie
    // let str = document.cookie;
    // console.log(str);//uid=2; username=malin123 php接口已经在你登陆的时候存到cookie
    function getcookie(key) {
        let str = document.cookie;////uid=2; username=malin123
        console.log(str);
        let arr = str.split('; ');//['uid=2','username=malin123']
        for (let item of arr) {
            let arr2 = item.split('=');//['uid','2']
            if (key == arr2[0]) {
                return arr2[1];
            }
        }
    }

    // console.log(getcookie('uid'));

    //一会拿到状态：获取cookie的账号，拿到意味着是登陆中(显示退出面板，隐藏登陆和注册面板)；反正就是退出状态；
    let login = document.getElementById('login');
    let reg = document.getElementById('reg');
    let user = document.getElementById('user');
    let userinfo = document.getElementById('userinfo');

    function update() {
        let uid = getcookie('uid');
        let name = getcookie('username');
        console.log(uid);
        if (uid) {
            //登陆中
            user.style.display = 'block';
            login.style.display = 'none';
            reg.style.display = 'none';
            userinfo.innerHTML = name;
        } else {
            //登出中
            user.style.display = 'none';
            login.style.display = 'block';
            reg.style.display = 'block';
            userinfo.innerHTML = '';
        }
    }

    update();//进入页面就应该显示面板：根据登陆状态来显示
})();