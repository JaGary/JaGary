var dataitems = document.querySelectorAll('.goods-list .goods-item');
var arr = [];

for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('.goods-item .figure-img img')) {
        obj.url = ele.querySelector(' .goods-item .figure-img img').src;
    }

    if (ele.querySelector('.goods-item .title a')) {
        obj.title = ele.querySelector('.goods-item .title a').innerHTML;
    }

    if (ele.querySelector('.goods-item .price')) {
        obj.price = ele.querySelector('.goods-item .price').innerHTML;
    }
	if (ele.querySelector('.goods-item .thumbs .thumb-list img')) {
        obj.url2 = ele.querySelector('.goods-item .thumbs .thumb-list img').src;
    }
    if (ele.querySelector('.goods-item .flags img')) {
        obj.url3 = ele.querySelector(' .goods-item .flags img').src;
    }
    arr.push(obj);
}
