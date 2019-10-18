 jsonp：面试题

​        哪些标记可以引入外部资源：src或href

​            \* a ： 下载功能：href写资源,可以，但是麻烦

​            \* img：图片，可以，但是仅限图片，太局限

​            \* video : 引入视频，太局限

​            \* audio：音频，太局限

​            \* link：css文件

​            \* script:可以，传数据也很方便  jsonp就是用script实现跨域

​            \* iframe:可以，数据都是存在节点里面，提取数据很麻烦