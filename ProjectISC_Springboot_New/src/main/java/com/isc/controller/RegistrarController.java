package com.isc.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.isc.model.Instructor;
import com.isc.model.Registrar;
import com.isc.model.Student;
import com.isc.service.RegistrarService;

@RestController
public class RegistrarController {
	@Autowired
	private RegistrarService service;
	
	Registrar registrarObj=new Registrar();
	
	@RequestMapping(value="admin/api/registrar",method=RequestMethod.GET)
	public ResponseEntity<List<Registrar>>getAllRegistrars(){
		return new ResponseEntity<>(service.getAllRegistrars(),HttpStatus.OK);
		
	}
	@RequestMapping(value="admin/api/registrar/{id}", method = RequestMethod.GET)
	public ResponseEntity<Registrar>getRegistrar(@PathVariable int id){
		Registrar registrar;
		try {
			registrar=service.getRegistrar(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(registrar,HttpStatus.OK);
	}
	@RequestMapping(value="admin/api/registrar", method=RequestMethod.POST)
	public ResponseEntity<Void> addRegistrar(@RequestBody Registrar registrar){
		try {
			if(!registrar.getImage().equals("noImage.png"))
				registrar.setImage(registrarObj.getImage());
			service.addRegistrar(registrar);
			
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	@RequestMapping(value="admin/api/registrar",method=RequestMethod.PUT)
	public ResponseEntity<Void>updateRegistrar(@RequestBody Registrar registrar){
		if(!registrar.getImage().equals("noImage.png")){
			Registrar registrar1;
			registrar1=service.getRegistrar(registrar.getId());
			//registrar1.setImage(registrarObj.getImage());
			String image= registrar1.getImage();
			if(!image.equals(registrar.getImage())){
				if(!image.equals("noImage.png")){
				    String directory = "src\\main\\resources\\static\\a6dmin\\images";
				    String filepath = Paths.get(directory, image).toString();
				    File file=new File(filepath);
				    file.delete();   
				}
				registrar.setImage(registrarObj.getImage());
			}
		}
		service.updateRegistrar(registrar);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value="admin/api/registrar/{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Void>deleteRegistrar(@PathVariable int id)
	{
		try {
			service.deleteRegistrar(id);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value="admin/api/registrar/reset", method=RequestMethod.PUT)
	public ResponseEntity<Void>resetPassword(@RequestBody Registrar registrar)
	{
		try {
			service.resetPassword(registrar);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "admin/registrar/uploadFile", method = RequestMethod.POST)
	@ResponseBody
	  public ResponseEntity<?> uploadFile(
	      @RequestParam("uploadfile") MultipartFile uploadfile) {
	    
	    try {
	    	Date todayDate = new Date();
	    	DateFormat dateFormat = new SimpleDateFormat("MMddyyyy_HHmmss");
	    	String today = dateFormat.format(todayDate);
	      // Get the filename 
	      String filename = today+"_"+uploadfile.getOriginalFilename();
	      registrarObj.setImage(filename);
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
	@RequestMapping(value = "admin/api/registrar/export", method = RequestMethod.GET)
	public ModelAndView getMyData(HttpServletRequest request, HttpServletResponse response) throws SQLException {
		Map<String, Object> model = new HashMap<String, Object>();
		// get data from student
		List<Registrar> registrar = service.getAllRegistrars();
		// Sheet Name
		model.put("sheetname", "TestSheetName");
		// Headers List
		List<String> headers = new ArrayList<String>();
		headers.add("Username");
		headers.add("First Name");
		headers.add("Last Name");
		headers.add("Phone");
		headers.add("Email");
		headers.add("Birthday");
		headers.add("Address");
		model.put("headers", headers);
		// Results Table (List<Object[]>)
		List<List<String>> results = new ArrayList<List<String>>();
		// for loop each student
		for (Registrar s : registrar) {
			List<String> elements = new ArrayList<>();
			elements.add(s.getUsername());
			elements.add(s.getFirstname());
			elements.add(s.getLastname());
			elements.add(s.getPhone());
			
			elements.add(s.getEmail());
			elements.add(s.getBirthday().toString());
			elements.add(s.getAddress());
			results.add(elements);
		}

		model.put("results", results);
		response.setContentType("application/ms-excel");
		response.setHeader("Content-disposition", "attachment; filename=RegistrarList.xls");
		return new ModelAndView(new MyExcelView(), model);
	}
}
