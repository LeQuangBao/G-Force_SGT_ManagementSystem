-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2017 at 12:04 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `isc_sgt_managementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `intake`
--

CREATE TABLE `intake` (
  `id` int(11) NOT NULL,
  `intake_id` varchar(30) NOT NULL,
  `intake_name` varchar(30) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `intake`
--

INSERT INTO `intake` (`id`, `intake_id`, `intake_name`, `start_date`, `end_date`, `active`) VALUES
(1, 'IN001', 'Intake 1', '2017-01-06', '2017-05-30', 1),
(2, 'IN002', 'Intake 2', '2017-02-06', '2017-06-30', 1),
(3, 'IN003', 'Intake 3', '2017-03-06', '2017-07-30', 1),
(4, 'IN004', 'Intake 4', '2017-04-06', '2017-08-30', 1),
(5, 'IN005', 'Intake 5', '2017-05-06', '2017-10-30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `school`
--

CREATE TABLE `school` (
  `id` int(11) NOT NULL,
  `school_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `school_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contact` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`id`, `school_id`, `school_name`, `address`, `contact`, `active`) VALUES
(1, 'SGU', 'ĐH Sài Gòn', '273 An Dương Vương, Quận 5', '', 1),
(2, 'DKC', 'ĐH Công nghệ TP.HCM (HUTECH)', '475A Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM ', '', 1),
(3, 'SPK', 'ĐH Sư phạm Kỹ thuật TP.HCM', '1 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức, Thành phố Hồ Chí Minh', '', 1),
(4, 'DCT', 'ĐH Công nghiệp Thực phẩm TP.HCM', '140 Lê Trọng Tấn, P. Tây Thạnh, Q. Tân Phú, Tp. HCM', '', 1),
(5, 'DTM', 'ĐH Tài nguyên - Môi trường TP.HCM', '236B Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP. Hồ Chí Minh ', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `specialization`
--

CREATE TABLE `specialization` (
  `id` int(11) NOT NULL,
  `specialization_id` varchar(30) NOT NULL,
  `specialization_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL,
  `subject_id` varchar(30) NOT NULL,
  `subject_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `credit` float NOT NULL,
  `hour` int(11) NOT NULL,
  `description` text NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `subject_id`, `subject_name`, `credit`, `hour`, `description`, `active`) VALUES
(1, 'WP00', 'Working Process', 4, 40, 'A subject that teach you about how to work as a scrum team', 0),
(2, 'JV', 'Java', 3, 36, '', 1),
(3, 'FE', 'Front End', 3, 36, '', 1),
(4, 'DB', 'Database', 4, 48, '', 1),
(5, 'TA', 'Writing Email', 2, 24, '', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `intake`
--
ALTER TABLE `intake`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `intake_id` (`intake_id`);

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
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `intake`
--
ALTER TABLE `intake`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `specialization`
--
ALTER TABLE `specialization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
