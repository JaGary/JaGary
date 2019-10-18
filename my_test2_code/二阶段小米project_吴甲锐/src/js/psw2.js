(function () {
    let password2 = document.querySelector('#password');
    // let checkBtn = document.querySelector('#check_btn');
    let infom = document.querySelector('.infom');

    password2.onblur = () => {
        let pswValue = password2.value.trim();
        let reg = /^\w{6,18}$/;
        if (pswValue) {
            let regVal = reg.test('pswValue');
            if (regVal) {
                infom.innerHTML = '密码符合';
                infom.style.color = '#58bc58';
            } else {
                infom.innerHTML = '密码不符合';
                infom.style.color = 'red';
            }
        } else {
            infom.innerHTML = '请输入正确的密码';
            infom.style.color = 'red';
        }
    }
    
})();