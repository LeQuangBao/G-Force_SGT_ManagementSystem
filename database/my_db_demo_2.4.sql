-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 04, 2017 lúc 06:15 SA
-- Phiên bản máy phục vụ: 10.1.21-MariaDB
-- Phiên bản PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `my_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `entrance_exam`
--

CREATE TABLE `entrance_exam` (
  `id` int(11) NOT NULL,
  `entrance_exam_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `intake` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `entrance_exam`
--

INSERT INTO `entrance_exam` (`id`, `entrance_exam_name`, `start_date`, `description`, `intake`) VALUES
(1, 'Entrance Exam 1 Intake 01', '2017-03-06', '1st entrance exam', 1),
(2, 'Entrance Exam 2 Intake 01', '2017-03-16', '2nd entrance exam', 1),
(3, 'Entrance Exam 3 Intake 01', '2017-03-26', '3rd entrance exam', 1),
(4, 'Entrance Exam 1 Intake 02', '2017-04-06', '1st entrance exam', 2),
(5, 'Entrance Exam 2 Intake 02', '2017-04-16', '2nd entrance exam', 2),
(6, 'Entrance Exam 3 Intake 02', '2017-04-26', '3rd entrance exam', 2),
(7, 'Entrance Exam 1 Intake 03', '2017-05-06', '1st entrance exam', 3),
(8, 'Entrance Exam 2 Intake 03', '2017-05-16', '2nd entrance exam', 3),
(9, 'Entrance Exam 3 Intake 03', '2017-05-26', '3rd entrance exam', 3),
(10, 'Entrance Exam 1 Intake 04', '2017-06-06', '1st entrance exam', 4),
(11, 'Entrance Exam 2 Intake 04', '2017-06-16', '2nd entrance exam', 4),
(12, 'Entrance Exam 3 Intake 04', '2017-06-26', '3rd entrance exam', 4),
(13, 'Entrance Exam 1 Intake 05', '2017-07-06', '1st entrance exam', 5),
(14, 'Entrance Exam 2 Intake 05', '2017-07-16', '2nd entrance exam', 5),
(15, 'Entrance Exam 3 Intake 05', '2017-07-26', '3rd entrance exam', 5),
(16, 'Entrance Exam 1 Intake 06', '2017-08-06', '1st entrance exam', 6),
(17, 'Entrance Exam 2 Intake 06', '2017-08-16', '2nd entrance exam', 6),
(18, 'Entrance Exam 3 Intake 06', '2017-08-26', '3rd entrance exam', 6),
(19, 'Entrance Exam 1 Intake 07', '2017-09-06', '1st entrance exam', 7),
(20, 'Entrance Exam 2 Intake 07', '2017-09-16', '2nd entrance exam', 7),
(21, 'Entrance Exam 3 Intake 07', '2017-09-26', '3rd entrance exam', 7),
(22, 'Entrance Exam 1 Intake 08', '2017-10-06', '1st entrance exam', 8),
(23, 'Entrance Exam 2 Intake 08', '2017-10-16', '2nd entrance exam', 8),
(24, 'Entrance Exam 3 Intake 08', '2017-10-26', '3rd entrance exam', 8),
(25, 'Entrance Exam 1 Intake 09', '2017-11-06', '1st entrance exam', 9),
(26, 'Entrance Exam 2 Intake 09', '2017-11-16', '2nd entrance exam', 9),
(27, 'Entrance Exam 3 Intake 09', '2017-11-26', '3rd entrance exam', 9),
(28, 'Entrance Exam 1 Intake 10', '2017-12-06', '1st entrance exam', 10),
(29, 'Entrance Exam 2 Intake 10', '2017-12-16', '2nd entrance exam', 10),
(30, 'Entrance Exam 3 Intake 10', '2017-12-26', '3rd entrance exam', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `instructor`
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

--
-- Đang đổ dữ liệu cho bảng `instructor`
--

INSERT INTO `instructor` (`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `degree`, `status`) VALUES
(1, 'namnguyen', '$2a$06$f/lwV/DLM0cmn2vr3g6zbeBp/pkBRh1q/Vs9TYZUyuN8IyMfTWMRC', 'Nam', 'Nguyễn Thành', '1961-01-10', 'nam.nguyenthanh@gmail.com', '01285758112', '40 Nguyễn Thị Minh Khai, P.2,Q1,TP.HCM', 'nguyenthanhnam.png', 'Doctor', 1),
(2, 'vanly', '$2a$06$f/lwV/DLM0cmn2vr3g6zbeBp/pkBRh1q/Vs9TYZUyuN8IyMfTWMRC', 'Vân', 'Lý Thanh', '1972-02-12', 'van.lythanh@gmail.com', '01285758123', '2 Nguyễn Thị Định, P.3,Q2,TP.HCM', 'lythanhvan.png', 'Doctor', 1),
(3, 'trucho', '$2a$06$q35odddomrkh.E/8cVTp.eXnqxNaudYCAsZP8kHnB8H3rQ3p8e.TO', 'Trúc', 'Hồ Quỳnh', '1983-03-03', 'truc.hoquynh@gmail.com', '01285758134', '12 Nguyễn Đình Chiểu, P.4,Q3,TP.HCM', 'hoquynhtruc.png', 'Doctor', 1),
(4, 'quangvu', '$2a$06$j3pwPWY.mmV0fEK0Z4TyIewPjwTxQLsyLYTBZ1725k88Cs.1T5iOG', 'Vũ', 'Quang', '1964-04-26', 'vu.quang@gmail.com', '01285758145', '16 Hoàng Diệu, P.5,Q4,TP.HCM', 'quangvu.jpg', 'Doctor', 1),
(5, 'taima', '$2a$06$rLkkPYk2OSHhisZdG9GHG.z6o3//6hQyiRQeFUBkoHqxpcmRe5eXa', 'Tài', 'Mã Văn', '1975-05-27', 'tai.mavan@gmail.com', '01285758156', '244 Nguyễn Trãi, P.6,Q5,TP.HCM', 'mavantai.jpg', 'Doctor', 1),
(6, 'hongnguyen', '$2a$06$hunnM8ZbvaxrZ6pxeJwyVOOuA3rAskPEZ2ii8SBwVjuYFFYqY0uR.', 'Hồng', 'Nguyễn Thị', '1986-06-16', 'hong.nguyenthi@gmail.com', '01285758167', '22 Kinh Dương Vương, P.7,Q6,TP.HCM', 'nguyenthihong.jpg', 'Master', 1),
(7, 'maitran', '$2a$06$261u2ylMEIJ.NnKRjy9Fy.NfZgDzmtInYi82NwUlqrOjRwrqZEwpC', 'Mai', 'Trần Xuân', '1967-07-19', 'mai.tranxuan@gmail.com', '01285758178', ' 119 Huỳnh Tấn Phát, P.8,Q7,TP.HCM', 'tranxuanmai.jpg', 'Master', 1),
(8, 'daohuynh', '$2a$06$B2Qk6INMSfjCrUkNuURfyeSsZXvgOLsMzKEptB6heCBPHvGG7r8vi', 'Đào', 'Huỳnh Anh', '1978-08-08', 'dao.huynhanh@gmail.com', '01285758189', '120 Phạm Hùng, P.9,Q8,TP.HCM', 'huynhanhdao.jpg', 'Master', 1),
(9, 'haingo', '$2a$06$.1Yj1Ut8HMsPjXltbyDDMegvubh/7CF0HyyggDVZEKUQJqc5MEXaG', 'Hải', 'Ngô Thanh', '1980-09-22', 'hai.ngothanh@gmail.com', '01285758190', '20 Tăng Nhơn Phú, P.10,Q9,TP.HCM', 'ngothanhhai.jpg', 'Master', 1),
(10, 'quyenvo', '$2a$06$0SYpFt70tuZKzGK.blWhdOfZPoRno3Zb2Du.UZoP8WZHgVWOIobWS', 'Quyền', 'Võ Văn', '1980-10-02', 'quyen.vovan@gmail.com', '01285758201', '22 Ba Tháng Hai, P.11,Q10,TP.HCM', 'vovanquyen.png', 'University', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `intake`
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
-- Đang đổ dữ liệu cho bảng `intake`
--

INSERT INTO `intake` (`id`, `intake_id`, `intake_name`, `start_date`, `end_date`, `active`) VALUES
(1, 'ISC01', 'Intake 01', '2017-04-06', '2017-09-30', 1),
(2, 'ISC02', 'Intake 02', '2017-05-06', '2017-10-30', 1),
(3, 'ISC03', 'Intake 03', '2017-06-06', '2017-11-30', 1),
(4, 'ISC04', 'Intake 04', '2017-07-06', '2018-12-30', 1),
(5, 'ISC05', 'Intake 05', '2017-08-06', '2018-01-30', 1),
(6, 'ISC06', 'Intake 06', '2017-09-06', '2018-03-01', 1),
(7, 'ISC07', 'Intake 07', '2017-10-06', '2018-03-30', 1),
(8, 'ISC08', 'Intake 08', '2017-11-06', '2018-04-30', 1),
(9, 'ISC09', 'Intake 09', '2017-12-06', '2018-05-30', 1),
(10, 'ISC10', 'Intake 10', '2018-01-06', '2018-06-30', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `registrar`
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

--
-- Đang đổ dữ liệu cho bảng `registrar`
--

INSERT INTO `registrar` (`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `status`) VALUES
(1, 'quyenly', '$2a$06$EdMmVPur55i5Qhh4j1ju6uCW9rBTuBlGaGlXGxC7p9ZhU3zo627eS', 'Quyên', 'Lý Kiều', '1978-01-12', 'quyen.lykieu@gmail.com', '0937229534', '12 Tân Hoá , P.1,Q.11,TP.HCM ', 'lykieuquyen.jpg', 1),
(2, 'quynhnguyen', '$2a$06$6eD3QAtSUlIeqBNQay68tOkFiLlE5VWX.Mmwh.rZ90M23Bof0YHOC', 'Quỳnh', 'Nguyễn Mạnh', '1980-05-24', 'quynh.nguyenmanh@gmail.com', '0937229526', '856 Tạ Quang Bửu, P.5,Q.8,TP.HCM ', 'nguyenmanhquynh.jpg', 1),
(3, 'hungly', '$2a$06$ZQf2ii7sptDRA8KidZEdDO/xsXDAk23ovpIwPO/c6wwMkVW69BGg2', 'Hùng', 'Lý', '1981-07-27', 'hung.ly@gmail.com', '0937229571', '39485 Kha Vạn Cân, P.Linh Đông,Q.Thủ Đức,TP.HCM ', 'lyhung.png', 1),
(4, 'thaonguyen', '$2a$06$3xhHqYlg7Mn9Y/Jsz6/OTeQ1s4C3KRzxvtRhtfPDCTwhRZVw/6SHG', 'Thảo', 'Nguyễn Thu', '1976-08-14', 'thao.nguyenthu@gmail.com', '0937229592', '132 Nguyễn Mình Hoàng, P.12,Q.Tân Bình,TP.HCM ', 'nguyenthuthao.jpg', 1),
(5, 'yenly', '$2a$06$Ain4uTBdYBmxaBlNf4Yc4eU8e.UDHViQS889zRDGc8H3CtB42tZQy', 'Yến', 'Lý', '1983-10-09', 'yen.ly@gmail.com', '0937229588', '582 Ba Tháng Hai, P.10,Q.10,TP.HCM ', 'lyyen.jpg', 1),
(6, 'thanhnguyen', '$2a$06$CSuXDwtBZCSr1hoatKW2sOYhDlGOextTH3vjImk7d/iqEU1GnIfSm', 'Thành', 'Nguyễn Tiến', '1984-01-19', 'thanh.nguyentien@gmail.com', '0933229517', '528 Hưng Phú, P.10,Q.8,TP.HCM ', 'nguyentienthanh.png', 1),
(7, 'tanly', '$2a$06$7CtcY9souNNOLucjCQLsi.bbtSRHM8/92M8u0HmCGVSL3K9Whnb0i', 'Tân', 'Lý Nhật', '1972-09-08', 'tan.lynhat@gmail.com', '0933229522', '333 Đường Số 77, P.Tân Quy,Q.7,TP.HCM ', 'lynhattan.png', 1),
(8, 'tungo', '$2a$06$T5GXSQdD0kAbuaODqbYk0.7997Tx4fKNM9td3Dk4kKYqogtL2Vhea', 'Tú', 'Ngô Thanh', '1977-11-29', 'tu.ngothanh@gmail.com', '0933229534', '54 Phan Huy Chú, P.10,Q.5,TP.HCM ', 'ngothanhtu.png', 1),
(9, 'diepbui', '$2a$06$qQpjfdQkLAlqhATRayOq.ONm2Z8/.7fggO0qCfdAp6L.Zrwqat8jy', 'Điệp', 'Bùi Văn', '1978-12-15', 'diep.buivan@gmail.com', '0933229599', '382 Ba Tháng Hai, P.10,Q.10,TP.HCM ', 'buivandiep.png', 1),
(10, 'dudoan', '$2a$06$Z5RzYzgcaLkolWDHlK4b4ersWYRoaCVfseDAfhKczl23b6AMbNRbq', 'Dự', 'Đoàn', '1980-07-27', 'du.doan@gmail.com', '0933229544', '9 Sư Vạn Hạnh, P.12,Q.10,TP.HCM ', 'doandu.png', 1),
(11, 'admin', '$2a$06$iPU1ksF7uJa/JgJStwa.g.3UFXQWtVyFDqkOZcdAc0QtInZJVV/Ae', 'Admin', 'Register', '1980-05-27', 'admin.register@gmail.com', '0933229444', '18 Sư Vạn Hạnh, P.12,Q.10,TP.HCM ', 'admin.jpg', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `school`
--

CREATE TABLE `school` (
  `id` int(11) NOT NULL,
  `school_id` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `school_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci,
  `contact` text COLLATE utf8_unicode_ci,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `school`
--

INSERT INTO `school` (`id`, `school_id`, `school_name`, `address`, `contact`, `active`) VALUES
(1, 'DCG', 'ĐH Công nghệ thông tin Gia Định', 'A15-19 Nguyễn Hữu Thọ, P. Tân Phong, Q.7, TP. HCM', 'Email : gduniversity@giadinh.edu.vn, Hotline: (08) 2214.5988', 1),
(2, 'DCT', 'ĐH Công nghiệp Thực phẩm TP.HCM', '140 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, Tp. HCM', 'Điện thoại: (08)38161673 - (08)38163319, Email: info@hufi.edu.vn', 1),
(3, 'DHB', 'ĐH Quốc tế Hồng Bàng', 'Số 3 - Hoàng Việt - P.4 - Q.Tân Bình - TP.HCM', 'Điện thoại: 08.38116486 - 08.38116487,Hotline: 0938.69.2015 - 0964.239.172, Email: tuyensinh@hbu.edu.vn, Fax: 08.38116486 - 08.38116487', 1),
(4, 'DHV', 'ĐH Hùng Vương', '736 Nguyễn Trãi , P11 , Q.5, Tp. HCM', 'Điện thoại:  08.3855 3675 - 08.3855.4806 - 08.3855.0264 - 08.3855.4691, Fax: 08.3855.3730, Email : dhv@hungvuong.edu.vn', 1),
(5, 'DKC', 'ĐH Công nghệ TP.HCM (HUTECH)', '475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM ', 'ĐT: (08) 5445 7777, Fax: (08) 5445 4444, Email: hutech@hutech.edu.vn', 1),
(6, 'DNT', 'ĐH Ngoại ngữ - Tin học TP.HCM', '155 Sư Vạn Hạnh (ND), Phường 13, Quận 10, TP.HCM', 'Điện thoại: (+84 8) 38 632 052, Fax: (+84 8) 38 650 991, Email: webmaster@huflit.edu.vn', 1),
(7, 'DTH', 'ĐH Hoa Sen', 'Số 08 Nguyễn Văn Tráng, Q.1, Tp.HCM', 'Điện thoại:  08. 7309 1991, Fax:  08 3925 7851', 1),
(8, 'DTM', 'ĐH Tài nguyên - Môi trường TP.HCM', '236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh ', 'Điện thoại: 08.38443006, Fax: 08.38449474 ', 1),
(9, 'DTT', 'ĐH Tôn Đức Thắng', 'Số 19, Đường Nguyễn Hữu Thọ, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh', 'Điện thoại: (08) 37 755 035, Fax: (08) 37 755 055, Email: dhtonducthang@tdt.edu.vn', 1),
(10, 'NTT', 'ĐH Nguyễn Tất Thành', '300A – Nguyễn Tất Thành, Phường 13, Quận 4, TP. Hồ Chí Minh', 'Điện thoại: 08 39 411 211 – 08 39 404 272, Fax: 08 39 404 759, Hotline: 0902 298 300 – 0906 298 300 – 0912 298 300 – 0914 298 300, Email: tttvtsinh@ntt.edu.vn – bangiamhieu@ntt.edu.vn', 1),
(11, 'QSB', 'ĐH Bách khoa', '101 Nhà A1, 268 Lý Thường Kiệt, P. 14, Q.10, Tp. Hồ Chí Minh', 'Email: pdt@hcmut.edu.vn, Điện thoại: (08) 38 654 087', 1),
(12, 'QSC', 'ĐH Công nghệ Thông tin', 'Khu phố 6, P. Linh Trung,Quận Thủ Đức, Tp. Hồ Chí Minh', 'ĐT: (08) 372 52002, Fax: (08) 372 52148', 1),
(13, 'QSQ', 'ĐH Quốc tế', 'Khu phố 6, P.Linh Trung, Q. Thủ Đức, TP.HCM', 'Điện thoại: (08) 37244270, Fax: (08) 37244271, Email: info@hcmiu.edu.vn', 1),
(14, 'QST', 'ĐH Khoa học Tự nhiên', '227, Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh ', 'Điện thoại: (84.8) 38 353 193, Fax: (84.8) 38 350 096', 1),
(15, 'RMU', 'ĐH Quốc tế RMIT', '21 Phạm Ngọc Thạch, Quận 3, Tp. Hồ Chí Minh', 'Điện thoại: (+848) 3776 1300, Fax: (+848) 3776 1399, Email: enquiries@rmit.edu.vn', 1),
(16, 'SGD', 'ĐH Sài Gòn', '273 An Dương Vương, Quận 5', 'Điện thoại: (84-8) 38.354409 - 38.352309, Fax: (84-8) 38.305568,Email: p_daotao@sgu.edu.vn, ttcntt@sgu.edu.vn', 1),
(17, 'SPK', 'ĐH Sư phạm Kỹ thuật TP.HCM', '1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh', 'Điện thoại: (+84 - 8) 38968641 - (+84 - 8) 38961333, Fax: (+84-8) 38964922, E-mail: pmo@hcmute.edu.vn', 1),
(18, 'SPS', 'ĐH Sư phạm', '280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh', 'Điện thoại: (+84) - (8) - 38352020, Fax: (+84) - (8) - 38398946', 1),
(19, 'TTQ', 'ĐH Tư thục Quốc tế Sài Gòn', '8C & 16 Tống Hữu Định, P.Thảo Điền, Q.2, Tp.HCM', 'Điện thoại: 08.54093929 - 08.54093930, Fax: 08.54093928, Email: admission@siu.edu.vn', 1),
(20, 'VPH', 'ĐH Trần Đại Nghĩa', '189 Đường Nguyễn Oanh, Phường 10, Quận Gò Vấp, Tp. Hồ Chí Minh', 'Điện thoại: +84.8.38940535, Email: admin@tdnu.edu.vn', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `specialization_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `specialization_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `specialization`
--

INSERT INTO `specialization` (`id`, `specialization_id`, `specialization_name`, `active`) VALUES
(1, 'WNET', 'Web Application Development Using .Net', 1),
(2, 'WJAVA', 'Web Application Development Using Java', 1),
(3, 'WNODE', 'Web Application Development Using Node.js', 1),
(4, 'WPHP', 'Web Application Development Using PHP', 1),
(5, 'WRUBY', 'Web Application Development Using Ruby on Rails', 1),
(6, 'WiOS', 'Mobile Application Development For iOS', 1),
(7, 'WA', 'Mobile Application Development For Android', 1),
(8, 'ST', 'Software Testing', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `specialization_subject`
--

CREATE TABLE `specialization_subject` (
  `specialization` int(11) NOT NULL,
  `subject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `specialization_subject`
--

INSERT INTO `specialization_subject` (`specialization`, `subject`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 19),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 9),
(2, 19),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 10),
(3, 19),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 11),
(4, 19),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 12),
(5, 19),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 15),
(6, 16),
(6, 19),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 13),
(7, 14),
(7, 19),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 17),
(8, 18),
(8, 19);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student`
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

--
-- Đang đổ dữ liệu cho bảng `student`
--

INSERT INTO `student` (`id`, `student_id`, `username`, `password`, `firstname`, `lastname`, `gender`, `birthday`, `email`, `phone`, `address`, `school`, `intake`, `entrance_exam`, `specialization`, `image`, `status`) VALUES
(1, 'ISC01-17-1-0001', 'aiminh', '$2a$06$lVeIkFly4MtGMTShW6/sHe2cpq5dI.Efcvpu/MWgOsLJXNSejK5wu', 'Ái', 'Minh Thiên', 1, '1995-08-15', 'ai.minhthien@gmail.com', '0929100123', '169 Võ Thị Sáu, P.2,Q.3,TP.HCM', 5, 1, 2, 5, 'minhthienai.jpg', 'Studying'),
(2, 'ISC01-17-1-0002', 'anhnhat', '$2a$06$cpHG3RzXidvXAxK0RcNlPuSESrFQ80k/4dHlFPh4sHlWMqWO9yddq', 'Anh', 'Nhật Kim', 1, '1995-03-26', 'anh.nhatkim@gmail.com', '0938028980', '754 Nguyễn Trãi, P.11,Q.5,TP.HCM', 1, 1, 1, 2, 'nhatkimanh.jpg', 'Studying'),
(3, 'ISC01-17-0-0003', 'dungcao', '$2a$06$95AYPaG38o9M839xjW/kfOpP9nDBQ/wObbpJcLhdwINKxxJgyXb2.', 'Dũng', 'Cao Chí', 0, '1995-02-27', 'dung.caochi@gmail.com', '0933073234', '207 Đội Cung, P.9,Q.11,TP.HCM', 4, 1, 2, 2, 'caochidung.png', 'Studying'),
(4, 'ISC01-17-1-0004', 'haho', '$2a$06$0pZadSLfUr9vG9WSRxpDN.YHZ63kuU0kvPJsVnpOXynUPRR7.vWja', 'Hà', 'Hồ Ngọc', 1, '1995-11-22', 'ha.hongoc@gmail.com', '0934064789', '15 Hoàng Văn Thái, P.Tân Phú ,Q.7,TP.HCM', 3, 1, 2, 1, 'hongocha.jpg', 'Studying'),
(5, 'ISC01-17-1-0005', 'huongho', '$2a$06$W/peastmFaEXNEZrM14Om.wC/XVWfHCkICFN1LzZ05IFgJ9cmJVA2', 'Hương', 'Hồ Xuân', 1, '1995-04-12', 'huong.hoxuan@gmail.com', '0932082547', '138 Tạ Uyên, P.6,Q.11,TP.HCM', 4, 1, 2, 3, 'hoxuanhuong.jpg', 'Studying'),
(6, 'ISC01-17-0-0006', 'khoalang', '$2a$06$QDPBi68sc4HvCtPptweBrevuUZtPGPm65/KJ9tg8UcRlQ0sB2eesu', 'Khoa', 'Lăng Tiến', 0, '1995-06-29', 'khoa.langtien@gmail.com', '0924155687', '1155 Phan Văn Trị, P.10,Q.Gò Vấp,TP.HCM', 8, 1, 3, 5, 'langtienkhoa.png', 'Studying'),
(7, 'ISC01-17-1-0007', 'kieudap', '$2a$06$6GnnXj4KU6lOLaUa/ns3y.t09pG1VSU2n583jy3vxZlRv86g8Jw6m', 'Kiều', 'Đạp Thuý', 1, '1995-12-29', 'kieu.dapthuy@gmail.com', '0923164387', '45 Trần Thị Nghĩ, P.7,Q.Gò Vấp,TP.HCM', 8, 1, 3, 1, 'dapthuykieu.png', 'Studying'),
(8, 'ISC01-17-0-0008', 'minhtruong', '$2a$06$8kIrUm/B02Chtgz2j2dhO.wevuCHl7f9obVL7Pj7nwttJbCTwxV9q', 'Minh', 'Trương Thanh', 0, '1995-03-08', 'minh.truongthanh@gmail.com', '0926137598', '935 Quang Trung, P.14,Q.12,TP.HCM', 7, 1, 2, 3, 'truongthanhminh.png', 'Studying'),
(9, 'ISC01-17-1-0009', 'ngockhai', '$2a$06$cwSlC1wTCtgqHeCq17FaeeiqJX/tmml1WVjLfHlfAc6EjC.6VxX.a', 'Ngọc', 'Khai Minh', 1, '1995-07-01', 'ngoc.khaiminh@gmail.com', '0936046566', '169 Bùi Minh Trực, P.5,Q.8,TP.HCM', 2, 1, 1, 4, 'khaiminhngoc.jpg', 'Studying'),
(10, 'ISC01-17-0-0010', 'nguyentran', '$2a$06$BCR6WbIbLSlnPjV/5a9AA.76kczfwya3p4n9lZ.QFSM70neJZKtFK', 'Nguyên', 'Trần Khai', 0, '1995-05-20', 'nguyen.trankhai@gmail.com', '0937037762', '250 Tùng Thiện Vương, P.11,Q.8,TP.HCM', 2, 1, 1, 3, 'trankhainguyen.png', 'Studying'),
(11, 'ISC01-17-0-0011', 'nhatnguyen', '$2a$06$v01CHm3tG1eK.RlHMGNKyOVT.Ofh5xQ5.pNZZoxbxfvexniv6TCWG', 'Nhật', 'Nguyễn Minh', 0, '1995-01-18', 'nhat.nguyenminh@gmail.com', '0939019506', '99 Nguyễn Tri Phương, P.7,Q.5,TP.HCM', 1, 1, 1, 1, 'nguyenminhnhat.png', 'Studying'),
(12, 'ISC01-17-0-0012', 'phatphan', '$2a$06$73DP//2b71v0Zs8bp9J.s.eaXomNSFeVFq/QcFCHgiH1694DtKGv.', 'Phát', 'Phan Tiến', 0, '1995-09-09', 'phat.phantien@gmail.com', '0935055721', '15 Nguyễn Hữu Thọ, P.Tân Phong,Q.7,TP.HCM', 3, 1, 1, 5, 'phantienphat.png', 'Studying'),
(13, 'ISC01-17-1-0013', 'phupham', '$2a$06$c.u48xtPLXQdmhLaoNSaROiUj3.Spo/DJroVwCjdDs5GucmFKETj.', 'Phú', 'Phạm Hồng', 1, '1995-08-11', 'phu.phamhong@gmail.com', '0925146084', '153 Quang Trung, P.Đông Hưng Thuận,Q.12,TP.HCM', 7, 1, 2, 4, 'phamhongphu.png', 'Studying'),
(14, 'ISC01-17-0-0014', 'phuctran', '$2a$06$uUDfRkYoZdOjff.BWuOzIOaVi.plJNqvpQgghSGT3lIRzrmudzKmm', 'Phúc', 'Trần Tiến', 0, '1995-01-31', 'phuc.trantien@gmail.com', '0963191318', '15 Nguyễn Thái Bình, P.4,Q.9,TP.HCM', 10, 1, 3, 4, 'trantienphuc.png', 'Studying'),
(15, 'ISC01-17-1-0015', 'phuocla', '$2a$06$uvFDzc1KkNBjWvMPZk4jgurRisYQDHcxUC/NHqRgtcTkAxStCyH5e', 'Phước', 'Lã Minh', 1, '1995-10-10', 'phuoc.laminh@gmail.com', '0921182400', '10 Nguyên Văn Bảo, P.4,Q.2,TP.HCM', 9, 1, 3, 3, 'laminhphuoc.png', 'Studying'),
(16, 'ISC01-17-0-0016', 'soncao', '$2a$06$4li.03BlsMuiDTuJPe3hOO3MW4iE.wyO9GOd5QpOU/l85xuzpvx7q', 'Sơn', 'Cao Thái', 0, '1995-10-24', 'son.caothai@gmail.com', '0928119753', '191 Phạm Phú Thứ, P.4,Q.6,TP.HCM', 6, 1, 2, 1, 'caothaison.png', 'Studying'),
(17, 'ISC01-17-1-0017', 'tammy', '$2a$06$PrB6TMB9ylUjBSFKBEEl6OwsaBz6bQbq5cdHFNMZ0VFFsfQzi5M6G', 'Tâm', 'Mỹ', 1, '1995-07-22', 'tam.my@gmail.com', '0964200672', '22 Đường số 4, P.Trường Thọ,Q.9,TP.HCM', 10, 1, 3, 5, 'mytam.png', 'Studying'),
(18, 'ISC01-17-0-0018', 'tiendo', '$2a$06$WYfiOHLnyZCiYuOZFOYJg.NoD/rwHwh.U6oXXzKXd7ZoZOHUlz2ru', 'Tiến', 'Đỗ Thăng', 0, '1995-09-11', 'tien.dothang@gmail.com', '0922173299', '157 Nguyễn Trọng Tuyến, P.8,Q.2,TP.HCM', 9, 1, 3, 2, 'dothangtien.png', 'Studying'),
(19, 'ISC01-17-1-0019', 'trinhnguyen', '$2a$06$3k4bjQ.JpUseQV/a6juG8u9z5ulfeewf4eOpos/KaC354FJOjvB36', 'Trinh', 'Nguyễn Ngọc', 1, '1995-12-02', 'trinh.nguyenngoc@gmail.com', '0927128742', '105 Trần Văn Kiếu, P.10,Q.6,TP.HCM', 6, 1, 2, 2, 'nguyenngoctrinh.png', 'Studying'),
(20, 'ISC01-17-0-0020', 'tungcao', '$2a$06$CAFO9sR5K1toCC3LxZdEaO9HJaLjUaXvFwO5UiIBLdcr.UjDbeloa', 'Tùng', 'Cao Sơn', 0, '1995-06-18', 'tung.caoson@gmail.com', '0931091982', '96 Nguyễn Thiện Thuật, P.2,Q.3,TP.HCM', 5, 1, 2, 4, 'caosontung.png', 'Studying'),
(21, 'ISC02-17-1-0001', 'anhhoang', '$2a$06$qGDvVQ.sEihy44NwyEUPMOj7alFLTqqb2V1fwCRWZjnR1OfoQMGzS', 'Anh', 'Hoàng Nguyệt', 1, '1995-11-17', 'anh.hoangnguyet@gmail.com', '0988791385', '25 Đường số 4, P.Trường Thọ,Q.9,TP.HCM', 19, 2, 6, 6, 'hoangnguyetanh.png', 'Studying'),
(22, 'ISC02-17-0-0002', 'biluu', '$2a$06$2uVbRTihxKebAuDXQcprJ.3UDE5DvvFQ.JXe/YuxXcBhz2SgkqzO2', 'Bị', 'Lưu', 0, '1995-10-02', 'bi.luu@gmail.com', '0948091543', '300 Tùng Thiện Vương, P.11,Q.8,TP.HCM', 15, 2, 5, 2, 'luubi.png', 'Studying'),
(23, 'ISC02-17-1-0003', 'binhquan', '$2a$06$p6LENpPbqX0KmxDi/IgZW.eAXmVNe7iz57jCqR9P7h8rGAL4u2ynS', 'Bình', 'Quan Ngân', 1, '1995-03-04', 'binh.quangngan@gmail.com', '0968391034', '133 Quang Trung, P.Đông Hưng Thuận,Q.12,TP.HCM', 17, 2, 5, 5, 'quangnganbinh.png', 'Studying'),
(24, 'ISC02-17-0-0004', 'bola', '$2a$06$HhYf/M7Nzfo1hVHU6f/P8eog23yBnHJrrDZwLXhpa0z.YEn.AcwAm', 'Bố', 'Lã', 0, '1995-02-16', 'bo.la@gmail.com', '0908291948', '455 Nguyễn Trãi, P.11,Q.5,TP.HCM', 11, 2, 4, 2, 'labo.png', 'Studying'),
(25, 'ISC02-17-0-0005', 'caihoang', '$2a$06$YmeNwhUL2NCOn2CHNQXyKOmo97mZjUtWQUBajwI0Jzjg9mEHeovnq', 'Cái', 'Hoàng', 0, '1995-06-29', 'cai.hoang@gmail.com', '0928691305', '1009 Phan Văn Trị, P.10,Q.Gò Vấp,TP.HCM', 13, 2, 4, 6, 'hoangcai.jpg', 'Studying'),
(26, 'ISC02-17-0-0006', 'duchu', '$2a$06$9PCPb7QF32GkVfLA0WqX6.9EFwN/GsA4FniU.VAq2O78sBXYZ5pui', 'Du', 'Chu', 0, '1995-04-02', 'du.chu@gmail.com', '0918491123', '56 Hoàng Văn Thái, P.Tân Phú ,Q.7,TP.HCM', 12, 2, 4, 4, 'chudu.png', 'Studying'),
(27, 'ISC02-17-0-0007', 'donhau', '$2a$06$k6uPVkc8PN3DhZCgGd.T9epZJJ16RQcWsRYbQzKr9a2FbIB70SprK', 'Đôn', 'Hạ Hầu', 0, '1995-01-24', 'don.hahau@gmail.com', '0988891203', '167 Nguyễn Trọng Tuyến, P.8,Q.2,TP.HCM', 19, 2, 6, 7, 'hahaudon.png', 'Studying'),
(28, 'ISC02-17-1-0008', 'huongton', '$2a$06$hxkUQlwvL226tplQJBOzd.giVzBvRlnXg9UUVRPR2ysvJSC6RBbxm', 'Hương', 'Tôn Thượng', 1, '1995-02-02', 'huong.tonthuong@gmail.com', '0998991204', '105 Trần Văn Kiếu, P.10,Q.6,TP.HCM', 20, 2, 6, 8, 'tonthuonghuong.jpg', 'Studying'),
(29, 'ISC02-17-1-0009', 'kieudai', '$2a$06$AnbyXsr6J.9ZUq4wGJg8qeVSXFC4ImaJ9I3JBdwTQ/7YC7Wkat2Hu', 'Kiều', 'Đại', 1, '1995-11-15', 'kieu.dai@gmail.com', '0958191024', '66 Nguyễn Tri Phương, P.7,Q.5,TP.HCM', 16, 2, 5, 3, 'daikieu.jpg', 'Studying'),
(30, 'ISC02-17-1-0010', 'kieutieu', '$2a$06$46qIrV4o8m6H/fr7xSW2POjipek/lDqR2DranEHO6C9eNCm.aIoOe', 'Kiều', 'Tiểu', 1, '1995-09-28', 'kieu.tieu@gmail.com', '0948991278', '458 Bùi Minh Trực, P.5,Q.8,TP.HCM', 15, 2, 5, 1, 'tieukieu.jpg', 'Studying'),
(31, 'ISC02-17-0-0011', 'lieutruong', '$2a$06$KNOdHCn/OlPvd3GFPE.iGeYeKnW1yqankYKDplWLzAJyKHYfDdCgK', 'Liêu', 'Trương', 0, '1995-12-20', 'lieu.truong@gmail.com', '0958291983', '10 Nguyễn Hữu Thọ, P.Tân Phong,Q.7,TP.HCM', 16, 2, 5, 4, 'truonglieu.png', 'Studying'),
(32, 'ISC02-17-1-0012', 'longco', '$2a$06$acCRwmqAd.GbiJwYxSu4TehUVmAU.SJXmqlgsJVyntGIH6EUvYNd2', 'Long', 'Cô', 1, '1995-07-05', 'long.co@gmail.com', '0938791455', '22 Trần Thị Nghĩ, P.7,Q.Gò Vấp,TP.HCM', 14, 2, 4, 7, 'colong.jpg', 'Studying'),
(33, 'ISC02-17-1-0013', 'nhuocchu', '$2a$06$F1VYAfsDcJS6900zAr0ncOlsIimIZhWsMUKIfxcaA/KCchyUTsqNi', 'Nhược', 'Chu Chỉ', 1, '1995-01-04', 'nhuoc.chuchi@gmail.com', '0908191233', '152 Võ Thị Sáu, P.2,Q.3,TP.HCM', 11, 2, 4, 1, 'chuchinhuoc.jpg', 'Studying'),
(34, 'ISC02-17-0-0014', 'ninhcam', '$2a$06$6HhP.I2dTD9j49LILYUu7uvjY/Bbdi840bR8UBhVYdkumkTL78Z1K', 'Ninh', 'Cam', 0, '1995-05-15', 'ninh.cam@gmail.com', '0968491027', '20 Nguyễn Thái Bình, P.4,Q.9,TP.HCM', 17, 2, 5, 6, 'camninh.png', 'Studying'),
(35, 'ISC02-17-1-0015', 'nuongbao', '$2a$06$ER.yw8l5Yb5M02xmBnBbh.X2aOkZ7rUA7VbOJLt0pIU8IMuwOIsee', 'Nương', 'Bảo Tam', 1, '1995-06-22', 'nuong.baotam@gmail.com', '0978591498', '11 Nguyên Văn Bảo, P.4,Q.2,TP.HCM', 18, 2, 6, 7, 'baotamnuong.png', 'Studying'),
(36, 'ISC02-17-0-0016', 'sachton', '$2a$06$3N4heBlZNlPguiwObtsFT.WPaKy2Nvs.oEFkbJpK1YaJBxyNzIZYy', 'Sách', 'Tôn', 0, '1995-08-13', 'sach.ton@gmail.com', '0938891678', '478 Quang Trung, P.14,Q.12,TP.HCM', 14, 2, 5, 8, 'tonsach.png', 'Studying'),
(37, 'ISC02-17-0-0017', 'sieuma', '$2a$06$e/PpgMHNbE2l5DnNkzXjxOSi6kSKuRHJbfACKQbM/dUIjImwGzK3.', 'Siêu', 'Mã', 0, '1995-04-15', 'sieu.ma@gmail.com', '0998091549', '69 Nguyễn Thiện Thuật, P.2,Q.3,TP.HCM', 20, 2, 6, 8, 'masieu.jpg', 'Studying'),
(38, 'ISC02-17-0-0018', 'thaotao', '$2a$06$40/PpANZ3a5Aaq.nosf16usGotyyqGKO9ENHrnvkdLDFqsilM3Noi', 'Tháo', 'Tào', 0, '1995-09-01', 'thao.tao@gmail.com', '0978691028', '181 Phạm Phú Thứ, P.4,Q.6,TP.HCM', 18, 2, 6, 8, 'taothao.png', 'Studying'),
(39, 'ISC02-17-1-0019', 'tutieu', '$2a$06$45NDsOmVQKym6X8JOHk9mOj2Ebj09Jxn2SC8FGs1Kqxa/rH4cyThO', 'Tử', 'Tiểu Yến', 1, '1995-03-24', 'tu.tieuyeu@gmail.com', '0918391555', '123 Đội Cung, P.9,Q.11,TP.HCM', 12, 2, 4, 3, 'tieuyentu.jpg', 'Studying'),
(40, 'ISC02-17-1-0020', 'vitu', '$2a$06$cWgfGsxytGF.srFHcsCVTOcaA/3rQuzqxjynG1R0czuOY.nZskhja', 'Vi', 'Tử', 1, '1995-05-17', 'vi.tu@gmail.com', '0928591879', '67 Tạ Uyên, P.6,Q.11,TP.HCM', 13, 2, 4, 5, 'tuvi.jpg', 'Studying');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subject`
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
-- Đang đổ dữ liệu cho bảng `subject`
--

INSERT INTO `subject` (`id`, `subject_id`, `subject_name`, `credit`, `hour`, `description`, `active`) VALUES
(1, 'G01', 'Working Process', 1, 12, 'The course equips learners with the knowledge and skills to work under the SCRUM model, which is the most effective and current model of working in software development.', 1),
(2, 'G02', 'Critical Thinking', 2, 24, 'The subject helps learners to think clearly and reasonably, connecting logic between ideas; Identify, construct and evaluate arguments; Detects common inconsistencies and errors in reasoning; Problem solving systematically ... With critical thinking, students are able to communicate positively in teamwork.', 1),
(3, 'G03', 'Professional Speaking', 2, 24, 'This course helps the trainees to clearly see the causes of their limitations in dealing with foreigners and presentation skills. Presenting good information is the most informative in the shortest possible time. At the end of this course, students will know the causes of the problem when communicating with foreigners.', 1),
(4, 'G04', 'Technical Writing', 2, 24, 'Writing is an important skill in teamwork when communicating in writing. Good writing skills make it less time consuming for the reader to understand the text and the text that are needed in the format available. Good text helps the reader do not misunderstand, does not take time to ask the missing issues.', 1),
(5, 'G05', 'Software Testing Process', 1, 12, 'Training subjects so that trainees are able to perform the testing process of a software application.', 1),
(6, 'G06', 'Database Management Systems', 2, 24, 'The course provides students with general knowledge of database management systems, giving students the ability to choose a specific database management system for a particular application.', 1),
(7, 'G07', 'Front End', 2, 24, 'The subject introduces tools, ways to design a website interface, write code processing website according to customer requirements.', 1),
(8, 'N01', '.NET Back-End', 3, 36, 'This course provides .NET knowledge to build server-side interactive and web-based systems.', 1),
(9, 'J01', 'Java Back-End', 3, 36, 'The course provides Java-based knowledge to handle website requests on the server side', 1),
(10, 'S01', 'Node.js Back-End', 3, 36, 'The subject provides knowledge on Node.js as well as libraries for writing server side processing.', 1),
(11, 'P01', ' PHP Back-End', 3, 36, 'The subject provides PHP knowledge to handle website requests on the server side.', 1),
(12, 'R01', 'Ruby on Rails Back-End', 3, 36, 'This course guides learners in designing and building a Web application that uses a complete Rails database', 1),
(13, 'A01', 'Basic Android Programming', 3, 36, 'The course provides students with basic knowledge of application programming running on Android devices.', 1),
(14, 'A02', 'Advanced Android Programming', 4, 48, 'The course provides students with advanced knowledge of Android programming.', 1),
(15, 'I01', 'Swift Fundamental', 3, 36, 'This course introduces the basic concepts in Swift programming. ', 1),
(16, 'I02', 'Developing iOS Application with Swift', 4, 48, 'The subject provides knowledge to students who can develop iOS devices using the Swift programming language application.', 1),
(17, 'T01', 'Security in Information Systems', 1, 12, 'The course provides learners with information safety knowledge for information systems.', 1),
(18, 'T02', 'Selenium', 4, 48, 'The course provides students with knowledge of Selenium tools in automated testing', 1),
(19, 'OJT', 'On-job Training', 15, 180, 'Project', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `entrance_exam`
--
ALTER TABLE `entrance_exam`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `entrance_exam_name` (`entrance_exam_name`),
  ADD KEY `entrance_exam_intake_fk` (`intake`);

--
-- Chỉ mục cho bảng `instructor`
--
ALTER TABLE `instructor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `intake`
--
ALTER TABLE `intake`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `intake_id` (`intake_id`);

--
-- Chỉ mục cho bảng `registrar`
--
ALTER TABLE `registrar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Chỉ mục cho bảng `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `school_id` (`school_id`);

--
-- Chỉ mục cho bảng `specialization`
--
ALTER TABLE `specialization`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `specialization_id` (`specialization_id`);

--
-- Chỉ mục cho bảng `specialization_subject`
--
ALTER TABLE `specialization_subject`
  ADD PRIMARY KEY (`specialization`,`subject`),
  ADD KEY `subject` (`subject`);

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `student_id` (`student_id`),
  ADD UNIQUE KEY `student_id_2` (`student_id`),
  ADD KEY `school` (`school`),
  ADD KEY `intake` (`intake`),
  ADD KEY `school_2` (`school`),
  ADD KEY `student_entrance_exam_fk` (`entrance_exam`),
  ADD KEY `student_specialization_fk` (`specialization`);

--
-- Chỉ mục cho bảng `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `entrance_exam`
--
ALTER TABLE `entrance_exam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT cho bảng `instructor`
--
ALTER TABLE `instructor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT cho bảng `intake`
--
ALTER TABLE `intake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT cho bảng `registrar`
--
ALTER TABLE `registrar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT cho bảng `school`
--
ALTER TABLE `school`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT cho bảng `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT cho bảng `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT cho bảng `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `entrance_exam`
--
ALTER TABLE `entrance_exam`
  ADD CONSTRAINT `entrance_exam_intake_fk` FOREIGN KEY (`intake`) REFERENCES `intake` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `specialization_subject`
--
ALTER TABLE `specialization_subject`
  ADD CONSTRAINT `specialization_subject_ibfk_1` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `specialization_subject_ibfk_2` FOREIGN KEY (`subject`) REFERENCES `subject` (`id`) ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_entrance_exam_fk` FOREIGN KEY (`entrance_exam`) REFERENCES `entrance_exam` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_intake_fk` FOREIGN KEY (`intake`) REFERENCES `intake` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_school_fk` FOREIGN KEY (`school`) REFERENCES `school` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `student_specialization_fk` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
