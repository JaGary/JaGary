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
    let password1 = document.getElementById('password1');
    let btnReg = document.getElementById('btnReg');
    let reg = document.getElementById('reg');
    let verifyUserNameMsg = document.getElementById('verifyUserNameMsg');
    let user = document.getElementById('user');
    let isok = false;

    /*
	验证用户名
    */

    username1.onblur = () => {
        ajax({
            type: 'get',
            url: 'api/username.php',
            data: {
                type: 'checkname',
                username: username1.value.trim()
            },
            success: str => {
                if (username1.value && str == 'yes') {
                    verifyUserNameMsg.innerHTML = '可以注册';
                    verifyUserNameMsg.style.color = '#58bc58';
                    isok = true;
                } else if (str == 'no') {
                    verifyUserNameMsg.innerHTML = '该名字已被使用';
                    verifyUserNameMsg.style.color = 'red';
                    isok = false;
                }

            }

        })
    }

    //点击注册
    btnReg.onclick = () => {
        ajax({
            type: 'post',
            url: 'api/reg.php',
            data: {
                password: password1.value.trim(),
                username: username1.value.trim(),
            },
            success: str => {
                if (password1.value && username1.value) {
                    if (str == 'yes') {
                        alert("注册成功请登录");
                        reg.style.display = 'none';
                        username1.value = '';
                        password1.value = '';
                    } else {
                        alert("注册失败");
                    }
                } else {
                    alert("请注册");
                }
            }
        })
    }


    //登录
    let btnLogin = document.getElementById('btnLogin');
    let login = document.getElementById('login');
    let username2 = document.getElementById('username2');
    let password2 = document.getElementById('password2');
    let userinfo = document.getElementById('userinfo');

    btnLogin.onclick = () => {
        ajax({
            type: 'post',
            url: 'api/login.php',
            data: {
                name: username2.value.trim(),
                psw: password2.value.trim()
            },
            success: str => {
                if (username2.value && password2.value) {
                    if (str == 'yes') {
                        alert("登录成功");
                        setcookie('name', username2.value, 2);
                        user.children[0].style.display = 'block';
                        login.style.display = 'none';
                        reg.style.display = 'none';
                        userinfo.innerHTML = username2.value;
                        username2.value = '';
                        password2.value = '';
                    } else {
                        alert("请确认用户名和密码是否正确");
                    }
                } else {
                    alert("请输入用户名和密码");
                }
            }
        });
    };

    // let uid = getcookie('name');
    // // let usname = getcookie('value');
    // console.log(uid);
    // // console.log(usname);
    function getcook() {
        let name2 = getcookie('name');
    }
    getcook();



    //留言内容渲染
    let content = document.getElementById('content');
    let btnPost = document.getElementById('btnPost');
    let list = document.getElementById('list');
    let logout = document.getElementById('logout');

    
    btnPost.onclick = () => {
        if (content.value.trim()) {
            ajax({
                type: 'get',
                url: 'api/cont.php',
                data: {
                    cont: content.value.trim(),
                    deline: 'str2',
                    id: 'name2'
                },
                success: str => {
                    setcookie('cont', content.value);
                    let nam = getcookie('name');
                    if (nam) {
                        creat(str);
                        content.value = '';
                        init(str);
                    } else {
                        alert("请先登录");
                    }
                }
            })
        }
    }


    function creat(str) {
        let name2 = getcookie('name');
        let time = getTime(str);
        let str2 = `${time.years}-${time.months}-${time.days} ${time.hours}:${time.mins}:${time.secs}`;
        
        let html = `<dl>
                <dt>
                    <strong>${name2}</strong> 说 :
                </dt>
                <dd>${str} 发布时间：${str2}</dd>
                <dd class="t">
                    <a href="javascript:;" class="support">顶(<span>0</span>)</a>
                    |
                    <a href="javascript:;" class="oppose">踩(<span>0</span>)</a>
                </dd>
            </dl>`;
        let html2 = list.innerHTML;
        list.innerHTML = html + html2;
    };
   

    //退出
    
    logout.onclick = () => {
        setcookie('name', '', -1);
        creat();
        list.innerHTML = '';
        userinfo.innerHTML = '';
        content.value = '';

        login.style.display = 'block';
        reg.style.display = 'block';
        logout.style.display = 'none';
    }


    //点击加载更多
    let showMore = document.getElementById('showMore');

    function init(str) {
        let n = 3;
        let dls = list.getElementsByTagName('dl');
        let ipage = dls.length / n;
        if (dls.length > 3) {
            showMore.style.display = 'block';
        } else {
            showMore.style.display = 'none';
        }
    };

    //点击加载更多
    showMore.onclick = () => {
        ajax({
            type: 'post',
            url: 'api/cont.php',
            data: {
                // cont: content.value.trim(),
                // deline: 'str2',
                // uid : 'name2'
            },
            success: str => {
                creat(str);
                init(str);
                
            }
        })
    };

    //顶和踩
    //第一种
    list.onclick = ev => {
        let num1 = ev.target.children[0].innerHTML;
        if (ev.target.className == 'support') {
            //顶
            num1++;
            ev.target.children[0].innerHTML = num1;

        } else if (ev.target.className == 'oppose') {
            //踩
            num1++;
            ev.target.children[0].innerHTML = num1;
        }
    }

    //第二种
    // list.onclick = ev => {
    //     if (ev.target.className == 'support') {
    //         ajax({
    //             type: 'get',
    //             url: ''
    //         })
    //     }
    // }


})();