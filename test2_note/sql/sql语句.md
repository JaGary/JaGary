数据的增删改查：大小写不敏感

​            * 查

​                select 字段名,字段名 from 表名 where 条件

​                    * 查询goods表的所有数据：SELECT * FROM goods;

​                    * 查询id是3的那条商品数据：SELECT * FROM goods WHERE id=3（详情页）

​                    * 查询价格在200到400之间的所有商品：SELECT * FROM goods WHERE price BETWEEN 200 AND 400（列表页）

​                    * 对所有商品数据，升序排序：SELECT * FROM goods ORDER BY price DESC;(升序是 asc，降序desc)（列表页）

​                    * 截取前十条数据：SELECT * FROM goods LIMIT 0,10;（列表页）

​                    * 查询价格最高的十个商品数据：SELECT * FROM goods ORDER BY price DESC LIMIT 0,10;

​                    * 查询和“针织衫”有关的商品：SELECT * FROM goods WHERE name LIKE '%针织衫%'（列表页）

​                    * 查找“周杰伦”前面有三个字节的数据：SELECT * FROM goodslist WHERE title LIKE '___周杰伦'

​                    * 登陆功能：用户名和密码都要正确：select * from useinf where uesname='admin' and psw=123456 (登陆)

​            * 改

​                update 表名 set price=200 where id=8

​                    * UPDATE goods SET price=200 WHERE id=8 (购物车)

​            * 删

​                delete from 表名 where id = 5

​                    * DELETE FROM goods WHERE id=5(购物车)

​            * 插入

​                insert into 表名(字段名1，字段名2) values('malin','123456')

​                * INSERT INTO goodslist(title,price,color) VALUES('周杰','2','红色')