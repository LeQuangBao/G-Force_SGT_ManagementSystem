-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2017 at 11:37 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `entrance_exam`
--

CREATE TABLE `entrance_exam` (
  `id` int(11) NOT NULL,
  `entrance_exam_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `intake` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entrance_exam`
--

INSERT INTO `entrance_exam`(`id`, `entrance_exam_name`, `start_date`, `description`, `intake`) VALUES
(1,'Entrance Exam Intake 1','2017-03-06','1st entrance exam',1),
(2,'Entrance Exam Intake 2','2017-03-16','2nd entrance exam',1),
(3,'Entrance Exam Intake 3','2017-03-26','3rd entrance exam',1),
(4,'Entrance Exam Intake 4','2017-04-06','1st entrance exam',2),
(5,'Entrance Exam Intake 5','2017-04-16','2nd entrance exam',2),
(6,'Entrance Exam Intake 6','2017-04-26','3rd entrance exam',2),
(7,'Entrance Exam Intake 7','2017-05-06','1st entrance exam',3),
(8,'Entrance Exam Intake 8','2017-05-16','2nd entrance exam',3),
(9,'Entrance Exam Intake 9','2017-05-26','3rd entrance exam',3),
(10,'Entrance Exam Intake 10','2017-06-06','1st entrance exam',4),
(11,'Entrance Exam Intake 11','2017-06-16','2nd entrance exam',4),
(12,'Entrance Exam Intake 12','2017-06-26','3rd entrance exam',4);

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `degree` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
INSERT INTO `instructor`(`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `degree`, `status`) VALUES
(1,'namnguyen','$2y$10$uy4xdQXlWK2jg9WdtldaruQqqRZGQ9E0k8c/KHJe4HRjB2Tfl5PZy','Nam','Nguyễn Thành','1961-01-10','nam.nguyenthanh@gmail.com','01285758112','40 Nguyễn Thị Minh Khai, P.2,Q1,TP.HCM','nguyenthanhnam.jpg','doctor',1),
(2,'vanly','$2y$10$jKqPv5MhLmyf0L1lH4eIuefck3osgX2qsxGheKe0WfXGhuN9qYIIa','Vân','Lý Thanh','1972-02-12','van.lythanh@gmail.com','01285758123','2 Nguyễn Thị Định, P.3,Q2,TP.HCM','lythanhvan.jpg','doctor',1),
(3,'trucho','$2y$10$bFZpWyCh7WpWCVQICkf7Ze/oggyEBCZfWptefjc09fvy3PASvR17W','Trúc','Hồ Quỳnh','1983-03-03','truc.hoquynh@gmail.com','01285758134','12 Nguyễn Đình Chiểu, P.4,Q3,TP.HCM','hoquynhtruc.jpg','doctor',1),
(4,'quangvu','$2y$10$.6Uzh5fN9V6xUmtii7S81.Dl9pmREBISsy.MjUbhyyxscF/8u.Z/G','Vũ','Quang','1964-04-26','vu.quang@gmail.com','01285758145','16 Hoàng Diệu, P.5,Q4,TP.HCM','quangvu.jpg','doctor',1),
(5,'taima','$2y$10$JPTixu6BvYRspCJumBoA7Osps9X.p2qAn9rwzAL9E/Szq1uPDoSoW','Tài','Mã Văn','1975-05-27','tai.mavan@gmail.com','01285758156','244 Nguyễn Trãi, P.6,Q5,TP.HCM','mavantai.jpg','doctor',1),
(6,'hongnguyen','$2y$10$OH/miFIpHpe/j2hieT7l9OdJgYoBPhVeBJ6LhQi/rc15exnczujfK','Hồng','Nguyễn Thị','1986-06-16','hong.nguyenthi@gmail.com','01285758167','22 Kinh Dương Vương, P.7,Q6,TP.HCM','nguyenthihong.jpg','Masters',1),
(7,'maitran','$2y$10$p9oslbzZ4fWzJyABDlG7RO7ax.kfayHuRT0lIsdkCqsif4NNOsssa','Mai','Trần Xuân','1967-07-19','mai.tranxuan@gmail.com','01285758178',' 119 Huỳnh Tấn Phát, P.8,Q7,TP.HCM','tranxuanmai.jpg','Masters',1),
(8,'daohuynh','$2y$10$3oQLnNSiUYuyU3W1yN0y2.GHe.h9oQW5dEJNDBdaIS855DFCPeptC','Đào','Huỳnh Anh','1978-08-08','dao.huynhanh@gmail.com','01285758189','120 Phạm Hùng, P.9,Q8,TP.HCM','huynhanhdao.jpg','Masters',1),
(9,'haingo','$2y$10$JcGdb7mOiBzSaq7G1K0rtexupf5RLHfvl1WeJN3u4unQXre9ZCCWi','Hải','Ngô Thanh','1980-09-22','hai.ngothanh@gmail.com','01285758190','20 Tăng Nhơn Phú, P.10,Q9,TP.HCM','ngothanhhai.jpg','Masters',1),
(10,'quyenvo','$2y$10$OpqtVMbqcJaSyjpNovyYjOTwvoqV0jA6JCWS5d8l965RpX0P05C1i','Quyền','Võ Văn','1980-10-02','quyen.vovan@gmail.com','01285758201','22 Ba Tháng Hai, P.11,Q10,TP.HCM','vovanquyen.jpg','University',1);
--
-- Table structure for table `intake`
--

CREATE TABLE `intake` (
  `id` int(11) NOT NULL,
  `intake_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `intake_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `intake`
--
INSERT INTO `intake` (`id`, `intake_id`, `intake_name`, `start_date`, `end_date`, `active`) VALUES
(1, 'IN001', 'Intake 1', '2017-04-06', '2017-09-30', 1),
(2, 'IN002', 'Intake 2', '2017-05-06', '2017-10-30', 1),
(3, 'IN003', 'Intake 3', '2017-06-06', '2017-11-30', 1),
(4, 'IN004', 'Intake 4', '2017-07-06', '2018-12-30', 1),
(5, 'IN005', 'Intake 5', '2017-08-06', '2018-01-30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `registrar`
--

CREATE TABLE `registrar` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
INSERT INTO `registrar`(`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `status`) VALUES 
(1,'quyenly','$2y$10$QQP8sc.yJqn4PL5t3IuiweqM1KVGUvfcH6vGdYD/2CWClNUI3Uej2','Quyên','Lý Kiều','1978-01-12','quyen.lykieu@gmail.com','0937229534','12 Tân Hoá , P.1,Q.11,TP.HCM ','lykieuquyen.jpg',1),
(2,'quynhnguyen','$2y$10$3UVxzD8bZFdzTK3x7TFj5u0iv5KKfFtwRGBYH/qwEJHjEItT1REpm','Quỳnh','Nguyễn Mạnh','1980-05-24','quynh.nguyenmanh@gmail.com','0937229526','856 Tạ Quang Bửu, P.5,Q.8,TP.HCM ','nguyenmanhquynh.jpg',1),
(3,'hungly','$2y$10$k84blK8r4eqtCQgZq8K..ucdl/FeJMg/5nXHj8Aff/X522pxNjl82','Hùng','Lý','1981-07-27','hung.ly@gmail.com','0937229571','39485 Kha Vạn Cân, P.Linh Đông,Q.Thủ Đức,TP.HCM ','lyhung.jpg',1),
(4,'thaonguyen','$2y$10$qsCtU6s2lIVjstJL4SKYleTZIvo.kex/P7R9ieODvookVRSAhl7cG','Thảo','Nguyễn Thu','1976-08-14','thao.nguyenthu@gmail.com','0937229592','132 Nguyễn Mình Hoàng, P.12,Q.Tân Bình,TP.HCM ','nguyenthuthao.jpg',1),
(5,'yenly','$2y$10$kji.U.Sgg/j3FrwgeHotc.b1V3KaPFwiuBXZuAAu/MiMYPJwSyNJa','Yến','Lý','1983-10-09','yen.ly@gmail.com','0937229588','582 Ba Tháng Hai, P.10,Q.10,TP.HCM ','lyyen.jpg',1);
--
-- Table structure for table `school`
--

CREATE TABLE `school` (
  `id` int(11) NOT NULL,
  `school_id` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `school_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci,
  `contact` text COLLATE utf8_unicode_ci,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `school`(`id`, `school_id`, `school_name`, `address`, `contact`, `active`) VALUES
(1, 'SGD', 'ĐH Sài Gòn', '273 An Dương Vương, Quận 5', 'Điện thoại: (84-8) 38.354409 - 38.352309, Fax: (84-8) 38.305568,Email: p_daotao@sgu.edu.vn, ttcntt@sgu.edu.vn', 1),
(2, 'DKC', 'ĐH Công nghệ TP.HCM (HUTECH)', '475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM ', 'ĐT: (08) 5445 7777, Fax: (08) 5445 4444, Email: hutech@hutech.edu.vn', 1),
(3, 'SPK', 'ĐH Sư phạm Kỹ thuật TP.HCM', '1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh', 'Điện thoại: (+84 - 8) 38968641 - (+84 - 8) 38961333, Fax: (+84-8) 38964922, E-mail: pmo@hcmute.edu.vn', 1),
(4, 'DCT', 'ĐH Công nghiệp Thực phẩm TP.HCM', '140 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, Tp. HCM', 'Điện thoại: (08)38161673 - (08)38163319, Email: info@hufi.edu.vn', 1),
(5, 'DTM', 'ĐH Tài nguyên - Môi trường TP.HCM', '236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh ', 'Điện thoại: 08.38443006, Fax: 08.38449474 ', 1),
(6,'QSC','ĐH Công nghệ Thông tin','Khu phố 6, P. Linh Trung,Quận Thủ Đức, Tp. Hồ Chí Minh','ĐT: (08) 372 52002, Fax: (08) 372 52148',1),
(7,'QSB','ĐH Bách khoa','101 Nhà A1, 268 Lý Thường Kiệt, P. 14, Q.10, Tp. Hồ Chí Minh','Email: pdt@hcmut.edu.vn, Điện thoại: (08) 38 654 087',1),
(8,'QST','ĐH Khoa học Tự nhiên','227, Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh ','Điện thoại: (84.8) 38 353 193, Fax: (84.8) 38 350 096',1),
(9,'SPS','ĐH Sư phạm','280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh','ĐT: (+84) - (8) - 38352020, Fax: (+84) - (8) - 38398946',1),
(10,'DTH','ĐH Hoa Sen','Số 08 Nguyễn Văn Tráng, Q.1, Tp.HCM','Điện thoại:  08. 7309 1991, Fax:  08 3925 7851',1);

--
-- Dumping data for table `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `specialization_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `specialization_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `specialization`
--

INSERT INTO `specialization` (`id`, `specialization_id`, `specialization_name`, `active`) VALUES
(1, 'AD1', 'Android Development', 1),
(2, 'WD1', 'Web Development', 1),
(3, 'FD1', 'Web Front End', 1),
(4, 'BD1', 'Back End', 1),
(5, 'ST1', 'Software Testing', 1),
(6, 'AD2  ', 'Android Development 2  ', 1),
(7, 'AD3  ', 'Android Development 3  ', 1),
(8, 'AD4  ', 'Android Development 4  ', 1),
(9, 'AD5  ', 'Android Development 5  ', 1),
(10, 'AD6  ', 'Android Development 6  ', 1),
(11, 'AD7  ', 'Android Development 7  ', 1),
(12, 'AD8  ', 'Android Development 8  ', 1),
(13, 'AD9  ', 'Android Development 9  ', 1),
(14, 'AD10 ', 'Android Development 10 ', 1),
(15, 'AD11 ', 'Android Development 11 ', 1),
(16, 'AD12 ', 'Android Development 12 ', 1),
(17, 'AD13 ', 'Android Development 13 ', 1),
(18, 'AD14 ', 'Android Development 14 ', 1),
(19, 'AD15 ', 'Android Development 15 ', 1),
(20, 'AD16 ', 'Android Development 16 ', 1),
(21, 'AD17 ', 'Android Development 17 ', 1),
(22, 'AD18 ', 'Android Development 18 ', 1),
(23, 'AD19 ', 'Android Development 19 ', 1),
(24, 'AD20 ', 'Android Development 20 ', 1),
(25, 'AD21 ', 'Android Development 21 ', 1),
(26, 'AD22 ', 'Android Development 22 ', 1),
(27, 'AD23 ', 'Android Development 23 ', 1),
(28, 'AD24 ', 'Android Development 24 ', 1),
(29, 'AD25 ', 'Android Development 25 ', 1),
(30, 'AD26 ', 'Android Development 26 ', 1),
(31, 'AD27 ', 'Android Development 27 ', 1),
(32, 'AD28 ', 'Android Development 28 ', 1),
(33, 'AD29 ', 'Android Development 29 ', 1),
(34, 'AD30 ', 'Android Development 30 ', 1),
(35, 'AD31 ', 'Android Development 31 ', 1),
(36, 'AD32 ', 'Android Development 32 ', 1),
(37, 'AD33 ', 'Android Development 33 ', 1),
(38, 'AD34 ', 'Android Development 34 ', 1),
(39, 'AD35 ', 'Android Development 35 ', 1),
(40, 'AD36 ', 'Android Development 36 ', 1),
(41, 'AD37 ', 'Android Development 37 ', 1),
(42, 'AD38 ', 'Android Development 38 ', 1),
(43, 'AD39 ', 'Android Development 39 ', 1),
(44, 'AD40 ', 'Android Development 40 ', 1),
(45, 'AD41 ', 'Android Development 41 ', 1),
(46, 'AD42 ', 'Android Development 42 ', 1),
(47, 'AD43 ', 'Android Development 43 ', 1),
(48, 'AD44 ', 'Android Development 44 ', 1),
(49, 'AD45 ', 'Android Development 45 ', 1),
(50, 'AD46 ', 'Android Development 46 ', 1),
(51, 'AD47 ', 'Android Development 47 ', 1),
(52, 'AD48 ', 'Android Development 48 ', 1),
(53, 'AD49 ', 'Android Development 49 ', 1),
(54, 'AD50 ', 'Android Development 50 ', 1),
(55, 'AD51 ', 'Android Development 51 ', 1),
(56, 'AD52 ', 'Android Development 52 ', 1),
(57, 'AD53 ', 'Android Development 53 ', 1),
(58, 'AD54 ', 'Android Development 54 ', 1),
(59, 'AD55 ', 'Android Development 55 ', 1),
(60, 'AD56 ', 'Android Development 56 ', 1),
(61, 'AD57 ', 'Android Development 57 ', 1),
(62, 'AD58 ', 'Android Development 58 ', 1),
(63, 'AD59 ', 'Android Development 59 ', 1),
(64, 'AD60 ', 'Android Development 60 ', 1),
(65, 'AD61 ', 'Android Development 61 ', 1),
(66, 'AD62 ', 'Android Development 62 ', 1),
(67, 'AD63 ', 'Android Development 63 ', 1),
(68, 'AD64 ', 'Android Development 64 ', 1),
(69, 'AD65 ', 'Android Development 65 ', 1),
(70, 'AD66 ', 'Android Development 66 ', 1),
(71, 'AD67 ', 'Android Development 67 ', 1),
(72, 'AD68 ', 'Android Development 68 ', 1),
(73, 'AD69 ', 'Android Development 69 ', 1),
(74, 'AD70 ', 'Android Development 70 ', 1),
(75, 'AD71 ', 'Android Development 71 ', 1),
(76, 'AD72 ', 'Android Development 72 ', 1),
(77, 'AD73 ', 'Android Development 73 ', 1),
(78, 'AD74 ', 'Android Development 74 ', 1),
(79, 'AD75 ', 'Android Development 75 ', 1),
(80, 'AD76 ', 'Android Development 76 ', 1),
(81, 'AD77 ', 'Android Development 77 ', 1),
(82, 'AD78 ', 'Android Development 78 ', 1),
(83, 'AD79 ', 'Android Development 79 ', 1),
(84, 'AD80 ', 'Android Development 80 ', 1),
(85, 'AD81 ', 'Android Development 81 ', 1),
(86, 'AD82 ', 'Android Development 82 ', 1),
(87, 'AD83 ', 'Android Development 83 ', 1),
(88, 'AD84 ', 'Android Development 84 ', 1),
(89, 'AD85 ', 'Android Development 85 ', 1),
(90, 'AD86 ', 'Android Development 86 ', 1),
(91, 'AD87 ', 'Android Development 87 ', 1),
(92, 'AD88 ', 'Android Development 88 ', 1),
(93, 'AD89 ', 'Android Development 89 ', 1),
(94, 'AD90 ', 'Android Development 90 ', 1),
(95, 'AD91 ', 'Android Development 91 ', 1),
(96, 'AD92 ', 'Android Development 92 ', 1),
(97, 'AD93 ', 'Android Development 93 ', 1),
(98, 'AD94 ', 'Android Development 94 ', 1),
(99, 'AD95 ', 'Android Development 95 ', 1),
(100, 'AD96 ', 'Android Development 96 ', 1),
(101, 'AD97 ', 'Android Development 97 ', 1),
(102, 'AD98 ', 'Android Development 98 ', 1),
(103, 'AD99 ', 'Android Development 99 ', 1),
(104, 'AD100', 'Android Development 100', 1),
(106, 'AD102', 'Android Development 102', 1),
(107, 'AD103', 'Android Development 103', 1),
(108, 'AD104', 'Android Development 104', 1),
(109, 'AD105', 'Android Development 105', 1),
(110, 'AD106', 'Android Development 106', 1),
(111, 'AD107', 'Android Development 107', 1),
(112, 'AD108', 'Android Development 108', 1),
(113, 'AD109', 'Android Development 109', 1),
(114, 'AD110', 'Android Development 110', 1),
(115, 'AD111', 'Android Development 111', 1),
(116, 'AD112', 'Android Development 112', 1),
(117, 'AD113', 'Android Development 113', 1),
(118, 'AD114', 'Android Development 114', 1),
(119, 'AD115', 'Android Development 115', 1),
(120, 'AD116', 'Android Development 116', 1),
(121, 'AD117', 'Android Development 117', 1),
(122, 'AD118', 'Android Development 118', 1),
(123, 'AD119', 'Android Development 119', 1),
(124, 'AD120', 'Android Development 120', 1),
(125, 'AD121', 'Android Development 121', 1),
(126, 'AD122', 'Android Development 122', 1),
(127, 'AD123', 'Android Development 123', 1),
(128, 'AD124', 'Android Development 124', 1),
(129, 'AD125', 'Android Development 125', 1),
(130, 'AD126', 'Android Development 126', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization_subject`
--

CREATE TABLE `specialization_subject` (
  `specialization` int(11) NOT NULL,
  `subject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `specialization_subject`
--

INSERT INTO `specialization_subject` (`specialization`, `subject`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(14, 1),
(14, 2);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `student_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gender` tinyint(4) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `school` int(11) DEFAULT NULL,
  `intake` int(11) DEFAULT NULL,
  `entrance_exam` int(11) DEFAULT NULL,
  `specialization` int(11) DEFAULT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
INSERT INTO `student`(`id`, `student_id`, `username`, `password`, `firstname`, `lastname`, `gender`, `birthday`, `email`, `phone`, `address`, `school`, `intake`, `entrance_exam`, `specialization`, `image`, `status`) VALUES 
(1,'ISC01-17-0-0001','nhatnguyen','$2y$10$cUGkrLE2Mi8nO2oK08x5EOuBWaInxpxxUi/8bsCcAyflm3bmDfWIi','Nhật','Nguyễn Minh',0,'1995-01-18','nhat.nguyenminh@gmail.com','0939019506','99 Nguyễn Tri Phương, P.7,Q.5,TP.HCM',1,1,1,1,'nguyenminhnhat.jpg','Studying'),
(2,'ISC01-17-1-0002','anhnhat','$2y$10$wOWeLPXmN8mclwXStFqYruHPDzQz0/QKZb6LBkGe/NNBdYSXnsLSG','Anh','Nhật Kim',1,'1995-03-26','anh.nhatkim@gmail.com','0938028980','754 Nguyễn Trãi, P.11,Q.5,TP.HCM',1,2,1,2,'nhatkimanh.jpg','Studying'),
(3,'ISC01-17-0-0003','nguyentran','$2y$10$8ahqj8EsG2f08gQvqvtTI.nht1HL9Csk2sL31EfZCJ4awiJbbK1t6','Nguyên','Trần Khai',0,'1995-05-20','nguyen.trankhai@gmail.com','0937037762','250 Tùng Thiện Vương, P.11,Q.8,TP.HCM',2,2,1,3,'trankhainguyen.jpg','Studying'),
(4,'ISC01-17-1-0004','ngockhai','$2y$10$LhJ4qqGfH77FVR8OmRS8Ku4myypTWYlBTbfFk5k5NqgOnZn6PXp7u','Ngọc','Khai Minh',1,'1995-07-01','ngoc.khaiminh@gmail.com','0936046566','169 Bùi Minh Trực, P.5,Q.8,TP.HCM',2,3,1,4,'khaiminhngoc.jpg','Studying'),
(5,'ISC01-17-0-0005','phatphan','$2y$10$dwS0AY8U6tBbrRK90W5FBu0SM.TaNwLfLOMXo9VbBfF2CxCvnUdAy','Phát','Phan Tiến',0,'1995-09-09','phat.phantien@gmail.com','0935055721','15 Nguyễn Hữu Thọ, P.Tân Phong,Q.7,TP.HCM',3,1,1,5,'phantienphat.jpg','Studying'),
(6,'ISC01-17-1-0006','haho','$2y$10$samOlRX9ly8A5FR5AILP2.DpNts1jPAMMU.ACIEIv6kuNZbs8AYVS','Hà','Hồ Ngọc',1,'1995-11-22','ha.hongoc@gmail.com','0934064789','15 Hoàng Văn Thái, P.Tân Phú ,Q.7,TP.HCM',3,4,2,1,'hongocha.jpg','Studying'),
(7,'ISC01-17-0-0007','dungcao','$2y$10$t.MB/uNgUGFXnxgFrtvlWesJECE9EiVSOwz/DppG2g9k7d9Bs0WI6','Dũng','Cao Chí',0,'1995-02-27','dung.caochi@gmail.com','0933073234','207 Đội Cung, P.9,Q.11,TP.HCM',4,1,2,2,'caochidung.jpg','Studying'),
(8,'ISC01-17-1-0008','huongho','$2y$10$a18fEhb0FEUTFt8yjdUMBeliX2u5wFKwEFMU0ZFgMnBGFa7qHCFsW','Hương','Hồ Xuân',1,'1995-04-12','huong.hoxuan@gmail.com','0932082547','138 Tạ Uyên, P.6,Q.11,TP.HCM',4,4,2,3,'hoxuanhuong.jpg','Studying'),
(9,'ISC01-17-0-0009','tungcao','$2y$10$xR89/ughkt264qMm/P7jZurrf01SlsxtQiXVeB4SJ/z9Xz1JMzkyS','Tùng','Cao Sơn',0,'1995-06-18','tung.caoson@gmail.com','0931091982','96 Nguyễn Thiện Thuật, P.2,Q.3,TP.HCM',5,5,2,4,'caosontung.jpg','Studying'),
(10,'ISC01-17-1-0010','aiminh','$2y$10$r9AqUqGMgzkKnzLr08kh4.J9UASIAdGVbVPf/kgkk.ewkaIaWsvjG','Ái','Minh Thiên',1,'1995-08-15','ai.minhthien@gmail.com','0929100123','169 Võ Thị Sáu, P.2,Q.3,TP.HCM',5,1,2,5,'minhthienai.jpg','Studying'),
(11,'ISC01-17-0-0011','soncao','$2y$10$FAf4cAHtJlTC25r.zrhZdeQiATSi3L9AtoVg4/S9.dK7Kx.byXOlO','Sơn','Cao Thái',0,'1995-10-24','son.caothai@gmail.com','0928119753','191 Phạm Phú Thứ, P.4,Q.6,TP.HCM',6,1,2,1,'caothaison.jpg','Studying'),
(12,'ISC01-17-1-0012','trinhnguyen','$2y$10$XYwf49TDAAkQ8pH8LdD5rOnmZEaGKNz4B.YRoZLUmz0Ye4yJO0FKK','Trinh','Nguyễn Ngọc',1,'1995-12-02','trinh.nguyenngoc@gmail.com','0927128742','105 Trần Văn Kiếu, P.10,Q.6,TP.HCM',6,1,2,2,'nguyenngoctrinh.jpg','Studying'),
(13,'ISC01-17-0-0013','minhtruong','$2y$10$/dEo9CKUiOC8QqmVnPc2CuIYymEX5TYHpIJzlwXLwYWj59kBktoqq','Minh','Trương Thanh',0,'1995-03-08','minh.truongthanh@gmail.com','0926137598','935 Quang Trung, P.14,Q.12,TP.HCM',7,2,2,3,'truongthanhminh.jpg','Studying'),
(14,'ISC01-17-1-0014','phupham','$2y$10$JvHAxbCyl5TJUrTmBQFZOeJzxAA3SWRNPl6oVVXGISkXd3200pk9q','Phú','Phạm Hồng',1,'1995-08-11','phu.phamhong@gmail.com','0925146084','153 Quang Trung, P.Đông Hưng Thuận,Q.12,TP.HCM',7,1,2,4,'phamhongphu.jpg','Studying'),
(15,'ISC01-17-0-0015','khoalang','$2y$10$279UypNPY8T61/Yg3uRP/.W5gGWMp85yiEy7mqLfqzafb.pzQE0QS','Khoa','Lăng Tiến',0,'1995-06-29','khoa.langtien@gmail.com','0924155687','1155 Phan Văn Trị, P.10,Q.Gò Vấp,TP.HCM',8,1,3,5,'langtienkhoa.jpg','Studying'),
(16,'ISC01-17-1-0016','kieudap','$2y$10$uCBDCXzy5UmhUbJ3PnbQ4eBcxvTtTQ8omawx/Q9dDoVTnGAoC/lR.','Kiều','Đạp Thuý',1,'1995-12-29','kieu.dapthuy@gmail.com','0923164387','45 Trần Thị Nghĩ, P.7,Q.Gò Vấp,TP.HCM',8,3,3,1,'dapthuykieu.jpg','Studying'),
(17,'ISC01-17-0-0017','tiendo','$2y$10$6IBr2eUBIK34tEwlHjPvhug7xCAgv9FOrKUzYftHOXtfUgUA.dI7C','Tiến','Đỗ Thăng',0,'1995-09-11','tien.dothang@gmail.com','0922173299','157 Nguyễn Trọng Tuyến, P.8,Q.2,TP.HCM',9,1,3,2,'dothangtien.jpg','Studying'),
(18,'ISC01-17-1-0018','phuocla','$2y$10$RA6QrVQPaoX0ZrsZMAvPnOcqUeJYK3NXcByV4i4mzGPksTxGbpRJ6','Phước','Lã Minh',1,'1995-10-10','phuoc.laminh@gmail.com','0921182400','10 Nguyên Văn Bảo, P.4,Q.2,TP.HCM',9,3,3,3,'laminhphuoc.jpg','Studying'),
(19,'ISC01-17-0-0019','phuctran','$2y$10$sEAUczvJwi9R6YQShyJnSuhA5u0P4W4GqAlQ1eNXuuUmERR4nRJde','Phúc','Trần Tiến',0,'1995-01-31','phuc.trantien@gmail.com','0963191318','15 Nguyễn Thái Bình, P.4,Q.9,TP.HCM',10,1,3,4,'trantienphuc.jpg','Studying'),
(20,'ISC01-17-1-0020','tammy','$2y$10$Mjg85GHp0WrwUb/NbgcRDuoNY4Qv5Z9UpM4khmAyqeT9Q7yq4rz0e','Tâm','Mỹ',1,'1995-07-22','tam.my@gmail.com','0964200672','Đường số 4, P.Trường Thọ,Q.9,TP.HCM',10,1,3,5,'mytam.jpg','Studying');
-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `subject_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `subject_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `credit` float NOT NULL,
  `hour` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `subject_id`, `subject_name`, `credit`, `hour`, `description`, `active`) VALUES
(1, 'DB00', 'Working Process', 4, 40, 'A subject that teach you about how to work as a scrum team', 0),
(2, 'DB01', 'Java', 3, 36, 'Basic to advance java programing', 1),
(3, 'DB99', 'Front End', 3, 36, 'Build the website to surprise the customer', 1),
(4, 'DB', 'Database', 4, 48, 'Manage database', 1),
(5, 'TA', 'Writing Email', 2, 24, 'Writing email by japanese', 1),
(16, 'AT2  ', 'Automation Test2  ', 4, 32, 'Learn write sript automation test', 1),
(17, 'AT3  ', 'Automation Test3  ', 4, 32, 'Learn write sript automation test', 1),
(18, 'AT4  ', 'Automation Test4  ', 4, 32, 'Learn write sript automation test', 1),
(19, 'AT5  ', 'Automation Test5  ', 4, 32, 'Learn write sript automation test', 1),
(20, 'AT6  ', 'Automation Test6  ', 4, 32, 'Learn write sript automation test', 1),
(21, 'AT7  ', 'Automation Test7  ', 4, 32, 'Learn write sript automation test', 1),
(22, 'AT8  ', 'Automation Test8  ', 4, 32, 'Learn write sript automation test', 1),
(23, 'AT9  ', 'Automation Test9  ', 4, 32, 'Learn write sript automation test', 1),
(24, 'AT10 ', 'Automation Test10 ', 4, 32, 'Learn write sript automation test', 1),
(25, 'AT11 ', 'Automation Test11 ', 4, 32, 'Learn write sript automation test', 1),
(26, 'AT12 ', 'Automation Test12 ', 4, 32, 'Learn write sript automation test', 1),
(27, 'AT13 ', 'Automation Test13 ', 4, 32, 'Learn write sript automation test', 1),
(28, 'AT14 ', 'Automation Test14 ', 4, 32, 'Learn write sript automation test', 1),
(29, 'AT15 ', 'Automation Test15 ', 4, 32, 'Learn write sript automation test', 1),
(30, 'AT16 ', 'Automation Test16 ', 4, 32, 'Learn write sript automation test', 1),
(31, 'AT17 ', 'Automation Test17 ', 4, 32, 'Learn write sript automation test', 1),
(32, 'AT18 ', 'Automation Test18 ', 4, 32, 'Learn write sript automation test', 1),
(33, 'AT19 ', 'Automation Test19 ', 4, 32, 'Learn write sript automation test', 1),
(34, 'AT20 ', 'Automation Test20 ', 4, 32, 'Learn write sript automation test', 1),
(35, 'AT21 ', 'Automation Test21 ', 4, 32, 'Learn write sript automation test', 1),
(36, 'AT22 ', 'Automation Test22 ', 4, 32, 'Learn write sript automation test', 1),
(37, 'AT23 ', 'Automation Test23 ', 4, 32, 'Learn write sript automation test', 1),
(38, 'AT24 ', 'Automation Test24 ', 4, 32, 'Learn write sript automation test', 1),
(39, 'AT25 ', 'Automation Test25 ', 4, 32, 'Learn write sript automation test', 1),
(40, 'AT26 ', 'Automation Test26 ', 4, 32, 'Learn write sript automation test', 1),
(41, 'AT27 ', 'Automation Test27 ', 4, 32, 'Learn write sript automation test', 1),
(42, 'AT28 ', 'Automation Test28 ', 4, 32, 'Learn write sript automation test', 1),
(43, 'AT29 ', 'Automation Test29 ', 4, 32, 'Learn write sript automation test', 1),
(44, 'AT30 ', 'Automation Test30 ', 4, 32, 'Learn write sript automation test', 1),
(45, 'AT31 ', 'Automation Test31 ', 4, 32, 'Learn write sript automation test', 1),
(46, 'AT32 ', 'Automation Test32 ', 4, 32, 'Learn write sript automation test', 1),
(47, 'AT33 ', 'Automation Test33 ', 4, 32, 'Learn write sript automation test', 1),
(48, 'AT34 ', 'Automation Test34 ', 4, 32, 'Learn write sript automation test', 1),
(49, 'AT35 ', 'Automation Test35 ', 4, 32, 'Learn write sript automation test', 1),
(50, 'AT36 ', 'Automation Test36 ', 4, 32, 'Learn write sript automation test', 1),
(51, 'AT37 ', 'Automation Test37 ', 4, 32, 'Learn write sript automation test', 1),
(52, 'AT38 ', 'Automation Test38 ', 4, 32, 'Learn write sript automation test', 1),
(53, 'AT39 ', 'Automation Test39 ', 4, 32, 'Learn write sript automation test', 1),
(54, 'AT40 ', 'Automation Test40 ', 4, 32, 'Learn write sript automation test', 1),
(55, 'AT41 ', 'Automation Test41 ', 4, 32, 'Learn write sript automation test', 1),
(56, 'AT42 ', 'Automation Test42 ', 4, 32, 'Learn write sript automation test', 1),
(57, 'AT43 ', 'Automation Test43 ', 4, 32, 'Learn write sript automation test', 1),
(58, 'AT44 ', 'Automation Test44 ', 4, 32, 'Learn write sript automation test', 1),
(59, 'AT45 ', 'Automation Test45 ', 4, 32, 'Learn write sript automation test', 1),
(60, 'AT46 ', 'Automation Test46 ', 4, 32, 'Learn write sript automation test', 1),
(61, 'AT47 ', 'Automation Test47 ', 4, 32, 'Learn write sript automation test', 1),
(62, 'AT48 ', 'Automation Test48 ', 4, 32, 'Learn write sript automation test', 1),
(63, 'AT49 ', 'Automation Test49 ', 4, 32, 'Learn write sript automation test', 1),
(64, 'AT50 ', 'Automation Test50 ', 4, 32, 'Learn write sript automation test', 1),
(65, 'AT51 ', 'Automation Test51 ', 4, 32, 'Learn write sript automation test', 1),
(66, 'AT52 ', 'Automation Test52 ', 4, 32, 'Learn write sript automation test', 1),
(67, 'AT53 ', 'Automation Test53 ', 4, 32, 'Learn write sript automation test', 1),
(68, 'AT54 ', 'Automation Test54 ', 4, 32, 'Learn write sript automation test', 1),
(69, 'AT55 ', 'Automation Test55 ', 4, 32, 'Learn write sript automation test', 1),
(70, 'AT56 ', 'Automation Test56 ', 4, 32, 'Learn write sript automation test', 1),
(71, 'AT57 ', 'Automation Test57 ', 4, 32, 'Learn write sript automation test', 1),
(72, 'AT58 ', 'Automation Test58 ', 4, 32, 'Learn write sript automation test', 1),
(73, 'AT59 ', 'Automation Test59 ', 4, 32, 'Learn write sript automation test', 1),
(74, 'AT60 ', 'Automation Test60 ', 4, 32, 'Learn write sript automation test', 1),
(75, 'AT61 ', 'Automation Test61 ', 4, 32, 'Learn write sript automation test', 1),
(76, 'AT62 ', 'Automation Test62 ', 4, 32, 'Learn write sript automation test', 1),
(77, 'AT63 ', 'Automation Test63 ', 4, 32, 'Learn write sript automation test', 1),
(78, 'AT64 ', 'Automation Test64 ', 4, 32, 'Learn write sript automation test', 1),
(79, 'AT65 ', 'Automation Test65 ', 4, 32, 'Learn write sript automation test', 1),
(80, 'AT66 ', 'Automation Test66 ', 4, 32, 'Learn write sript automation test', 1),
(81, 'AT67 ', 'Automation Test67 ', 4, 32, 'Learn write sript automation test', 1),
(82, 'AT68 ', 'Automation Test68 ', 4, 32, 'Learn write sript automation test', 1),
(83, 'AT69 ', 'Automation Test69 ', 4, 32, 'Learn write sript automation test', 1),
(84, 'AT70 ', 'Automation Test70 ', 4, 32, 'Learn write sript automation test', 1),
(85, 'AT71 ', 'Automation Test71 ', 4, 32, 'Learn write sript automation test', 1),
(86, 'AT72 ', 'Automation Test72 ', 4, 32, 'Learn write sript automation test', 1),
(87, 'AT73 ', 'Automation Test73 ', 4, 32, 'Learn write sript automation test', 1),
(88, 'AT74 ', 'Automation Test74 ', 4, 32, 'Learn write sript automation test', 1),
(89, 'AT75 ', 'Automation Test75 ', 4, 32, 'Learn write sript automation test', 1),
(90, 'AT76 ', 'Automation Test76 ', 4, 32, 'Learn write sript automation test', 1),
(91, 'AT77 ', 'Automation Test77 ', 4, 32, 'Learn write sript automation test', 1),
(92, 'AT78 ', 'Automation Test78 ', 4, 32, 'Learn write sript automation test', 1),
(93, 'AT79 ', 'Automation Test79 ', 4, 32, 'Learn write sript automation test', 1),
(94, 'AT80 ', 'Automation Test80 ', 4, 32, 'Learn write sript automation test', 1),
(95, 'AT81 ', 'Automation Test81 ', 4, 32, 'Learn write sript automation test', 1),
(96, 'AT82 ', 'Automation Test82 ', 4, 32, 'Learn write sript automation test', 1),
(97, 'AT83 ', 'Automation Test83 ', 4, 32, 'Learn write sript automation test', 1),
(98, 'AT84 ', 'Automation Test84 ', 4, 32, 'Learn write sript automation test', 1),
(99, 'AT85 ', 'Automation Test85 ', 4, 32, 'Learn write sript automation test', 1),
(100, 'AT86 ', 'Automation Test86 ', 4, 32, 'Learn write sript automation test', 1),
(101, 'AT87 ', 'Automation Test87 ', 4, 32, 'Learn write sript automation test', 1),
(102, 'AT88 ', 'Automation Test88 ', 4, 32, 'Learn write sript automation test', 1),
(103, 'AT89 ', 'Automation Test89 ', 4, 32, 'Learn write sript automation test', 1),
(104, 'AT90 ', 'Automation Test90 ', 4, 32, 'Learn write sript automation test', 1),
(105, 'AT91 ', 'Automation Test91 ', 4, 32, 'Learn write sript automation test', 1),
(106, 'AT92 ', 'Automation Test92 ', 4, 32, 'Learn write sript automation test', 1),
(107, 'AT93 ', 'Automation Test93 ', 4, 32, 'Learn write sript automation test', 1),
(108, 'AT94 ', 'Automation Test94 ', 4, 32, 'Learn write sript automation test', 1),
(109, 'AT95 ', 'Automation Test95 ', 4, 32, 'Learn write sript automation test', 1),
(110, 'AT96 ', 'Automation Test96 ', 4, 32, 'Learn write sript automation test', 1),
(111, 'AT97 ', 'Automation Test97 ', 4, 32, 'Learn write sript automation test', 1),
(112, 'AT98 ', 'Automation Test98 ', 4, 32, 'Learn write sript automation test', 1),
(113, 'AT99 ', 'Automation Test99 ', 4, 32, 'Learn write sript automation test', 1),
(114, 'AT100', 'Automation Test100', 4, 32, 'Learn write sript automation test', 1),
(115, 'AT101', 'Automation Test101', 4, 32, 'Learn write sript automation test', 1),
(116, 'AT102', 'Automation Test102', 4, 32, 'Learn write sript automation test', 1),
(117, 'AT103', 'Automation Test103', 4, 32, 'Learn write sript automation test', 1),
(118, 'AT104', 'Automation Test104', 4, 32, 'Learn write sript automation test', 1),
(119, 'AT105', 'Automation Test105', 4, 32, 'Learn write sript automation test', 1),
(120, 'AT106', 'Automation Test106', 4, 32, 'Learn write sript automation test', 1),
(121, 'AT107', 'Automation Test107', 4, 32, 'Learn write sript automation test', 1),
(122, 'MT001', 'Manual Test 001', 1, 4, 'Learn to do manual test', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entrance_exam`
--
ALTER TABLE `entrance_exam`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `entrance_exam_name` (`entrance_exam_name`),
  ADD KEY `entrance_exam_intake_fk` (`intake`);

--
-- Indexes for table `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `intake`
--
ALTER TABLE `intake`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `intake_id` (`intake_id`);

--
-- Indexes for table `registrar`
--
ALTER TABLE `registrar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `school_id` (`school_id`);

--
-- Indexes for table `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `specialization_id` (`specialization_id`);

--
-- Indexes for table `specialization_subject`
--
ALTER TABLE `specialization_subject`
  ADD PRIMARY KEY (`specialization`,`subject`),
  ADD KEY `subject` (`subject`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `student_id` (`student_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `student_id_2` (`student_id`),
  ADD KEY `school` (`school`),
  ADD KEY `intake` (`intake`),
  ADD KEY `school_2` (`school`),
  ADD KEY `student_entrance_exam_fk` (`entrance_exam`),
  ADD KEY `student_specialization_fk` (`specialization`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `entrance_exam`
--
ALTER TABLE `entrance_exam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `instructor`
--
ALTER TABLE `instructor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `intake`
--
ALTER TABLE `intake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `registrar`
--
ALTER TABLE `registrar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `entrance_exam`
--
ALTER TABLE `entrance_exam`
  ADD CONSTRAINT `entrance_exam_intake_fk` FOREIGN KEY (`intake`) REFERENCES `intake` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specialization_subject`
--
ALTER TABLE `specialization_subject`
  ADD CONSTRAINT `specialization_subject_ibfk_1` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `specialization_subject_ibfk_2` FOREIGN KEY (`subject`) REFERENCES `subject` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_entrance_exam_fk` FOREIGN KEY (`entrance_exam`) REFERENCES `entrance_exam` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_intake_fk` FOREIGN KEY (`intake`) REFERENCES `intake` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_school_fk` FOREIGN KEY (`school`) REFERENCES `school` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_specialization_fk` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
