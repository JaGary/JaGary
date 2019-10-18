BOM对象：（Browser Object Model ）浏览器对象类型，赋予我们操控窗口的能力：弹窗、窗口的关闭打开、后退、复制、粘贴、前进



window.onload = function () {

​        //等页面元素都加载完了，再执行，延迟代码的执行时间，防止找不到元素

​    }

window:(BOM最核心对象，是很多子对象的顶层对象)

​	属性：

​		* 浏览器窗口尺寸  innerWidth / innerHeight ,//表示浏览器窗口“可视区域”尺寸

​			outerWidth/outerHeight //表示浏览器窗口的尺寸

​		*滚动相关

​			*scrollX/scrollY  //获取浏览器滚动条滚动过的距离

​	方法：

​		* scrollTo(x,y)  //指定滚动位置

​		* scrollBy(xnum,ynum)  //设置基于当前位置滚动的距离，可以为负数

​	事件：

​                        * onload //页面资源全部加载完成后触发这个事件  加载图片：预加载效果

​                        * onscroll//窗口滚动条滚动时触发

​                        * onresize //窗口大小改变时触发

​	子对象：

​		* history ---历史管理

​                            * length 记录页面跳转的次数

​                            * back() 后退，回到上一页

​                            * forward() 前进，回到下一页

​                            * go() 可以任意跳转到历史记录，可以是正负数

​		location ---- 获取网址

​			locatiob.href  ---获取或设置网址

​				获取：当前页面完整网址

​				设置：跳转到该url页面，传参到页面

​			search 

​		* 方法

​			reload() 重新加载当前文档，带参数true表示不使用缓存刷新页面



找节点：

document.head     找到head

​        document.body    找body

​        document.title    找title

​        document.documentElement   html节点



window:尽量不要写全局变量，可以写在自调用函数里

​	注意：

​		* 定义在全局环境下的变量都会成为widow对象的属性；

​		* 把变量定义在函数体下，可以有效减少全局变量下的变量，避免污染环境。

​		* window对象可以在代码中省略，如window.alert( )可以写成alert( );

​		* 在函数内部不用var声明的变量会成为全局变量，即window对象的属性；

​		* 通过var在全局作用域下声明的变量用delete无法删除。

​	如果把变量写在全局作用域下：1、不被释放内存，浪费内存  2、污染全局环境