function accordion(opt) {
    var acord = {
        
    }
    Object.assign(acord, opt);

    var box = document.getElementById(acord.ele);
    // var alist = document.querySelectorAll('#box p');
    // var ulis = document.querySelectorAll('#box ul');
    var alist = box.getElementsByTagName('p');
    var ulis = box.getElementsByTagName('ul');


    //绑定索引
    // for (let i = 0; i < alist.length; i++) {

    //     alist[i].index = i; //绑定索引
    //     alist[i].isok = true; //点击事件开关
    //     alist[i].onclick = () =>{
    //         if (this.isok) {
    //             var iHeight = ulis[this.index].children.length * ulis[this.index].children[0].offsetHeight;
    //             ulis[this.index].style.height = iHeight + 'px';
    //         } else {
    //             ulis[this.index].style.height = 0;
    //         }
    //         this.isok = !this.isok;
    //     }
    // }

    // 第二种
    for (let i = 0; i < alist.length; i++) {
        isok = true; //点击事件开关
        alist[i].onclick = () =>{
            
             if(isok){
                 var iHeight = ulis[i].children.length * ulis[i].children[0].offsetHeight;
                 ulis[i].style.height = iHeight + 'px';
             }else{
                 ulis[i].style.height = 0;
             }
            isok=!isok;
        }
    }

}