package com.isc.controller;

//import java.io.BufferedOutputStream;
//import java.io.File;
//import java.io.FileOutputStream;
//import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.isc.model.Student;
import com.isc.model.EntranceExam;
import com.isc.model.Intake;
import com.isc.model.MyUploadForm;
import com.isc.model.School;
import com.isc.model.Specialization;
import com.isc.service.StudentService;

// upload hinh2
import java.io.File;
//import java.io.IOException;
 
//import javax.servlet.RequestDispatcher;
//import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
 
@WebServlet("/uploadFile")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
       maxFileSize = 1024 * 1024 * 10, // 10MB
       maxRequestSize = 1024 * 1024 * 50) // 50MB
@RestController
public class StudentController {
//	private static final long serialVersionUID = 1L;
	 
	   public static final String SAVE_DIRECTORY = "uploadDir";

	@Autowired
	private StudentService service;

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.GET)
	public ResponseEntity<List<Student>> getAllStudents() {
		return new ResponseEntity<>(service.getAllStudents(), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/Student/{id}", method = RequestMethod.GET)
	public ResponseEntity<Student> getStudent(@PathVariable int id) {
		Student Student;
		try {
			Student = service.getStudent(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(Student, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.POST)
	public ResponseEntity<Void> addStudent(HttpServletRequest request,@RequestBody Student Student) {
		try {
			
			// Đường dẫn tuyệt đối tới thư mục gốc của web app.
	           String appPath = request.getServletContext().getRealPath("");
	           appPath = appPath.replace('\\', '/');
	 
	  
	           // Thư mục để save file tải lên.
	           String fullSavePath = null;
	           if (appPath.endsWith("/")) {
	               fullSavePath = appPath + SAVE_DIRECTORY;
	           } else {
	               fullSavePath = appPath + "/" + SAVE_DIRECTORY;
	           }
	           // Tạo thư mục nếu nó không tồn tại.
	           File fileSaveDir = new File(fullSavePath);
	           if (!fileSaveDir.exists()) {
	               fileSaveDir.mkdir();
	           }
	  
	           // Danh mục các phần đã upload lên (Có thể là nhiều file).
	           for (Part part : request.getParts()) {
	               String fileName = Student.getImage();
	               if (fileName != null && fileName.length() > 0) {
	                   String filePath = fullSavePath + File.separator + fileName;
	                   // Ghi vào file.
	                   part.write(filePath);
	               }
	           }
			service.addStudent(Student);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateStudent(HttpServletRequest request,@RequestBody Student Student) {
		try {
			// Đường dẫn tuyệt đối tới thư mục gốc của web app.
	           String appPath = request.getServletContext().getRealPath("");
	           appPath = appPath.replace('\\', '/');
	 
	  
	           // Thư mục để save file tải lên.
	           String fullSavePath = null;
	           if (appPath.endsWith("/")) {
	               fullSavePath = appPath + SAVE_DIRECTORY;
	           } else {
	               fullSavePath = appPath + "/" + SAVE_DIRECTORY;
	           }
	           // Tạo thư mục nếu nó không tồn tại.
	           File fileSaveDir = new File(fullSavePath);
	           if (!fileSaveDir.exists()) {
	               fileSaveDir.mkdir();
	           }
	  
	           // Danh mục các phần đã upload lên (Có thể là nhiều file).
	           for (Part part : request.getParts()) {
	               String fileName = Student.getImage();
	               if (fileName != null && fileName.length() > 0) {
	                   String filePath = fullSavePath + File.separator + fileName;
	                   // Ghi vào file.
	                   part.write(filePath);
	               }
	           }
			service.updateStudent(Student);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/Student/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
		try {
			service.deleteStudent(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "admin/api/StudentIntake", method = RequestMethod.GET)
	public ResponseEntity<List<Intake>> getAllIntake() {
		return new ResponseEntity<>(service.getallintake(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentSchool", method = RequestMethod.GET)
	public ResponseEntity<List<School>> getAllSchool() {
		return new ResponseEntity<>(service.getallSchool(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentEntranceExam", method = RequestMethod.GET)
	public ResponseEntity<List<EntranceExam>> getAllEntranceExam() {
		return new ResponseEntity<>(service.getallentranceexam(), HttpStatus.OK);
	}
	@RequestMapping(value = "admin/api/StudentSpecialization", method = RequestMethod.GET)
	public ResponseEntity<List<Specialization>> getAllSpecilization() {
		return new ResponseEntity<>(service.getallspecialization(), HttpStatus.OK);
	}

	

	
}
