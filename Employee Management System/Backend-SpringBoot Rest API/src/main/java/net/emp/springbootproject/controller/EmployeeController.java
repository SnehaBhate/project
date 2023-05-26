package net.emp.springbootproject.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
	//import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;

import net.emp.springbootproject.exception.ResourceNotFoundException;
//import net.emp.springbootproject.exception.ResourceNotFoundException;
import net.emp.springbootproject.model.Employee;
import net.emp.springbootproject.repository.EmployeeRepository;

import java.util.List;

	@CrossOrigin("*")
	@RestController
	@RequestMapping("/api/v1/employees")
	public class EmployeeController {

	    @Autowired
	    private EmployeeRepository employeeRepository;

	    @GetMapping
	    public List<Employee> getAllEmployees(){
	        return employeeRepository.findAll();
	         
	    }
	    
	    //build create employee rest API
	    @PostMapping
	    public Employee createEmployee(@RequestBody Employee employee) {
	    	return employeeRepository.save(employee);
	    	
	    }
	    //build employee by id rest API
	    
	    @GetMapping("{id}")
	    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
	    	Employee employee = employeeRepository.findById(id)
	    			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:" + id));
	    	return ResponseEntity.ok(employee);
	    }
           //build update employee rest API
	    @PutMapping("{id}")
	    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails){
	    	Employee updateEmployee = employeeRepository.findById(id)
	    			.orElseThrow(() -> new ResourceNotFoundException("Employee Not exist with id :"+id));
	    	updateEmployee.setFirstName(employeeDetails.getFirstName());
	    	updateEmployee.setLastName(employeeDetails.getLastName());
	    	updateEmployee.setEmailId(employeeDetails.getEmailId());
	    	updateEmployee.setsalary(employeeDetails.getsalary());
	    	
	    	employeeRepository.save(updateEmployee);
	    	return ResponseEntity.ok(updateEmployee);
	    	
	    	
}
	    //build delete employee rest API
	    @DeleteMapping("{id}")
	    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
	    	Employee employee = employeeRepository.findById(id)
	    			.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id:"+id));
	    	employeeRepository.delete(employee);
	    	
	    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    
	    
	}