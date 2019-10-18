localstorage(永久的)、sessionstorage(临时的)

​            * setItem(key,val)

​            * getItem(key)

​            * removeItem(key)

 

​        cookie和localstorage(永久的)、sessionstorage(临时的)的区别：

​            * cookie需要网络环境才能使用，storage不需要网络

​            * cookie限制个数，大概50个，会话级别

​            * localstorage是永久存储，sessionstorage临时存储

​            * 都是键值对的存储方式：对结构化数据存储就不够灵活

​            * cookie和localstorage都可以实现页面数据共享，sessionstorage不能实现页面共享

​            * 只要是存在浏览器的，都是有存储容量限制的；

​        

​        应用：

​            * 用cookie实现用户的登陆状态判断

​            * 保留7天免登陆：cookie设置7天后才失效

​            * 足迹：浏览过的商品

​                * 未登录的时候：可以把浏览的记录存在本地文件或浏览器里面(localstorage/cookie)

​                * 登陆的时候：登陆的就存在数据库里面

​            * 购物车：

​                * 未登录：存在本地，但是要购买的时候，提示登陆，登陆就把本地数据转存数据库中

​                * 登陆：直接存数据库

​            * 数据暂存：

​                * 注册：数据过多的时候，做个临时存储

 

​        操作：

​            * 增：改

​            * 删

​            * 查

 

​        语法：document.cookie = name=value[;expires=date][;path=路径][;domain=域名]

​            * domain=http://www.baidu.com 允许百度访问该页面的cookie

​        数据存储：

​            * 存在本地硬盘：json文件(这种方式读取不够灵活)

​            * 存在浏览器：cookies(会话级别。关闭浏览器就消失)/localstorage(永久存储)/sessionstorage(会话级别。关闭浏览器就消失) ：容量很小，存成键值对形式，结构的数据存储不够灵活

​            * 存在数据库：mysql(免费的)：容量大，存储结构化数据很方便，读取简单（写好sql语句即可）