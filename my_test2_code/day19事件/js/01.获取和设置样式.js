//封装获取样式和设置样式
/*获取样式的方法：获取到的时候优先级最高的样式
    * getComputedStyle(ele,pseudo).属性名 （标准）
        ele:要获取样式的元素
        pseudo:伪元素样式字符(可选)，可获取伪元素样式
    * ele.currentStyle.属性名 （IE8-）
*/
function changeCss() {
    if (arguments.length == 2) { //获取样式
        if (getComputedStyle(arguments[0], false)) {
            //标准浏览器
            var attr = arguments[1];//添加进来实参的下标
            return getComputedStyle(arguments[0], false)[attr];
        } else {
            //非标准浏览器
            //IE678
            var attr = arguments[1]; //添加进来实参的下标
            return arguments[0].currentStyle[attr];
        }
    } else if (arguments.length == 3) {//设置样式
        var attr = arguments[1]; //添加进来实参的下标
        arguments[0].style[attr] = arguments[2];  // box.style[display] = none;
    }
}