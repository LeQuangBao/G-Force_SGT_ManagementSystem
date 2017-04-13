-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2017 at 06:16 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

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
  `date_start` date NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `intake` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `entrance_exam`
--

INSERT INTO `entrance_exam` (`id`, `entrance_exam_name`, `date_start`, `description`, `intake`) VALUES
(1, 'Entrance Exam Intake 1', '2017-04-06', '1st entrance exam', 1),
(2, 'Entrance Exam Intake 1', '2017-04-16', '2nd entrance exam', 1),
(3, 'Entrance Exam Intake 1', '2017-04-26', '3rd entrance exam', 1),
(4, 'Entrance Exam Intake 2', '2017-05-06', '1st entrance exam', 2),
(5, 'Entrance Exam Intake 2', '2017-05-16', '2nd entrance exam', 2),
(6, 'Entrance Exam Intake 2', '2017-05-26', '3rd entrance exam', 2),
(7, 'Entrance Exam Intake 3', '2017-06-06', '1st entrance exam', 3),
(8, 'Entrance Exam Intake 3', '2017-06-16', '2nd entrance exam', 3),
(9, 'Entrance Exam Intake 3', '2017-06-26', '3rd entrance exam', 3);

-- --------------------------------------------------------

--
-- Table structure for table `instructor`
--

CREATE TABLE `instructor` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
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
-- Dumping data for table `instructor`
--

INSERT INTO `instructor` (`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `degree`, `status`) VALUES
(1, 'namnguyen', '123456', 'Nam', 'Nguyễn Thành', '1961-01-10', 'nam.nguyenthanh@gmail.com', '01285758112', '40 Nguyễn Thị Minh Khai, P.2,Q1,TP.HCM', 'nguyenthanhnam.jpg', 'doctor', 1),
(2, 'vanly', '123456', 'Vân', 'Lý Thanh', '1972-02-12', 'van.lythanh@gmail.com', '01285758123', '2 Nguyễn Thị Định, P.3,Q2,TP.HCM', 'lythanhvan.jpg', 'doctor', 1),
(3, 'trucho', '123456', 'Trúc', 'Hồ Quỳnh', '1983-03-03', 'truc.hoquynh@gmail.com', '01285758134', '12 Nguyễn Đình Chiểu, P.4,Q3,TP.HCM', 'hoquynhtruc.jpg', 'doctor', 1),
(4, 'quangvu', '123456', 'Vũ', 'Quang', '1964-04-26', 'vu.quang@gmail.com', '01285758145', '16 Hoàng Diệu, P.5,Q4,TP.HCM', 'quangvu.jpg', 'doctor', 1),
(5, 'taima', '123456', 'Tài', 'Mã Văn', '1975-05-27', 'tai.mavan@gmail.com', '01285758156', '244 Nguyễn Trãi, P.6,Q5,TP.HCM', 'mavantai.jpg', 'doctor', 1),
(6, 'hongnguyen', '123456', 'Hồng', 'Nguyễn Thị', '1986-06-16', 'hong.nguyenthi@gmail.com', '01285758167', '22 Kinh Dương Vương, P.7,Q6,TP.HCM', 'nguyenthihong.jpg', 'Masters', 1),
(7, 'maitran', '123456', 'Mai', 'Trần Xuân', '1967-07-19', 'mai.tranxuan@gmail.com', '01285758178', ' 119 Huỳnh Tấn Phát, P.8,Q7,TP.HCM', 'tranxuanmai.jpg', 'Masters', 1),
(8, 'daohuynh', '123456', 'Đào', 'Huỳnh Anh', '1978-08-08', 'dao.huynhanh@gmail.com', '01285758189', '120 Phạm Hùng, P.9,Q8,TP.HCM', 'huynhanhdao.jpg', 'Masters', 1),
(9, 'haingo', '123456', 'Hải', 'Ngô Thanh', '1980-09-22', 'hai.ngothanh@gmail.com', '01285758190', '20 Tăng Nhơn Phú, P.10,Q9,TP.HCM', 'ngothanhhai.jpg', 'Masters', 1),
(10, 'quyenvo', '123456', 'Quyền', 'Võ Văn', '1980-10-02', 'quyen.vovan@gmail.com', '01285758201', '22 Ba Tháng Hai, P.11,Q10,TP.HCM', 'vovanquyen.jpg', 'University', 1);

-- --------------------------------------------------------

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
(1, 'IN001', 'Intake 1', '2017-05-06', '2017-10-30', 1),
(2, 'IN002', 'Intake 2', '2017-06-06', '2017-11-30', 1),
(3, 'IN003', 'Intake 3', '2017-07-06', '2017-12-30', 1),
(4, 'IN004', 'Intake 4', '2017-08-06', '2018-01-30', 1),
(5, 'IN005', 'Intake 5', '2017-09-06', '2018-03-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `registrar`
--

CREATE TABLE `registrar` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
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
-- Dumping data for table `registrar`
--

INSERT INTO `registrar` (`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `status`) VALUES
(1, 'quyenly', '123456', 'Quyên', 'Lý Kiều', '1978-01-12', 'quyen.lykieu@gmail.com', '0937229534', '12 Tân Hoá , P.1,Q.11,TP.HCM ', 'lykieuquyen.jpg', 1),
(2, 'quynhnguyen', '123456', 'Quỳnh', 'Nguyễn Mạnh', '1980-05-24', 'quynh.nguyenmanh@gmail.com', '0937229526', '856 Tạ Quang Bửu, P.5,Q.8,TP.HCM ', 'nguyenmanhquynh.jpg', 1),
(3, 'hungly', '123456', 'Hùng', 'Lý', '1981-07-27', 'hung.ly@gmail.com', '0937229571', '39485 Kha Vạn Cân, P.Linh Đông,Q.Thủ Đức,TP.HCM ', 'lyhung.jpg', 1),
(4, 'thaonguyen', '123456', 'Thảo', 'Nguyễn Thu', '1976-08-14', 'thao.nguyenthu@gmail.com', '0937229592', '132 Nguyễn Mình Hoàng, P.12,Q.Tân Bình,TP.HCM ', 'nguyenthuthao.jpg', 1),
(5, 'yenly', '123456', 'Yến', 'Lý', '1983-10-09', 'yen.ly@gmail.com', '0937229588', '582 Ba Tháng Hai, P.10,Q.10,TP.HCM ', 'lyyen.jpg', 1);

-- --------------------------------------------------------

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

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`id`, `school_id`, `school_name`, `address`, `contact`, `active`) VALUES
(1, 'SGD', 'ĐH Sài Gòn', '273 An Dương Vương, Quận 5', 'Điện thoại: (84-8) 38.354409 - 38.352309, Fax: (84-8) 38.305568,Email: p_daotao@sgu.edu.vn, ttcntt@sgu.edu.vn', 1),
(2, 'DKC', 'ĐH Công nghệ TP.HCM (HUTECH)', '475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM ', 'ĐT: (08) 5445 7777, Fax: (08) 5445 4444, Email: hutech@hutech.edu.vn', 1),
(3, 'SPK', 'ĐH Sư phạm Kỹ thuật TP.HCM', '1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh', 'Điện thoại: (+84 - 8) 38968641 - (+84 - 8) 38961333, Fax: (+84-8) 38964922, E-mail: pmo@hcmute.edu.vn', 1),
(4, 'DCT', 'ĐH Công nghiệp Thực phẩm TP.HCM', '140 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, Tp. HCM', 'Điện thoại: (08)38161673 - (08)38163319, Email: info@hufi.edu.vn', 1),
(5, 'DTM', 'ĐH Tài nguyên - Môi trường TP.HCM', '236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh ', 'Điện thoại: 08.38443006, Fax: 08.38449474 ', 1),
(6, 'QSC', 'ĐH Công nghệ Thông tin', 'Khu phố 6, P. Linh Trung,Quận Thủ Đức, Tp. Hồ Chí Minh', 'ĐT: (08) 372 52002, Fax: (08) 372 52148', 1),
(7, 'QSB', 'ĐH Bách khoa', '101 Nhà A1, 268 Lý Thường Kiệt, P. 14, Q.10, Tp. Hồ Chí Minh', 'Email: pdt@hcmut.edu.vn, Điện thoại: (08) 38 654 087', 1),
(8, 'QST', 'ĐH Khoa học Tự nhiên', '227, Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh ', 'Điện thoại: (84.8) 38 353 193, Fax: (84.8) 38 350 096', 1),
(9, 'SPS', 'ĐH Sư phạm', '280 An Dương Vương, Phường 4, Quận 5, TP. Hồ Chí Minh', 'ĐT: (+84) - (8) - 38352020, Fax: (+84) - (8) - 38398946', 1),
(10, 'DTH', 'ĐH Hoa Sen', 'Số 08 Nguyễn Văn Tráng, Q.1, Tp.HCM', 'Điện thoại:  08. 7309 1991, Fax:  08 3925 7851', 1);

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
(5, 'ST1', 'Software Testing', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization_subject`
--

CREATE TABLE `specialization_subject` (
  `specialization` int(11) NOT NULL,
  `subject` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `student_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gender` tinyint(4) NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `school` int(11) NOT NULL,
  `intake` int(11) NOT NULL,
  `entrance_exam` int(11) NOT NULL,
  `specialization` int(11) NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(1, 'WP', 'Working Process', 1, 8, 'A subject that teach you about how to work as a scrum team', 0),
(2, 'FE', 'Front End', 2, 16, 'Learn AngularJS, Bootstrap and JQuery', 1),
(3, 'DB', 'Database', 1, 8, 'Learn Entity-Relationship Model', 1),
(4, 'SK', 'Writing Email', 2, 16, 'Learn writing email', 1),
(5, 'SK2', 'Speaking Professionally', 2, 16, 'Learn speaking presentation', 1),
(6, 'BAP', 'Basic Android Programming', 2, 16, 'Learn basic android programming', 1),
(7, 'AAP', 'Advanced Android Programming', 3, 24, 'Learn advanced android programming', 1),
(8, 'BJP', 'Basic Java Programming', 2, 16, 'Learn basic java programming ', 1),
(9, 'AJP', 'Advanced Java Programming', 3, 24, 'Learn advanced java programming', 1),
(10, 'BANP', 'Basic ASP.NET Programming', 2, 16, 'Learn basic ASP.NET programming', 1),
(11, 'AANP', 'Advanced ASP.NET Programming', 3, 24, 'Learn advanced ASP.NET programming', 1),
(12, 'BCP', 'Basic C# Programming', 2, 16, 'Learn basic C# programming', 1),
(13, 'ACP', 'Advanced C# Programming', 3, 24, 'Learn advanced C# programming', 1),
(14, 'DW', 'Design Wesite', 2, 16, 'Learn Html5, css3, photoshop', 1),
(15, 'AT', 'Automation Test', 4, 32, 'Learn write sript automation test', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entrance_exam`
--
ALTER TABLE `entrance_exam`
  ADD PRIMARY KEY (`id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `instructor`
--
ALTER TABLE `instructor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `intake`
--
ALTER TABLE `intake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
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
  ADD CONSTRAINT `specialization_subject_ibfk_1` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `specialization_subject_ibfk_2` FOREIGN KEY (`subject`) REFERENCES `subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_entrance_exam_fk` FOREIGN KEY (`entrance_exam`) REFERENCES `entrance_exam` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_intake_fk` FOREIGN KEY (`intake`) REFERENCES `intake` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_school_fk` FOREIGN KEY (`school`) REFERENCES `school` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_specialization_fk` FOREIGN KEY (`specialization`) REFERENCES `specialization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
