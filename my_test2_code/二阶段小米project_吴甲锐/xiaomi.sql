/*
Navicat MySQL Data Transfer

Source Server         : mydata
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : xiaomi

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2019-10-13 12:33:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart_goods
-- ----------------------------
DROP TABLE IF EXISTS `cart_goods`;
CREATE TABLE `cart_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `urlimg` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pricecart` varchar(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart_goods
-- ----------------------------

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `info` varchar(255) DEFAULT NULL,
  `price` decimal(65,0) DEFAULT NULL,
  `imgurl1` varchar(255) DEFAULT NULL,
  `imgurl2` varchar(255) DEFAULT NULL,
  `imgurl3` varchar(255) DEFAULT NULL,
  `imgurl4` varchar(255) DEFAULT NULL,
  `color1` varchar(255) DEFAULT NULL,
  `color2` varchar(255) DEFAULT NULL,
  `smallimg1` varchar(255) DEFAULT NULL,
  `smallimg2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('1', '九号平衡车 改装套件（不含平衡车）', '纯粹驾驶乐趣 / 赛车式运动外观 / 多重安全保障 / 车身长度4挡调节', '2999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.73552638.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.67242583.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.67767333.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.66862418.jpg', '白色', null, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.73552638.jpg', null);
INSERT INTO `detail` VALUES ('2', '九号平衡车燃动版', '铝合金停车支架 / 可折叠拉杆 / 越野风格外观 / 22km 长续航', '2299', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.98522616.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.86159323.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.99199196.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.94834680.jpg', '黑色', null, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.98522616.jpg', null);
INSERT INTO `detail` VALUES ('3', '米家九号平衡轮', '双脚分离式设计 / 三步轻松上手 / 无需穿脱，踩上就走 / 便携提手，拎着方便', '999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.06921164.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.07883866.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.20731300.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.12839548.jpg', '灰白', null, 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.06921164.jpg', null);

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `url1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `url2` varchar(255) DEFAULT NULL,
  `url3` varchar(255) DEFAULT NULL,
  `url4` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.73552638.jpg', '九号平衡车 改装套件 白色', '2999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560764684.73552638.jpg', '', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.98522616.jpg', '九号平衡车燃动版 米家定制 黑色', '2299', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560510426.98522616.jpg', '', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.06921164.jpg', '米家九号平衡轮 灰白', '3999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560056808.06921164.jpg', '', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553910315.37056871.jpg', '米家头盔护具套装 黑色', '199', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1553910315.37056871.jpg', null, null);
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/b82d9d1c-a6d8-90eb-cac1-837968915a9d.jpg', '九号平衡车Plus 停车支架 银色', '2899', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/b82d9d1c-a6d8-90eb-cac1-837968915a9d.jpg', null, null);
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/e6642d1d-3256-9c62-f710-c0cfe87129a6.jpg', '九号平衡车Plus 载物筐 黑色', '3998', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/e6642d1d-3256-9c62-f710-c0cfe87129a6.jpg', null, null);
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/ac4b80c2-fd68-e50a-3930-32da901784c0.jpg', '小米云台相机 白色', '5998', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/ac4b80c2-fd68-e50a-3930-32da901784c0.jpg', '', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png', '九号平衡车 Plus 白色', '3499', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png', '', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/6a66cc5a-648c-c5cc-d16e-da4f57d14243.jpg', '小米米家电动滑板车 白色', '1999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/768992ca-4136-92f1-244a-0194a81a6360.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/6a66cc5a-648c-c5cc-d16e-da4f57d14243.jpg', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1qcVjBmZT1RXrhCrK.jpg', '九号护具套装 黑色', '169', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1qcVjBmZT1RXrhCrK.jpg', null, null);
INSERT INTO `goodlist` VALUES ('https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1zoZ_Bybv1RXrhCrK.jpg', '九号平衡车 黑色', '1999', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1xVE_Bydv1RXrhCrK.jpg', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1zoZ_Bybv1RXrhCrK.jpg', 'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/05c84c8d8ffebf7fd17c8838b5d81ee6.png');

-- ----------------------------
-- Table structure for reguser
-- ----------------------------
DROP TABLE IF EXISTS `reguser`;
CREATE TABLE `reguser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reguser
-- ----------------------------
INSERT INTO `reguser` VALUES ('16', '18377782753');
INSERT INTO `reguser` VALUES ('17', '12345678912');
INSERT INTO `reguser` VALUES ('15', '18677782711');
INSERT INTO `reguser` VALUES ('13', '18677782753');
INSERT INTO `reguser` VALUES ('14', '18677782721');
INSERT INTO `reguser` VALUES ('18', '18677782113');
INSERT INTO `reguser` VALUES ('19', '18677782712');
INSERT INTO `reguser` VALUES ('20', '18677782751');
INSERT INTO `reguser` VALUES ('21', '18677782780');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name1` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5', '18677782753', '123456');
INSERT INTO `user` VALUES ('8', '18677782711', '123456789');
INSERT INTO `user` VALUES ('7', '18677782721', '123456789');
INSERT INTO `user` VALUES ('9', '18377782753', '123456');
INSERT INTO `user` VALUES ('10', '18677782113', '123456');
INSERT INTO `user` VALUES ('11', '18677782712', '123456');
INSERT INTO `user` VALUES ('12', '18677782751', '123456');
INSERT INTO `user` VALUES ('13', '18677782780', '123456');
SET FOREIGN_KEY_CHECKS=1;
