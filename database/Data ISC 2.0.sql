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


------entrance exam
INSERT INTO `entrance_exam`(`id`, `entrance_exam_name`, `start_date`, `description`, `intake`) VALUES
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
(1,'quyenly','$2y$10$QQP8sc.yJqn4PL5t3IuiweqM1KVGUvfcH6vGdYD/2CWClNUI3Uej2','Quyên','Lý Kiều','1978-01-12','quyen.lykieu@gmail.com','0937229534','12 Tân Hoá , P.1,Q.11,TP.HCM ','lykieuquyen.jpg',1),
(2,'quynhnguyen','$2y$10$3UVxzD8bZFdzTK3x7TFj5u0iv5KKfFtwRGBYH/qwEJHjEItT1REpm','Quỳnh','Nguyễn Mạnh','1980-05-24','quynh.nguyenmanh@gmail.com','0937229526','856 Tạ Quang Bửu, P.5,Q.8,TP.HCM ','nguyenmanhquynh.jpg',1),
(3,'hungly','$2y$10$k84blK8r4eqtCQgZq8K..ucdl/FeJMg/5nXHj8Aff/X522pxNjl82','Hùng','Lý','1981-07-27','hung.ly@gmail.com','0937229571','39485 Kha Vạn Cân, P.Linh Đông,Q.Thủ Đức,TP.HCM ','lyhung.jpg',1),
(4,'thaonguyen','$2y$10$qsCtU6s2lIVjstJL4SKYleTZIvo.kex/P7R9ieODvookVRSAhl7cG','Thảo','Nguyễn Thu','1976-08-14','thao.nguyenthu@gmail.com','0937229592','132 Nguyễn Mình Hoàng, P.12,Q.Tân Bình,TP.HCM ','nguyenthuthao.jpg',1),
(5,'yenly','$2y$10$kji.U.Sgg/j3FrwgeHotc.b1V3KaPFwiuBXZuAAu/MiMYPJwSyNJa','Yến','Lý','1983-10-09','yen.ly@gmail.com','0937229588','582 Ba Tháng Hai, P.10,Q.10,TP.HCM ','lyyen.jpg',1);


-----student
INSERT INTO `student`(`id`, `student_id`, `username`, `password`, `firstname`, `lastname`, `gender`, `birthday`, `email`, `phone`, `address`, `school`, `intake`, `entrance_exam`, `specialization`, `image`, `status`) VALUES 
(1,'ISC01-17-0-0001','nhatnguyen','$2y$10$cUGkrLE2Mi8nO2oK08x5EOuBWaInxpxxUi/8bsCcAyflm3bmDfWIi','Nhật','Nguyễn Minh',0,'1995-01-18','nhat.nguyenminh@gmail.com','0939019506','99 Nguyễn Tri Phương, P.7,Q.5,TP.HCM',1,1,1,1,'nguyenminhnhat.jpg','Studying'),
(2,'ISC01-17-1-0002','anhnhat','$2y$10$wOWeLPXmN8mclwXStFqYruHPDzQz0/QKZb6LBkGe/NNBdYSXnsLSG','Anh','Nhật Kim',1,'1995-03-26','anh.nhatkim@gmail.com','0938028980','754 Nguyễn Trãi, P.11,Q.5,TP.HCM',1,1,1,2,'nhatkimanh.jpg','Studying'),
(3,'ISC01-17-0-0003','nguyentran','$2y$10$8ahqj8EsG2f08gQvqvtTI.nht1HL9Csk2sL31EfZCJ4awiJbbK1t6','Nguyên','Trần Khai',0,'1995-05-20','nguyen.trankhai@gmail.com','0937037762','250 Tùng Thiện Vương, P.11,Q.8,TP.HCM',2,1,1,3,'trankhainguyen.jpg','Studying'),
(4,'ISC01-17-1-0004','ngockhai','$2y$10$LhJ4qqGfH77FVR8OmRS8Ku4myypTWYlBTbfFk5k5NqgOnZn6PXp7u','Ngọc','Khai Minh',1,'1995-07-01','ngoc.khaiminh@gmail.com','0936046566','169 Bùi Minh Trực, P.5,Q.8,TP.HCM',2,1,1,4,'khaiminhngoc.jpg','Studying'),
(5,'ISC01-17-0-0005','phatphan','$2y$10$dwS0AY8U6tBbrRK90W5FBu0SM.TaNwLfLOMXo9VbBfF2CxCvnUdAy','Phát','Phan Tiến',0,'1995-09-09','phat.phantien@gmail.com','0935055721','15 Nguyễn Hữu Thọ, P.Tân Phong,Q.7,TP.HCM',3,1,1,5,'phantienphat.jpg','Studying'),
(6,'ISC01-17-1-0006','haho','$2y$10$samOlRX9ly8A5FR5AILP2.DpNts1jPAMMU.ACIEIv6kuNZbs8AYVS','Hà','Hồ Ngọc',1,'1995-11-22','ha.hongoc@gmail.com','0934064789','15 Hoàng Văn Thái, P.Tân Phú ,Q.7,TP.HCM',3,1,2,1,'hongocha.jpg','Studying'),
(7,'ISC01-17-0-0007','dungcao','$2y$10$t.MB/uNgUGFXnxgFrtvlWesJECE9EiVSOwz/DppG2g9k7d9Bs0WI6','Dũng','Cao Chí',0,'1995-02-27','dung.caochi@gmail.com','0933073234','207 Đội Cung, P.9,Q.11,TP.HCM',4,1,2,2,'caochidung.jpg','Studying'),
(8,'ISC01-17-1-0008','huongho','$2y$10$a18fEhb0FEUTFt8yjdUMBeliX2u5wFKwEFMU0ZFgMnBGFa7qHCFsW','Hương','Hồ Xuân',1,'1995-04-12','huong.hoxuan@gmail.com','0932082547','138 Tạ Uyên, P.6,Q.11,TP.HCM',4,1,2,3,'hoxuanhuong.jpg','Studying'),
(9,'ISC01-17-0-0009','tungcao','$2y$10$xR89/ughkt264qMm/P7jZurrf01SlsxtQiXVeB4SJ/z9Xz1JMzkyS','Tùng','Cao Sơn',0,'1995-06-18','tung.caoson@gmail.com','0931091982','96 Nguyễn Thiện Thuật, P.2,Q.3,TP.HCM',5,1,2,4,'caosontung.jpg','Studying'),
(10,'ISC01-17-1-0010','aiminh','$2y$10$r9AqUqGMgzkKnzLr08kh4.J9UASIAdGVbVPf/kgkk.ewkaIaWsvjG','Ái','Minh Thiên',1,'1995-08-15','ai.minhthien@gmail.com','0929100123','169 Võ Thị Sáu, P.2,Q.3,TP.HCM',5,1,2,5,'minhthienai.jpg','Studying'),
(11,'ISC01-17-0-0011','soncao','$2y$10$FAf4cAHtJlTC25r.zrhZdeQiATSi3L9AtoVg4/S9.dK7Kx.byXOlO','Sơn','Cao Thái',0,'1995-10-24','son.caothai@gmail.com','0928119753','191 Phạm Phú Thứ, P.4,Q.6,TP.HCM',6,1,2,1,'caothaison.jpg','Studying'),
(12,'ISC01-17-1-0012','trinhnguyen','$2y$10$XYwf49TDAAkQ8pH8LdD5rOnmZEaGKNz4B.YRoZLUmz0Ye4yJO0FKK','Trinh','Nguyễn Ngọc',1,'1995-12-02','trinh.nguyenngoc@gmail.com','0927128742','105 Trần Văn Kiếu, P.10,Q.6,TP.HCM',6,1,2,2,'nguyenngoctrinh.jpg','Studying'),
(13,'ISC01-17-0-0013','minhtruong','$2y$10$/dEo9CKUiOC8QqmVnPc2CuIYymEX5TYHpIJzlwXLwYWj59kBktoqq','Minh','Trương Thanh',0,'1995-03-08','minh.truongthanh@gmail.com','0926137598','935 Quang Trung, P.14,Q.12,TP.HCM',7,1,2,3,'truongthanhminh.jpg','Studying'),
(14,'ISC01-17-1-0014','phupham','$2y$10$JvHAxbCyl5TJUrTmBQFZOeJzxAA3SWRNPl6oVVXGISkXd3200pk9q','Phú','Phạm Hồng',1,'1995-08-11','phu.phamhong@gmail.com','0925146084','153 Quang Trung, P.Đông Hưng Thuận,Q.12,TP.HCM',7,1,2,4,'phamhongphu.jpg','Studying'),
(15,'ISC01-17-0-0015','khoalang','$2y$10$279UypNPY8T61/Yg3uRP/.W5gGWMp85yiEy7mqLfqzafb.pzQE0QS','Khoa','Lăng Tiến',0,'1995-06-29','khoa.langtien@gmail.com','0924155687','1155 Phan Văn Trị, P.10,Q.Gò Vấp,TP.HCM',8,1,3,5,'langtienkhoa.jpg','Studying'),
(16,'ISC01-17-1-0016','kieudap','$2y$10$uCBDCXzy5UmhUbJ3PnbQ4eBcxvTtTQ8omawx/Q9dDoVTnGAoC/lR.','Kiều','Đạp Thuý',1,'1995-12-29','kieu.dapthuy@gmail.com','0923164387','45 Trần Thị Nghĩ, P.7,Q.Gò Vấp,TP.HCM',8,1,3,1,'dapthuykieu.jpg','Studying'),
(17,'ISC01-17-0-0017','tiendo','$2y$10$6IBr2eUBIK34tEwlHjPvhug7xCAgv9FOrKUzYftHOXtfUgUA.dI7C','Tiến','Đỗ Thăng',0,'1995-09-11','tien.dothang@gmail.com','0922173299','157 Nguyễn Trọng Tuyến, P.8,Q.2,TP.HCM',9,1,3,2,'dothangtien.jpg','Studying'),
(18,'ISC01-17-1-0018','phuocla','$2y$10$RA6QrVQPaoX0ZrsZMAvPnOcqUeJYK3NXcByV4i4mzGPksTxGbpRJ6','Phước','Lã Minh',1,'1995-10-10','phuoc.laminh@gmail.com','0921182400','10 Nguyên Văn Bảo, P.4,Q.2,TP.HCM',9,1,3,3,'laminhphuoc.jpg','Studying'),
(19,'ISC01-17-0-0019','phuctran','$2y$10$sEAUczvJwi9R6YQShyJnSuhA5u0P4W4GqAlQ1eNXuuUmERR4nRJde','Phúc','Trần Tiến',0,'1995-01-31','phuc.trantien@gmail.com','0963191318','15 Nguyễn Thái Bình, P.4,Q.9,TP.HCM',10,1,3,4,'trantienphuc.jpg','Studying'),
(20,'ISC01-17-1-0020','tammy','$2y$10$Mjg85GHp0WrwUb/NbgcRDuoNY4Qv5Z9UpM4khmAyqeT9Q7yq4rz0e','Tâm','Mỹ',1,'1995-07-22','tam.my@gmail.com','0964200672','Đường số 4, P.Trường Thọ,Q.9,TP.HCM',10,1,3,5,'mytam.jpg','Studying');


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