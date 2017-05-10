package com.isc.controller;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.web.servlet.view.document.AbstractExcelView;

import com.isc.model.Student;

public class StudentListView extends AbstractExcelView  {

	@Override
	protected void buildExcelDocument(Map model, HSSFWorkbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		HSSFSheet excelSheet = workbook.createSheet("Student List");
		setExcelHeader(excelSheet);
		
		List<Student> studentlist = (List<Student>) model.get("studentlist");
		setExcelRows(excelSheet,studentlist);
	}
	public void setExcelHeader(HSSFSheet excelSheet) {
		HSSFRow excelHeader = excelSheet.createRow(0);
		excelHeader.createCell(0).setCellValue("Id");
		excelHeader.createCell(1).setCellValue("Student Id");
		excelHeader.createCell(2).setCellValue("Username");
		excelHeader.createCell(3).setCellValue("FirstName");
		excelHeader.createCell(4).setCellValue("LastName");
		excelHeader.createCell(5).setCellValue("Addrress");
		excelHeader.createCell(6).setCellValue("School");
		excelHeader.createCell(7).setCellValue("Specialization");
		excelHeader.createCell(8).setCellValue("Entrane Exam");
		excelHeader.createCell(9).setCellValue("Intake");
		excelHeader.createCell(10).setCellValue("Gender");
		excelHeader.createCell(11).setCellValue("Email");
		excelHeader.createCell(12).setCellValue("Birthday");
		excelHeader.createCell(13).setCellValue("Phone");
		
	}
	
	public void setExcelRows(HSSFSheet excelSheet, List<Student> studentlist){
		int record = 1;
		for (Student student : studentlist) {
			HSSFRow excelRow = excelSheet.createRow(record++);
			excelRow.createCell(0).setCellValue(student.getId());
			excelRow.createCell(1).setCellValue(student.getStudentId());
			excelRow.createCell(2).setCellValue(student.getUsername());
			excelRow.createCell(3).setCellValue(student.getFirstname());
			excelRow.createCell(4).setCellValue(student.getLastname());
			excelRow.createCell(5).setCellValue(student.getAddress());
			excelRow.createCell(6).setCellValue(student.getSchool().getSchoolName());
			excelRow.createCell(7).setCellValue(student.getSpecialization().getSpecializationName());
			excelRow.createCell(8).setCellValue(student.getEntranceExam().getEntranceExamName());
			excelRow.createCell(9).setCellValue(student.getIntake().getIntakeName());
			excelRow.createCell(10).setCellValue(student.getGender());
			excelRow.createCell(11).setCellValue(student.getEmail());
			excelRow.createCell(12).setCellValue(student.getBirthday());
			excelRow.createCell(13).setCellValue(student.getPhone());
			
		}
	}

}
