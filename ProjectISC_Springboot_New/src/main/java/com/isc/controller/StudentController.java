package com.isc.controller;

import java.io.BufferedOutputStream;
// upload hinh2
import java.io.File;
//import java.io.IOException;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
//import java.io.BufferedOutputStream;
//import java.io.File;
//import java.io.FileOutputStream;
//import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

//import javax.servlet.RequestDispatcher;
//import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.isc.model.EntranceExam;
import com.isc.model.Intake;
//import com.isc.model.MyUploadForm;
import com.isc.model.School;
import com.isc.model.Specialization;
import com.isc.model.Student;
import com.isc.service.StudentService;

@WebServlet("/uploadFile")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2, // 2MB
		maxFileSize = 1024 * 1024 * 10, // 10MB
		maxRequestSize = 1024 * 1024 * 50) // 50MB
@RestController
public class StudentController {
	// private static final long serialVersionUID = 1L;
	Student studentObj = new Student();

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
	public ResponseEntity<Void> addStudent(@RequestBody Student Student) {
		try {
			if(!Student.getImage().equals("noImage.png"))
				Student.setImage(studentObj.getImage());
			service.addStudent(Student);

		}

		catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/Student_Reset", method = RequestMethod.PUT)
	public ResponseEntity<Void> resetpassword(@RequestBody Student Student) {
		try {

			service.resetpassword(Student);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/Student", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateStudent(@RequestBody Student Student) {
		try {
			if(!Student.getImage().equals("noImage.png")){
				Student student1;
				student1 = service.getStudent(Student.getId());
				//student1.setImage(studentObj.getImage());
				String image = student1.getImage();
				if(!image.equals(Student.getImage())){
					if(!image.equals("noImage.png")){
						String directory = "src\\main\\resources\\static\\admin\\images";
						String filepath = Paths.get(directory, image).toString();
						File file = new File(filepath);
						file.delete();
					}
				Student.setImage(studentObj.getImage());
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
		// try {
		service.deleteStudent(id);
		// } catch (Exception ex) {
		// return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		// }
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

	@RequestMapping(value = "admin/student/uploadFile", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> uploadFile(@RequestParam("uploadfile1") MultipartFile uploadfile) {

		try {
			Date todayDate = new Date();
			DateFormat dateFormat = new SimpleDateFormat("MMddyyyy_HHmmss");
			String today = dateFormat.format(todayDate);
			// Get the filename
			String filename = today + "_" + uploadfile.getOriginalFilename();
			studentObj.setImage(filename);
			// Build the local file path
			String directory = "src\\main\\resources\\static\\admin\\images";
			String filepath = Paths.get(directory, filename).toString();

			// Save the file locally
			BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File(filepath)));
			stream.write(uploadfile.getBytes());
			stream.close();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	} // method uploadFile

	@RequestMapping(value = "admin/api/student/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<Student> students = service.getAllStudents();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Id");
		headers.add("First Name");
		headers.add("Last Name");
		headers.add("Email");

		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (Student s : students) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getStudentId());
			elements.add(s.getFirstname());
			elements.add(s.getLastname());
			elements.add(s.getEmail());
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=myfile.xls");
		return new ModelAndView(new MyExcelView(), model);
	}

}
