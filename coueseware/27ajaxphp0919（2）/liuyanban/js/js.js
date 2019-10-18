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
    // function getcookie(key) {
    //     let str = document.cookie;////uid=2; username=malin123
    //     console.log(str);
    //     let arr = str.split('; ');//['uid=2','username=malin123']
    //     for (let item of arr) {
    //         let arr2 = item.split('=');//['uid','2']
    //         if (key == arr2[0]) {
    //             return arr2[1];
    //         }
    //     }
    // }

    // console.log(getcookie('uid'));

    //一会拿到状态：获取cookie的账号，拿到意味着是登陆中(显示退出面板，隐藏登陆和注册面板)；反正就是退出状态；
    let login = document.getElementById('login');
    let reg = document.getElementById('reg');
    let user = document.getElementById('user');
    let userinfo = document.getElementById('userinfo');

    function update() {
        let uid = getcookie('uid');
        let name = getcookie('username');
        // console.log(uid);
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

    /*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
    */

    let logout = document.getElementById('logout');

    logout.onclick = () => {
        ajax({
            type: 'post',
            url: 'guestbook/index.php',
            data: {
                m: 'index',
                a: 'logout'
            },
            success: str => {
                // console.log(str);
                let arr = JSON.parse(str);
                // console.log(arr);
                update();
                alert(arr.message);//弹出提示信息

            }
        });
    }


    /*
	留言
	post
		guestbook/index.php
			m : index
			a : send
			content : 留言内容
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				data : 返回成功的留言的详细信息
					{
						cid : 留言id	
						content : 留言内容 
						uid : 留言人的id
						username : 留言人的名称
						dateline : 留言的时间戳(秒)
						support : 当前这条留言的顶的数量
						oppose : 当前这条留言的踩的数量
					}
				message : 返回的信息 具体返回信息
			}
    */
    let btnPost = document.getElementById('btnPost');
    let content = document.getElementById('content');

    btnPost.onclick = () => {
        if (content.value.trim()) {
            ajax({
                type: 'post',
                url: 'guestbook/index.php',
                data: {
                    m: 'index',
                    a: 'send',
                    content: content.value.trim()
                },
                success: str => {
                    // console.log(str);
                    let arr = JSON.parse(str);
                    
                    create(arr.data, 'one');
                }
            });
        }
    }

    //渲染数据：留言
    let list = document.getElementById('list');
    function create(data, type) {
        // console.log(getTimeSec(data.dateline));
        let time = getTimeSec(data.dateline);
        let str = `${time.year}-${toDb(time.mon)}-${toDb(time.date)} ${toDb(time.hours)}:${toDb(time.mins)}:${toDb(time.sec)}`;

        let html = `<dl>
                        <dt>
                            <strong>${data.username}</strong> 说 :
                        </dt>
                        <dd>${data.content} 发布时间：${str}</dd>
                        <dd class="t" data-id="${data.cid}">
                            <a href="javascript:;" class="support">顶(<span>${data.support}</span>)</a>
                            |
                            <a href="javascript:;" class="oppose">踩(<span>${data.oppose}</span>)</a>
                        </dd>
                    </dl>`;
        if (type == 'one') {
            list.innerHTML = html + list.innerHTML;
        } else if (type == 'list') {
            list.innerHTML += html;
        }

    }

    /*
            初始化留言列表
            get
                guestbook/index.php
                    m : index
                    a : getList
                    page : 获取的留言的页码，默认为1
                    n : 每页显示的条数，默认为10
                返回
                    {
                        code : 返回的信息代码 0 = 没有错误，1 = 有错误
                        data : 返回成功的留言的详细信息
                            {
                                count : 总条数	
                                pages : 页数 
                                page : 当前页
                                n : 每页显示条数
                                list : [
                                        {
                                            cid : 留言id	
                                            content : 留言内容 
                                            uid : 留言人的id
                                            username : 留言人的名称
                                            dateline : 留言的时间戳(秒)
                                            support : 当前这条留言的顶的数量
                                            oppose : 当前这条留言的踩的数量
                                        },
                                        {
                                            cid : 留言id	
                                            content : 留言内容 
                                            uid : 留言人的id
                                            username : 留言人的名称
                                            dateline : 留言的时间戳(秒)
                                            support : 当前这条留言的顶的数量
                                            oppose : 当前这条留言的踩的数量
                                        }
                                ]
                            	
                            }
                        message : 返回的信息 具体返回信息
                    }
            */
    let ipage = 1;
    let showMore = document.getElementById('showMore');
    function init() {//初始化列表
        ajax({
            type: 'get',
            url: 'guestbook/index.php',
            data: {
                m: 'index',
                a: 'getList',
                page: ipage,
                n: 3
            },
            success: str => {
                // console.log(str);
                let arr = JSON.parse(str);
                // console.log(arr.data.list);
                let listarr = arr.data.list;
                for (let item of listarr) {
                    create(item, 'list');
                }
                // create(arr.data);
                if (arr.data.pages > 1 && ipage != arr.data.pages) {
                    //更多按钮的显示
                    showMore.style.display = 'block';
                } else {
                    showMore.style.display = 'none';
                }
            }
        });
    }

    init();

    //加载更多
    showMore.onclick = () => {
        ipage++;
        init();
    }

    /*
	顶帖
	post
		guestbook/index.php
			m : index
			a : doSupport
			cid : 对应帖子的id
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
    */

    list.onclick = ev => {
        if (ev.target.className == 'support') {

            //顶贴
            ajax({
                type: 'post',
                url: 'guestbook/index.php',
                data: {
                    m: 'index',
                    a: 'doSupport',
                    cid: ev.target.parentNode.dataset.id
                },
                success: str => {
                    console.log(str);
                    let arr = JSON.parse(str);
                    console.log(arr);
                    if (arr.code == 0) {
                        //顶贴成功
                        let num = ev.target.children[0].innerHTML;
                        num++;
                        ev.target.children[0].innerHTML = num;
                    }
                }
            })
        }
        if (ev.target.className == 'oppose') {
            //顶贴
        }
    }
})();