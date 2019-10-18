(() => {
    let country = document.querySelector('.country');
    let inpu = document.querySelector('.country input');
    let listCount = document.querySelector('.list_count');
    let listCount2 = document.querySelector('.list_count2');
    let alist = document.querySelectorAll('.list_count li');
    let alist2 = document.querySelectorAll('.list_count2 li');
    let conCode = document.querySelector('.con');
    let telCode = document.querySelector('#tel_code');
    let inf2 = document.querySelector('.inf2');
    let regBtn = document.querySelector('#reg_btn');
    let isok = true;//开关
    let isok2 = true;
    

    //列表显示隐藏
    country.onclick = () => {
        if (isok == true) {
            listCount.style.display = 'block';
        } else {
            listCount.style.display = 'none';
        }
        isok = !isok;
    }
    
    //选择国家
    for (let i = 0; i < alist.length; i++){
        alist[i].onclick = () => {
            for (let j = 0; j < alist.length; j++){
                listCount.style.display = 'none';
                inpu.value = alist[i].children[0].innerHTML;
                conCode.children[0].innerHTML = alist[i].children[1].innerHTML;
            }
        }
    }

    conCode.onclick = () => {
        if (isok2 == true) {
            listCount2.style.display = 'block';
        } else {
            listCount2.style.display = 'none';
        }
        isok2 = !isok2;
    }

    //国家区块号选择
    for (let i = 0; i < alist2.length; i++) {
        alist2[i].onclick = () => {
            for (let j = 0; j < alist2.length; j++) {
                listCount2.style.display = 'none';
                conCode.children[0].innerHTML = alist[i].children[1].innerHTML;
            }
        }
    }


    //手机号码正则验证
    // telCode.onblur = () => {
    //     let codeVal = telCode.value.trim();
    //     let reg = /^1[3-9]\d{9}$/; //手机号码验证
    //     if (codeVal) {
    //         let regVal = reg.test(codeVal);
    //         if (regVal) {
    //             inf2.innerHTML = '可以注册';
    //             inf2.style.color = '#58bc58';
    //         } else {
    //             inf2.innerHTML = '手机号码错误';
    //             inf2.style.color = 'red';
    //         }
    //     } else {
    //         inf2.innerHTML = '请输入手机号';
    //         inf2.style.color = 'red';
    //     }
    // }
   

   
    
        
     
    
})();