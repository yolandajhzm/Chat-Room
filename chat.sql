/*
 Navicat MySQL Data Transfer

 Source Server         : Chating
 Source Server Type    : MySQL
 Source Server Version : 80030 (8.0.30)
 Source Host           : localhost:3306
 Source Schema         : chat

 Target Server Type    : MySQL
 Target Server Version : 80030 (8.0.30)
 File Encoding         : 65001

 Date: 16/08/2022 15:21:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chatmsg
-- ----------------------------
DROP TABLE IF EXISTS `chatmsg`;
CREATE TABLE `chatmsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 53 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of chatmsg
-- ----------------------------
INSERT INTO `chatmsg` VALUES (22, 'hi', '2022-08-16 01:18:32', 'Dom');
INSERT INTO `chatmsg` VALUES (23, 'how are you\n', '2022-08-16 01:19:49', 'asd');
INSERT INTO `chatmsg` VALUES (24, 'fine thanks', '2022-08-16 01:20:02', 'Dom');
INSERT INTO `chatmsg` VALUES (25, '^ ^', '2022-08-16 01:20:44', 'Dom');
INSERT INTO `chatmsg` VALUES (26, '123456', '2022-08-16 01:21:04', 'Dom');
INSERT INTO `chatmsg` VALUES (27, '12121\n3223233223', '2022-08-16 01:21:47', 'asd');
INSERT INTO `chatmsg` VALUES (28, 'dsad1', '2022-08-16 10:14:12', 'asd');
INSERT INTO `chatmsg` VALUES (29, 'dasd', '2022-08-16 10:14:24', 'asd');
INSERT INTO `chatmsg` VALUES (30, 'zzzz', '2022-08-16 10:14:39', 'asd');
INSERT INTO `chatmsg` VALUES (31, '消息', '2022-08-16 10:17:35', 'Dom');
INSERT INTO `chatmsg` VALUES (32, 'XXXXaaaaaaaaaaa', '2022-08-16 10:35:29', 'Dom');
INSERT INTO `chatmsg` VALUES (33, 'dadasda', '2022-08-16 12:54:56', 'asd');
INSERT INTO `chatmsg` VALUES (34, '重中之重', '2022-08-16 12:54:59', 'Dom66');
INSERT INTO `chatmsg` VALUES (35, '这种', '2022-08-16 12:55:17', 'Dom66');
INSERT INTO `chatmsg` VALUES (36, '大萨达', '2022-08-16 13:08:58', 'Dom66');
INSERT INTO `chatmsg` VALUES (37, 'dasd', '2022-08-16 13:27:22', 'Dom66');
INSERT INTO `chatmsg` VALUES (38, 'dddddddddddddd', '2022-08-16 13:27:47', 'asd');
INSERT INTO `chatmsg` VALUES (39, 'hi ', '2022-08-16 13:32:10', 'Dom66');
INSERT INTO `chatmsg` VALUES (40, 'rock user', '2022-08-16 13:34:00', 'asd');
INSERT INTO `chatmsg` VALUES (41, 'yep!!!!!!', '2022-08-16 13:34:14', 'Dom66');
INSERT INTO `chatmsg` VALUES (42, 'sadas', '2022-08-16 13:50:32', 'Dom66');
INSERT INTO `chatmsg` VALUES (43, 'dasdddddddddddddddddddddddddddddddddddddddddddddddd', '2022-08-16 13:50:41', 'Dom66');
INSERT INTO `chatmsg` VALUES (44, 'dsadasd', '2022-08-16 13:50:59', 'asd');
INSERT INTO `chatmsg` VALUES (45, 'hello', '2022-08-16 14:04:46', '13454654');
INSERT INTO `chatmsg` VALUES (46, 'hi', '2022-08-16 14:05:03', 'Dom');
INSERT INTO `chatmsg` VALUES (47, '123456', '2022-08-16 14:05:54', 'ly');
INSERT INTO `chatmsg` VALUES (48, 'dsadsad', '2022-08-16 14:06:15', '13454654');
INSERT INTO `chatmsg` VALUES (49, 'dsfsdf', '2022-08-16 14:06:48', 'ly');
INSERT INTO `chatmsg` VALUES (50, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2022-08-16 14:15:21', 'Dom');
INSERT INTO `chatmsg` VALUES (51, 'ddasdas', '2022-08-16 14:17:34', 'Dom');
INSERT INTO `chatmsg` VALUES (52, 'dddd', '2022-08-16 14:18:08', 'asd');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1010 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'asd', '123', '2022-08-15 22:46:58');
INSERT INTO `user` VALUES (1000, 'zxczxc', 'asdas', '2022-08-15 22:47:23');
INSERT INTO `user` VALUES (1001, 'Dom', '123456', '2022-08-15 23:43:04');
INSERT INTO `user` VALUES (1002, 'Dom2', '22222', '2022-08-16 12:42:22');
INSERT INTO `user` VALUES (1003, 'Dom22', '22222', '2022-08-16 12:43:11');
INSERT INTO `user` VALUES (1004, 'Dom333', '6666', '2022-08-16 12:47:28');
INSERT INTO `user` VALUES (1005, 'Dom444', '6666', '2022-08-16 12:53:29');
INSERT INTO `user` VALUES (1006, 'Dom445', '6666', '2022-08-16 12:53:49');
INSERT INTO `user` VALUES (1007, 'Dom66', '123456', '2022-08-16 12:54:38');
INSERT INTO `user` VALUES (1008, '13454654', '645654245654', '2022-08-16 14:04:37');
INSERT INTO `user` VALUES (1009, 'ly', '123456', '2022-08-16 14:05:49');

SET FOREIGN_KEY_CHECKS = 1;
