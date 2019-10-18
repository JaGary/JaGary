//选项卡
/*需求：选项卡的实现

    知识点：
        * document.getElementsByClassName() 通过类名找到元素，集合
        * 添加样式：节点.style
        * 添加属性：节点名.属性名 (除了class之外)
        * 添加类名：节点名.className*/
function tabControl(con) {

    var tabCon = {
        //默认参数
        inpVal: ['新闻', '体育', '娱乐', '财经'], //value值
        con: ['新闻', '体育', '娱乐', '财经'] //内容
        
    }

    Object.assign(tabCon, con);
    
    var list = document.getElementById(tabCon.ele);

    var strObj1 = tabCon.inpVal.map(function (item) {
        return `<input type="button" value="${item}">`
    }).join('');

    var strObj2 = tabCon.con.map(function (item) {
        return `<div class="con">${item}</div>`
    }).join('');

    list.innerHTML = strObj1 + strObj2;//渲染

    //找节点
    var abtns = list.getElementsByTagName('input');
    var acons = list.getElementsByClassName('con');

    //遇到数组少不了循环
    for (var i = 0; i < abtns.length; i++) { 
        abtns[i].index = i; //添加索引(自定义属性) abtns[0].index = 0；abtns[1].index = 1
        abtns[i].onclick = function () { 
            //排他
            for (var j = 0; j < abtns.length; j++) {
                abtns[j].className = ''; //全部都先清空类名
                acons[j].style.display = 'none';
            }
            this.className = 'active'; //每一次都应该只有一个是高亮的
            
            acons[this.index].style.display = 'block';
        }
    }

}

