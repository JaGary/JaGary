> document:赋予我们操作节点(元素)的能力

​                \* 节点

​                    \* 查找节点

​                        \* document.getElementById('box'); 通过id找到单个元素(不用出现重复id值)

​                        \* box.getElementsByTagName('li'); 标签查找

​                        \* box.getElementsByClassName('btn'); 类名查找

​                        \* ES5新增

​                            \* document.queryseletor()；单个

​                            \* document.querySelectorAll('#list li p'); 集合

​                        \* 特殊节点：

​                            \* document.body body节点查找

​                            \* document.title title

​                            \* document.head head

​                            \* document.documentElement html节点

​                        \* 通过关系查找：

​                            \* parentNode 查找父节点

​                            \* children 获取元素的全部子元素

​                            \* firstElementChild 获取第一个子元素

​                            \* lastElementChild 获取最后一个子元素

​                            \* previousElementSibling 获取前一个元素

​                            \* nextElementSibling 获取下一个元素

​                    \* 创建节点

​                        \* document.creatElement('li')

​                    \* 删除节点

​                        \* 父节点.removeChild(要删除的节点)

​                    \* 插入节点

​                        *　插入到末尾：父节点.appendChild(子节点)

​                        \* 插入到前面：父节点.insertBefore(新节点,参照节点)

​                    \* 复制节点

​                        \* var li = xigua.cloneNode(true) 拷贝记得和插入节点一起使用

​                \* 属性

​                    \* 属性的添加

​                    \* 属性的修改

​                    \* 属性的删除

​                    \* 属性值的获取

​                \* 内容

​                    \* 设置和获取内容

​                        \* 普通节点

​                            \* innerHTML

​                            \* innerText

​                        \* 表单

​                            \* value

​                \* 事件