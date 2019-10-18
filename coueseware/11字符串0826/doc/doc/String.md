[TOC]

#字符串String

##了解字符串
>字符串就是一串字符，由双（单）引号括起来。

创建一个字符串
```javascript
//方式一：字面量（推荐）
var str = '城市套路深，我想回农村';

//方式二：构造函数
//PS：用new产生的变量都是引用类型的变量，也叫对象
var str = new String('我不是黄蓉，我不会武功');
```

##字符串的属性和方法
###属性
* length: 表示字符串的长度，只读（只能读取）

###字符串的获取方法
* charAt(3) //获取下标为3的字符

###字符串的查找替换方法
* indexOf/lastIndexOf(keyword [,startIndex])  从开头/尾部向后查找字符串`keyword`第一次出现的位置,如果没找到返回-1
* search(str|regExp) 查找字符串第一次出现的位置
>与indexOf的区别：search方法支持正则表达式
* match(str|regExp) 匹配字符串，返回一个数组
	index:匹配字符所在的索引
	input:表示整个字符串的引用
* replace(str|regExp,'') 替换字符串 	
	这里的替换只能执行一次，不能够进行全局匹配，如果需要全局匹配，则应使用正则表达式


###字符串的截取方法
* substring(start[,end])：不包括end所在字符，end省略表示截取到最后
* substr(start[,len])：支持负数，len为截取的数量
* slice(start[,end]) ：截取start到end(不包括end)的字符串，支持负数


###字符串分割
* split(分割符)：根据分割字符，把字符串拆分成数组

###字符串大小写转换
* toLowerCase()：转换成小写
* toUpperCase()：转换成大写

###ECMAscript5新增
* str[3]//通过下标获取
* trim()：删除前后所有空格，返回新的字符串

##编码与字符集(了解)
* charCodeAt(3) //获取下标为3的字符的ASCII(American Standard Code for * Information Interchange) == > unicode编码
* String.fromCharCode(94) //编码转换成字符

[ascii码, GBK及Unicode由来]
字符编码是计算机技术的基石，想要熟练使用计算机，就必须懂得一点字符编码的知识。


#了解正则表达式(后面再深入了解)
```
//创建方式：直接量
var reg = /,/gi 

//构造函数的方式
var reg = new RegExp('');
```

* g:表示匹配所有
* i:不区分大小写

---

**[案例]**

1. 输出所有1-100之间7的倍数和包含7的数字
2. 16进制随机背景色
3. 把留言中不文明用于替换成“*”
4. `https://www.baidu.com/s?name=laoxie&age=18&sex=male&`,  取出name, age和sex的值，并组成对象{name:'laoxie',age:18,sex:'male'}
5. 对密码进行ascii码加密和解密

**[练习]**

1. 封装一个统计字符串中每个字符个数的函数
2. 生成4位随机数字字母组合的验证码


**[作业]**

1. 注册页面的简单数据校验，并在页面上显示输入的内容
	* 用户名只能包含数字、字母和下划线，数字不可以开头，长度不低于6，不高于20
	>提示：isNaN(a)：用来判断a到底是不是非数字,返回布尔值
	* 密码必须一致
	* 输入框中要有默认提示
	* 昵称一栏要将敏感词或特殊符号自动过滤，删除不文明用语
	* 所有输入框不能为空，并数据合法，点击提交才可以正确提交表单数据

2. 已知字符串 “a,a,b,c,c,d”  编程实现以下功能。
	统计每个字符出现的次数，结果显示 a：2、b：1、c：2、d：1
	去掉重复的字符，使结果显示 abcd

---
##下节预习
* Math
* Date

