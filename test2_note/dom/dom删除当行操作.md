(function () {

​        //父节点.removeChild(要删除的节点)

​        var tree = document.querySelector('#tree');

​        var aBtns = document.querySelectorAll('#tree a');

 

​        for (var i = 0; i < aBtns.length; i++) {

​            aBtns[i].onclick = function () {

​                var res = confirm('您要删除我吗？');

​                if (res) {

​                    tree.removeChild(this.parentNode);//父节点：你要删除的节点的父节点

​                }

​            }

​        }