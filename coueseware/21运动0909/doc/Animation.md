[TOC]

#动画Animation

##运动原理
不断改变对象的属性产生动画的效果

##运动分类
###匀速运动
速度保持不变的运动

###加速运动
速度不断增加的运动

###减速运动
速度不断减小的运动

###抛物线运动
水平方向速度不断减小，垂直方向速度不断增加

###圆周运动
我具体在以某点为圆心半径为r的圆周上的运动叫“圆周运动”

###缓冲运动
一开始速度很快，然后慢下来，直到停止


##盒模型
* offset
    - offsetTop: 当前元素离<定位父级>元素顶部的距离。
    - offsetLeft: 当前元素离<定位父级>元素左边的距离。
    >以上两个属性如果没定位的父级，则相对于根元素html的距离
    - offsetWidth: 当前元素的宽度（border + padding + content）
    - offsetHeight: 当前元素的高度（border + padding + content）
* client
    - clientTop: 当前元素上边框的宽度（border-top）
    - clientLeft: 当前元素左边框的宽度（border-left）
    - clientWidth: 当前元素宽度（padding + content，不包括border）
    - clientHeight: 当前元素高度（padding + content，不包括border）
* scroll
    - scrollTop: 当前元素<垂直滚动条>滚动过的距离
    - scrollLeft: 当前元素<水平滚动条>滚动过的距离
    - scrollWidth: 当前元素滚动宽度（不包括边框）
    - scrollHeight: 当前元素滚动高度（不包括边框）
        + PS: scrollWidth,scrollHeight浏览器间有兼容性问题

    >获取页面滚动条的距离
        * window（通用）
        * documentElement （chrome和IE的quirks mode兼容模式） 
        * body（FF、Opera和IE）
    滚动到可视区域：
    Element.scrollIntoView()  

**[案例]**

* 飞翔的小鸟（匀速）
* 篮球自由落体效果（加速，抛物线）
* 刹车效果（减速）
* 地球公转（圆周）
* 返回顶部效果（缓冲）
* 图片的淡入淡出
* 障碍物反弹效果
* 文字向上滑动效果


**[练习]**

1. 篮球的重力回弹
2. 火箭升空（先快后慢）
3. 竖排导航效果


**[作业]**

* 垂直滚动动轮播图（缓冲运动）

**[扩展]**

1. 缓冲运动函数的封装
    * 支持多属性同时运动
    * 支持回调函数


#动画Animation2

##封装动画函数
封装一个可以实现所有动画的函数animate

##链式运动
动画的排队效果，上一个动画完成后才执行下一个动画效果

##无缝滚动
1. 复制初始状态下可见区域内的图片并放到最后
>可见区域有几张就复制几张
2. 当复制的图片都滚动到可见区域时，立即把图片定位到初始状态

[案例]

* 折叠菜单栏
* 水平无缝滚动
* 评分特效
* 自适应瀑布流


**[练习]**

1. 无缝幻灯片切换
2. 淡入淡出幻灯片

**[作业]**

1. 购物车添加商品（抛物线）

**[扩展]**

1. 放大镜效果

---
##下节预习
* 面向对象







