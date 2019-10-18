> 总结学习方法:

href  "###" 和 javascript:; 都可以让a标签点击后不刷新页面 

​                \* 写案例的时候：

​                    \* 要不要获取值：

​                        \* 普通节点：var val = 节点.innerHTML;

​                        \* 表单节点：var val = 节点.value;

​                    \* 要不要事件：什么时候才起效果

​                        var val = 节点.innerHTML;//可能拿不到值

​                        var val = 节点.value;

​                        节点.onclick = function () {

​                            var val = 节点.innerHTML;//点击才获取

​                        }

​                    \* 要不要显示：

​                        \* 普通节点：节点.innerHTML = html;

​                        \* 表单节点：节点.value = val;

​                    \* 要不要封装函数:代码可读性强、复用

​                        function show(num) {

​                            //处理过程

​                        }

 

​                        show(3);

​                    \* 处理过程：

​                        \* 求阶乘：给一个数n=5；输出：5*4*3*2*1

​                            \* 初始值：res = 1；

​                            \* 循环生成有规律连续的数据：

​                                for(var i=1;i<=n;i++){

​                                    res *= i;

​                                }

​                            \* 计算结果返回：return res;

 

​                            function faci(n) {

​                                //计算任意数的阶乘

​                                var res = 1;

​                                for(var i=1;i<=n;i++){

​                                    res *= i;

​                                }

​                                return res;

​                            }

 

​                            var num = faci(5);//求5的阶乘

 

​                        \* 求1-100之间的偶数和：

​                            \* 初始：res = 0;

​                            \* 循环：

​                                for(var i = 1;i <=100; i++) {

​                                    if(i % 2 == 0) {

​                                        //偶数

​                                        res += i;

​                                    }

​                                }

​                            \* 返回结果

 

​                        \* 生成四位随机验证码：0-9数字

​                            \* 初始化：var str = '';

​                            \* 循环4次：

​                                for(var i = 0; i < 4; i++) {

​                                    var ranNum = parseInt(Math.random() * 10);//0-9

​                                    str += ranNum;

​                                }

​                    \* bug经验：

​                        \* 大小写问题：单词不对

​                        \* 节点找不到：

​                            \* js写在body上面，节点未生成

​                            \* id对不上

​                            \* 集合没有用下标

​                        \* 返回值放在for循环里面

​                        \* 运算：两边都是字符串(记得转换数据类型)

​                        \* for循环和if嵌套不清醒

​                            \* 把1-100之间的偶数相加

​                                \* 先 生成数据：for

​                                \* 再判断是不是偶数：if

​                            \* 点击第一次：生成一组数据，再点击一次：清空数据

​                                \* 准备开关 var istrue = true;

​                                var str = '';

​                                btn.onclick = function() {

​                                    if(istrue) {

​                                        //真：生成一组数据

​                                        for(var i = 1;i <= 5; i++) {

​                                            str += i;

​                                        }

​                                    }else{

​                                        str = '';

​                                    }

​                                    istrue = !istrue;//取反

​                                    istrue != istrue;//不等于

​                                    istrue ! = istrue;//啥都不是

​                                }

 