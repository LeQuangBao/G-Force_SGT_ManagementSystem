-----intake
INSERT INTO `intake` (`id`, `intake_id`, `intake_name`, `start_date`, `end_date`, `active`) VALUES
(1, 'IN001', 'Intake 1', '2017-04-06', '2017-09-30', 1),
(2, 'IN002', 'Intake 2', '2017-05-06', '2017-10-30', 1),
(3, 'IN003', 'Intake 3', '2017-06-06', '2017-11-30', 1),
(4, 'IN004', 'Intake 4', '2017-07-06', '2018-12-30', 1),
(5, 'IN005', 'Intake 5', '2017-08-06', '2018-01-30', 1);

----school
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

----specialzation
INSERT INTO `specialization` (`id`, `specialization_id`, `specialization_name`, `active`) VALUES
(1, 'AD1', 'Android Development', 1),
(2, 'WD1', 'Web Development', 1),
(3, 'FD1', 'Web Front End', 1),
(4, 'BD1', 'Back End', 1),
(5, 'ST1', 'Software Testing', 1);

-----subject
INSERT INTO `subject` (`id`, `subject_id`, `subject_name`, `credit`, `hour`, `description`, `active`) VALUES
(1,'WP', 'Working Process',1,8, 'A subject that teach you about how to work as a scrum team', 0),
(2,'FE', 'Front End',2,16, 'Learn AngularJS, Bootstrap and JQuery', 1),
(3,'DB', 'Database',1,8, 'Learn Entity-Relationship Model', 1),
(4,'SK', 'Writing Email',2,16, 'Learn writing email', 1),
(5,'SK2','Speaking Professionally',2,16,'Learn speaking presentation',1),
(6,'BAP','Basic Android Programming',2,16,'Learn basic android programming',1),
(7,'AAP','Advanced Android Programming',3,24,'Learn advanced android programming',1),
(8,'BJP', 'Basic Java Programming',2,16, 'Learn basic java programming ', 1),
(9,'AJP','Advanced Java Programming',3,24,'Learn advanced java programming',1),
(10,'BANP','Basic ASP.NET Programming',2,16,'Learn basic ASP.NET programming',1),
(11,'AANP','Advanced ASP.NET Programming',3,24,'Learn advanced ASP.NET programming',1),
(12,'BCP','Basic C# Programming',2,16,'Learn basic C# programming',1),
(13,'ACP','Advanced C# Programming',3,24,'Learn advanced C# programming',1),
(14,'DW','Design Wesite',2,16,'Learn Html5, css3, photoshop',1),
(15,'AT','Automation Test',4,32,'Learn write sript automation test',1);


-----------instuctor
INSERT INTO `instructor`(`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `degree`, `status`) VALUES
(1,'namnguyen','123456','Nam','Nguyễn Thành','1961-01-10','nam.nguyenthanh@gmail.com','01285758112','40 Nguyễn Thị Minh Khai, P.2,Q1,TP.HCM','nguyenthanhnam.jpg','doctor',1),
(2,'vanly','123456','Vân','Lý Thanh','1972-02-12','van.lythanh@gmail.com','01285758123','2 Nguyễn Thị Định, P.3,Q2,TP.HCM','lythanhvan.jpg','doctor',1),
(3,'trucho','123456','Trúc','Hồ Quỳnh','1983-03-03','truc.hoquynh@gmail.com','01285758134','12 Nguyễn Đình Chiểu, P.4,Q3,TP.HCM','hoquynhtruc.jpg','doctor',1),
(4,'quangvu','123456','Vũ','Quang','1964-04-26','vu.quang@gmail.com','01285758145','16 Hoàng Diệu, P.5,Q4,TP.HCM','quangvu.jpg','doctor',1),
(5,'taima','123456','Tài','Mã Văn','1975-05-27','tai.mavan@gmail.com','01285758156','244 Nguyễn Trãi, P.6,Q5,TP.HCM','mavantai.jpg','doctor',1),
(6,'hongnguyen','123456','Hồng','Nguyễn Thị','1986-06-16','hong.nguyenthi@gmail.com','01285758167','22 Kinh Dương Vương, P.7,Q6,TP.HCM','nguyenthihong.jpg','Masters',1),
(7,'maitran','123456','Mai','Trần Xuân','1967-07-19','mai.tranxuan@gmail.com','01285758178',' 119 Huỳnh Tấn Phát, P.8,Q7,TP.HCM','tranxuanmai.jpg','Masters',1),
(8,'daohuynh','123456','Đào','Huỳnh Anh','1978-08-08','dao.huynhanh@gmail.com','01285758189','120 Phạm Hùng, P.9,Q8,TP.HCM','huynhanhdao.jpg','Masters',1),
(9,'haingo','123456','Hải','Ngô Thanh','1980-09-22','hai.ngothanh@gmail.com','01285758190','20 Tăng Nhơn Phú, P.10,Q9,TP.HCM','ngothanhhai.jpg','Masters',1),
(10,'quyenvo','123456','Quyền','Võ Văn','1980-10-02','quyen.vovan@gmail.com','01285758201','22 Ba Tháng Hai, P.11,Q10,TP.HCM','vovanquyen.jpg','University',1);


------entrance exam
INSERT INTO `entrance_exam`(`id`, `entrance_exam_name`, `date_start`, `description`, `intake`) VALUES
(1,'Entrance Exam Intake 1','2017-03-06','1st entrance exam',1),
(2,'Entrance Exam Intake 1','2017-03-16','2nd entrance exam',1),
(3,'Entrance Exam Intake 1','2017-03-26','3rd entrance exam',1),
(4,'Entrance Exam Intake 2','2017-04-06','1st entrance exam',2),
(5,'Entrance Exam Intake 2','2017-04-16','2nd entrance exam',2),
(6,'Entrance Exam Intake 2','2017-04-26','3rd entrance exam',2),
(7,'Entrance Exam Intake 3','2017-05-06','1st entrance exam',3),
(8,'Entrance Exam Intake 3','2017-05-16','2nd entrance exam',3),
(9,'Entrance Exam Intake 3','2017-05-26','3rd entrance exam',3),
(10,'Entrance Exam Intake 4','2017-06-06','1st entrance exam',4),
(11,'Entrance Exam Intake 4','2017-06-16','2nd entrance exam',4),
(12,'Entrance Exam Intake 4','2017-06-26','3rd entrance exam',4);

------registrar
INSERT INTO `registrar`(`id`, `username`, `password`, `firstname`, `lastname`, `birthday`, `email`, `phone`, `address`, `image`, `status`) VALUES 
(1,'quyenly','123456','Quyên','Lý Kiều','1978-01-12','quyen.lykieu@gmail.com','0937229534','12 Tân Hoá , P.1,Q.11,TP.HCM ','lykieuquyen.jpg',1),
(2,'quynhnguyen','123456','Quỳnh','Nguyễn Mạnh','1980-05-24','quynh.nguyenmanh@gmail.com','0937229526','856 Tạ Quang Bửu, P.5,Q.8,TP.HCM ','nguyenmanhquynh.jpg',1),
(3,'hungly','123456','Hùng','Lý','1981-07-27','hung.ly@gmail.com','0937229571','39485 Kha Vạn Cân, P.Linh Đông,Q.Thủ Đức,TP.HCM ','lyhung.jpg',1),
(4,'thaonguyen','123456','Thảo','Nguyễn Thu','1976-08-14','thao.nguyenthu@gmail.com','0937229592','132 Nguyễn Mình Hoàng, P.12,Q.Tân Bình,TP.HCM ','nguyenthuthao.jpg',1),
(5,'yenly','123456','Yến','Lý','1983-10-09','yen.ly@gmail.com','0937229588','582 Ba Tháng Hai, P.10,Q.10,TP.HCM ','lyyen.jpg',1);


-----student
INSERT INTO `student`(`id`, `student_id`, `username`, `password`, `firstname`, `lastname`, `gender`, `email`, `phone`, `address`, `school`, `intake`, `entrance_exam`, `specialization`, `image`, `status`) VALUES
(1,'ISC01-17-0-0001','nhatnguyen','123456','Nhật','Nguyễn Minh','Nam','nhat.nguyenminh@gmail.com','0939019506','99 Nguyễn Tri Phương, P.7,Q.5,TP.HCM','SGD','1','1','1','nguyenminhnhat.jpg','Studying'),
(2,'ISC01-17-1-0002','anhnhat','123456','Anh','Nhật Kim','Nữ','anh.nhatkim@gmail.com','0938028980','754 Nguyễn Trãi, P.11,Q.5,TP.HCM','SGD','1','1','2','nhatkimanh.jpg','Studying'),
(3,'ISC01-17-0-0003','nguyentran','123456','Nguyên','Trần Khai','Nam','nguyen.trankhai@gmail.com','0937037762','250 Tùng Thiện Vương, P.11,Q.8,TP.HCM','DKC','1','1','3','trankhainguyen.jpg','Studying'),
(4,'ISC01-17-1-0004','ngockhai','123456','Ngọc','Khai Minh','Nữ','ngoc.khaiminh@gmail.com','0936046566','169 Bùi Minh Trực, P.5,Q.8,TP.HCM','DKC','1','1','4','khaiminhngoc.jpg','Studying'),
(5,'ISC01-17-0-0005','phatphan','123456','Phát','Phan Tiến','Nam','phat.phantien@gmail.com','0935055721','15 Nguyễn Hữu Thọ, P.Tân Phong,Q.7,TP.HCM','SPK','1','1','5','phantienphat.jpg','Studying'),
(6,'ISC01-17-1-0006','haho','123456','Hà','Hồ Ngọc','Nữ','ha.hongoc@gmail.com','0934064789','15 Hoàng Văn Thái, P.Tân Phú ,Q.7,TP.HCM','SPK','1','2','1','hongocha.jpg','Studying'),
(7,'ISC01-17-0-0007','dungcao','123456','Dũng','Cao Chí','Nam','dung.caochi@gmail.com','0933073234','207 Đội Cung, P.9,Q.11,TP.HCM','DCT','1','2','2','caochidung.jpg','Studying'),
(8,'ISC01-17-1-0008','huongho','123456','Hương','Hồ Xuân','Nữ','huong.hoxuan@gmail.com','0932082547','138 Tạ Uyên, P.6,Q.11,TP.HCM','DCT','1','2','3','hoxuanhuong.jpg','Studying'),
(9,'ISC01-17-0-0009','tungcao','123456','Tùng','Cao Sơn','Nam','tung.caoson@gmail.com','0931091982','96 Nguyễn Thiện Thuật, P.2,Q.3,TP.HCM','DTM','1','2','4','caosontung.jpg','Studying'),
(10,'ISC01-17-1-0010','aiminh','123456','Ái','Minh Thiên','Nữ','ai.minhthien@gmail.com','0929100123','169 Võ Thị Sáu, P.2,Q.3,TP.HCM','DTM','1','2','5','minhthienai.jpg','Studying'),
(11,'ISC01-17-0-0011','soncao','123456','Sơn','Cao Thái','Nam','son.caothai@gmail.com','0928119753','191 Phạm Phú Thứ, P.4,Q.6,TP.HCM','QSC','1','2','1','caothaison.jpg','Studying'),
(12,'ISC01-17-1-0012','trinhnguyen','123456','Trinh','Nguyễn Ngọc','Nữ','trinh.nguyenngoc@gmail.com','0927128742','105 Trần Văn Kiếu, P.10,Q.6,TP.HCM','QSC','1','2','2','nguyenngoctrinh.jpg','Studying'),
(13,'ISC01-17-0-0013','minhtruong','123456','Minh','Trương Thanh','Nam','minh.truongthanh@gmail.com','0926137598','935 Quang Trung, P.14,Q.12,TP.HCM','QSB','1','2','3','truongthanhminh.jpg','Studying'),
(14,'ISC01-17-1-0014','phupham','123456','Phú','Phạm Hồng','Nữ','phu.phamhong@gmail.com','0925146084','153 Quang Trung, P.Đông Hưng Thuận,Q.12,TP.HCM','QSB','1','2','4','phamhongphu.jpg','Studying'),
(15,'ISC01-17-0-0015','khoalang','123456','Khoa','Lăng Tiến','Nam','khoa.langtien@gmail.com','0924155687','1155 Phan Văn Trị, P.10,Q.Gò Vấp,TP.HCM','QST','1','3','5','langtienkhoa.jpg','Studying'),
(16,'ISC01-17-1-0016','kieudap','123456','Kiều','Đạp Thuý','Nữ','kieu.dapthuy@gmail.com','0923164387','45 Trần Thị Nghĩ, P.7,Q.Gò Vấp,TP.HCM','QST','1','3','1','dapthuykieu.jpg','Studying'),
(17,'ISC01-17-0-0017','tiendo','123456','Tiến','Đỗ Thăng','Nam','tien.dothang@gmail.com','0922173299','157 Nguyễn Trọng Tuyến, P.8,Q.2,TP.HCM','SPS','1','3','2','dothangtien.jpg','Studying'),
(18,'ISC01-17-1-0018','phuocla','123456','Phước','Lã Minh','Nữ','phuoc.laminh@gmail.com','0921182400','10 Nguyên Văn Bảo, P.4,Q.2,TP.HCM','SPS','1','3','3','laminhphuoc.jpg','Studying'),
(19,'ISC01-17-0-0019','phuctran','123456','Phúc','Trần Tiến','Nam','phuc.trantien@gmail.com','0963191318','15 Nguyễn Thái Bình, P.4,Q.9,TP.HCM','DTH','1','3','4','trantienphuc.jpg','Studying'),
(20,'ISC01-17-1-0020','tammy','123456','Tâm','Mỹ','Nữ','tam.my@gmail.com','0964200672','Đường số 4, P.Trường Thọ,Q.9,TP.HCM','DTH','1','3','5','mytam.jpg','Studying');


-----specialization_subject
INSERT INTO `specialization_subject`(`specialization`, `subject`) VALUES
(1,6),
(1,7),
(2,2),
(2,3),
(2,8),
(2,9),
(2,14),
(2,15),
(5,15),
(5,1);