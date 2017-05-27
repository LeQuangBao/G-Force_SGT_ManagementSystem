package com.isc.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.isc.model.Instructor;
import com.isc.service.InstructorService;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class InstructorController {
	@Autowired
	private InstructorService service;
		
	Instructor instructorObj=new Instructor();
	
	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.GET)
	public ResponseEntity<List<Instructor>> getAllInstructors() {
		return new ResponseEntity<>(service.getAllInstructors(), HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/instructor/{id}", method = RequestMethod.GET)
	public ResponseEntity<Instructor> getInstructor(@PathVariable int id) {
		Instructor instructor;
		try {
			instructor = service.getInstructor(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(instructor, HttpStatus.OK);
	}

	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.POST)
	public ResponseEntity<Void> addInstructor(@RequestBody Instructor instructor) {
		try {
			if(!instructor.getImage().equals("noImage.png"))
				instructor.setImage(instructorObj.getImage());
			service.addInstructor(instructor);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "admin/api/instructor", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateInstructor(@RequestBody Instructor instructor) {
		try {
			if(!instructor.getImage().equals("noImage.png")){
				Instructor instructor1=service.getInstructor(instructor.getId());
				//instructor1.setImage(instructorObj.getImage());
				String image=instructor1.getImage();
				 String directory = "src\\main\\resources\\static\\admin\\images";
				 String filepath = Paths.get(directory, image).toString();
				   File file=new File(filepath);
				    file.delete();  
				instructor.setImage(instructorObj.getImage());
			}
			service.updateInstructor(instructor);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/instructor/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteInstructor(@PathVariable int id) {
		try {
			service.deleteInstructor(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "admin/api/instructor/reset", method = RequestMethod.PUT)
	public ResponseEntity<Void> resetPassword(@RequestBody Instructor instructor) {
		try {
			service.resetPassword(instructor);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(value = "admin/instructor/uploadFile", method = RequestMethod.POST)
	@ResponseBody
	  public ResponseEntity<?> uploadFile(
	      @RequestParam("uploadfile") MultipartFile uploadfile) {
	    
	    try {
	    	Date todayDate = new Date();
	    	DateFormat dateFormat = new SimpleDateFormat("MMddyyyy_HHmmss");
	    	String today = dateFormat.format(todayDate);
	      // Get the filename 
	      String filename = today+"_"+uploadfile.getOriginalFilename();
	      instructorObj.setImage(filename);
	      // Build the local file path
	      String directory = "src\\main\\resources\\static\\admin\\images";
	      String filepath = Paths.get(directory, filename).toString();
	      
	      // Save the file locally
	      BufferedOutputStream stream =
	          new BufferedOutputStream(new FileOutputStream(new File(filepath)));
	      stream.write(uploadfile.getBytes());
	      stream.close();
	    }
	    catch (Exception e) {
	      System.out.println(e.getMessage());
	      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	    }
	    
	    return new ResponseEntity<>(HttpStatus.OK);
	  } // method uploadFile
}
