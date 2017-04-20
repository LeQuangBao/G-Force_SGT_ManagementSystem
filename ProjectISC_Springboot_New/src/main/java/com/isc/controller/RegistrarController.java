package com.isc.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Paths;
import java.util.List;

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


import com.isc.model.Registrar;
import com.isc.service.RegistrarService;

@RestController
public class RegistrarController {
	@Autowired
	private RegistrarService service;
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
			service.addRegistrar(registrar);
			
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	@RequestMapping(value="admin/api/registrar",method=RequestMethod.PUT)
	public ResponseEntity<Void>updateRegistrar(@RequestBody Registrar registrar){
		
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
	      // Get the filename and build the local file path
	      String filename = uploadfile.getOriginalFilename();
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
