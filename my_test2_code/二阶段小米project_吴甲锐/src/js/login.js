(function () {
    let btn = document.getElementById('btn');
    let usname = document.getElementById('usname');
    let psw = document.getElementById('psw');
    let inf = document.getElementsByClassName('inf');
    let usna = document.getElementsByClassName('usn');
    let pswe = document.getElementsByClassName('psw');
    btn.onclick = () => {
        let nameVal = usname.value.trim();
        let pswVal = psw.value.trim();
        //验证账号
        let reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;//邮箱验证
        let reg2 = /^1[3-9]\d{9}$/;//手机号码验证
        let reg3 = /^[a-zA-Z][\w\-]{5,19}$/;//用户名验证

        //验证密码
        let reg4 = /^\w{6,20}/;//数字字母或下划线
        if (nameVal && pswVal) {
            let regVal1 = reg2.test(nameVal);
            let regVal2 = reg.test(nameVal);
            let regVal3 = reg3.test(nameVal);
            let regPsw = reg4.test(pswVal);
            if (regVal1 || regVal2 || regVal3) {
                if (regPsw) {
                    inf[0].innerHTML = '可以登陆';
                    inf[0].style.color = '#58bc58';
                    //验证表单数据是否和数据库数据一样
                    ajax({
                        type: 'post',
                        url: '../api/login.php',
                        data: {
                            name: usname.value.trim(),
                            psw: psw.value.trim()
                        },
                        success: str => {
                            if (usname.value && psw.value) {
                                console.log(str);
                                if (str == 'yes') {
                                    //取cookie,判断是否登录
                                    let getname = getCookie('name');
                                    if (getname) {
                                        //存cookie
                                        alert('已经登录过，请勿重新登录');
                                    } else {
                                        alert('登录成功');
                                        location.href = 'index1.html';
                                        setCookie('name', usname.value.trim(), 7);
                                    }
                                } else {
                                    alert('用户名或密码不正确');
                                }
                            } else {
                                alert('请输入用户名和密码');
                            }
                        }
                    })
                } else {
                    inf[0].innerHTML = '密码错误';
                    inf[0].style.color = 'red';
                }
                
            } else {
                inf[0].innerHTML = '用户名或密码错误';
                inf[0].style.color = 'red';
                usna[0].style.borderColor = '#f56600';
                usname.value = '';
                psw.value = '';
            }
        } else if (nameVal) {
            pswe[0].style.borderColor = '#f56600';
            inf[0].innerHTML = '请输入密码';
            inf[0].style.color = 'red';

        } else if (pswVal) {
            usna[0].style.borderColor = '#f56600';
            inf[0].innerHTML = '请输入账号';
            inf[0].style.color = 'red';
            psw.value = '';
        } else {
            usna[0].style.borderColor = '#f56600';
            inf[0].innerHTML = '请输入账号或密码';
            inf[0].style.color = 'red';
            
        }
    }

})();