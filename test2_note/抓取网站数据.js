var dataitems = document.querySelectorAll('.brick-list .brick-item');
var arr = [];

for (var ele of dataitems) {
    var obj = {};
    if (ele.querySelector('.brick-item .figure-img img')) {
        obj.url = ele.querySelector(' .brick-item .figure-img img').src;
    }

    if (ele.querySelector('.brick-item .title')) {
        obj.title = ele.querySelector('.brick-item .title').innerHTML;
    }

    if (ele.querySelector('.brick-item .price .num')) {
        obj.price = ele.querySelector('.brick-item .price .num').innerHTML;
    }

    if (ele.querySelector('.brick-item .desc')) {
        obj.desc = ele.querySelector('.brick-item .desc').innerHTML;
    }
    arr.push(obj);
}
