[TOC]
#原型链
实例与Object原型对象之间的链条称为原型链

##属性访问规则（原型搜索机制）
1. 读取实例对象的属性时，先从实例对象本身开始搜索。如果在实例中找到了这个属性，则返回该属性的值；
2. 如果没有找到，则继续搜索实例的原型对象，如果在原型对象中找到了这个属性，则返回该属性的值
3. 如果还是没找到，则向原型对象的原型对象查找，依此类推，直到Object的原型对象（最顶层对象）；
4. 如果再Object的原型对象中还搜索不到，返回undefined；


###重置原型对象
重置原型对象，可以一次性给原型对象添加多个方法，但切断了与原来原型对象的联系
```javascript
function Popover(){}
Popover.prototype = {
    show:function(){},
    hide:function(){}
}
Object.defineProperty(Popover.prototype,'constructor',{
    configurable:true,
    value:Popover
})
```

* 注意覆盖问题
* 注意识别问题

###内置原型对象
使用内置原型可以给已有构造函数添加方法

* 数组/字符串/数字等方法调用原理
* 扩展内置方法


##对象属性的遍历与判断
* for…in：遍历对象中的所有可枚举属性, 无论该属性存在于实例中还是原型中
* in：只要通过对象能够访问到属性就返回true, 无论该属性存在于实例中还是原型中
```javascript
if(name in s1){

}
```
* 对象.hasOwnProperty(属性)：检测一个`属性`是存在于`对象`本身中
    - 返回true，说明属性存在对象中
    - 返回false，说明属性不存在或在原型中
>检测一个属性是否存在于原型中：!obj.hasOwnProperty(name) && (name in obj)


#继承
继承是面向对象中一个非常重要的特征。指的是：子类继承父类的属性和方法。
>我们可以通过继承的方式, 在父类的属性和方法基础上, 让子类也拥有这些属性和方法, 并可以扩展。

##继承的好处: 
1. 子类拥有父类所有的属性和方法（代码复用）；
2. 子类可以扩展自己的属性和方法（更灵活）；
3. 子类可以重写父类的方法

##继承方式

###原型链继承
* 核心：拿父类实例来充当子类原型对象

* 缺点：
    - 无法继承构造函数中的属性
    - 创建子类实例时，无法向父类构造函数传参
    - 原型对象中存在多余的属性

###借用构造函数
* 核心：借父类的构造函数来增强子类实例，相当于把父类的实例属性`复制`一份给子类实例

    - call：
        格式：`父类构造函数.call(子类实例,参数1,参数2,参数3...)`
    - apply：
        格式：`父类构造函数.apply(子类实例,[参数1,参数2,参数3...])`
    >call与apply的唯一区别：传参方式不同，call多个参数，apply只有两个参数，第二个参数为数组

    ```javascript
        //aplly用法：借用方法
        var arr = [20,2,40,33,21,8,22,46,32]
        Math.max.apply(null,arr)
    ```

###组合继承
由于以上继承方法的缺点，实际开发中不可能单纯的只使用一种继承方法，而是利用它们的优点，规避它们的缺点，所以就有了组合继承法

* 继承属性：借用构造函数
>只在构造函数中定义属性
* 继承方法：原型链继承
>把所有的方法写入原型对象

>组合继承是最常用的继承模式。

* 缺点（原型链继承法的缺点）：
    - 在原型对象中生成多余的属性
    - 多次执行父类构造函数

###原型式继承
* 核心：先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时构造函数的一个新实例
>解决原型链继承法的缺点：生成多余的属性

```javascript
    function object(o){
        function F(){}
        F.prototype = o;
        return new F();
    }
```

* ES5版本的原型式继承：Object.create()

###寄生组合继承法
>完美的继承方法

* 核心：
    - 继承属性：借用构造函数
    - 继承方法：原型式继承

#ES6中的继承
###Class定义类
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类
```javascript
//定义类
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
         return `我叫${this.name},今年${this.age}岁`;;
    }
}
```

* 写在类里面的方法实际是给Person.prototype添加方法
* constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。如果没有constructor方法，则得使用默认的constractor方法

###extends继承

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
 
class Man extends Person {
    constructor(name, age, gender) {
        //this.gender = gender; // 报错
        super(name, age);
        this.gender = gender; // 正确
    }
}            
```

* 子类继承了父类，在子类构造函数中必须调用super方法。
* 子类的constructor方法没有调用super之前，不能使用this关键字，否则报错，而放在super方法之后就是正确的。

###静态方法
如果在一个方法前，加上static关键字，这就称为“静态方法”
```javascript
class Person {
    constructor(){
        this.name = 'laoxie',
        this.age = 18;
    }
    static getInfo(){
        return this.name
    }
    say(){
        console.log(`Hello everyone, my name is ${this.name}, I'm ${this.age} years old`)
    }
}
class Man extends Person {}
```

* 静态方法方法不会被实例继承，而是直接通过类来调用`Person.getInfo()`
* 父类的静态方法，可以被子类继承`Man.getInfo()`

---

**[案例]**

1. 扩展原生js方法
    * 兼容字符串trim方法
    * 获取ascii码的方法
    * 反编译ascii码的方法


#闭包
要理解闭包，先要理解javascript中的变量访问规则，一句话：“**变量可以往外查找却不能往函数内查找**”

但出于种种原因，我们有时候需要得到函数内的局部变量。可是是，根据变量访问规则，这是办不到的，只有通过变通方法才能实现：**在函数的内部定义一个函数并返回**，这，就形成了闭包。
```javascript
    function outer(){
        var num=10;
        function inner(){
            num++
            console.log(num);
        }
        return inner;
    }
    //console.log(num); //无法直接访问函数内部的num

    var closure = outer();
    closure();//11（num在原来基础上+1）
    closure();//12（num在原来基础上+1）
    closure();//13（num在原来基础上+1）
```

闭包是这样一种机制: 函数嵌套函数, 利用内部函数可以引用外部函数的参数和变量的特性把内部函数返回，让参数和变量不会被垃圾回收器收回. 


##垃圾回收机制(garbage collection)
* 自动完成
* 浏览器定期扫描内存,并清理无引用（标记可清除）对象;



##闭包的好处
1. 可在外部操作函数内部的变量
2. 让变量长期驻留内存以便下次使用


##结论
闭包是指有权访问另一函数作用域中的变量的函数

>注意：由于闭包会携带包含它的作用域(运行环境)，因此会比其他函数占用更多内存，过度使用闭包可能会造成性能问题。

**[案例]**

* 点击按钮打印当前索引值
* tab标签切换