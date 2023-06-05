package com.assign.item.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.assign.item.Model.Employee;
import com.assign.item.Model.Item;
import com.assign.item.Service.EmployeeService;
import com.assign.item.Service.ItemService;
	

public class AssignController {
	 
	@Autowired
	private EmployeeService employeeService;
	private ItemService itemService;
	private Item item;
	
	 
		 @GetMapping("/{id}")
		    public ResponseEntity<Item> getItemById(@PathVariable Long id , String Name) {
		        Optional<Item> optionalItem = itemService.getItemById(id);
		        if (optionalItem.isPresent()) {
		        	if(optionalItem.map(Item::getName).equals(item.getName())) {
		        		
		        		String Product_Name =  optionalItem.map(Item::getName).orElse(null);  
		        		//getEmployeeById(Long id);
		        		
		        	}
		        	
		            return ResponseEntity.ok(optionalItem.get());
		        }
		        return ResponseEntity.notFound().build();
		    }
		
	
	@GetMapping("/{id}")
	//Id enter krke get details of employee krenge to employee ki sari details fill hokar aaani chahiye
	//Item assigned field me item ke name ke sath.
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		
		
        Optional<Employee> optionalEmployee = employeeService.getEmployeeById(id);
        if (optionalEmployee.isPresent()) {
            return ResponseEntity.ok(optionalEmployee.get());
        }
        return ResponseEntity.notFound().build(); 
    }
	
	//uske bad save button pr click krte hi vo item table me show ho jani chahiye 
	
	@PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item updatedItem) {
        Optional<Item> optionalItem = itemService.updateItem(id, updatedItem);
        if (optionalItem.isPresent()) {
            return ResponseEntity.ok(optionalItem.get());
        }
        return ResponseEntity.notFound().build();
    }
	
	
	
	
}


