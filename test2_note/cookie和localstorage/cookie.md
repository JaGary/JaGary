```
cookie:
            * 必须是环境方式才能使用：有通信
            * 存储在浏览器里面的数据
                * 每个域名只能存储50个(不同的浏览器略有不同)https://www.cnblogs.com/phpfeng/p/9261704.html
                * 会话级别的数据存储：关掉浏览器就没有了(默认效果会话级别)
                * 纯文本(字符串格式)存在硬盘中

        操作：
            * 增：改
            * 删
            * 查

        语法：document.cookie = name=value[;expires=date][;path=路径][;domain=域名]
            * domain=http://www.baidu.com 允许百度访问该页面的cookie

        数据存储：
            * 存在本地硬盘：json文件(这种方式读取不够灵活)
            * 存在浏览器：cookies(会话级别。关闭浏览器就消失,环境打开才能使用,页面数据共                           享)/localstorage(永久存储，不需要环境，页面数据共享)/ssessiontorage(会话级别。关闭浏览               器就消失，不需要环境，不能页面数据共享) ：容量很小，存成键值对形式，结构的数据存储不够灵活
            * 存在数据库：mysql(免费的)：容量大，存储结构化数据很方便，读取简单（写好sql语句即可）
```



