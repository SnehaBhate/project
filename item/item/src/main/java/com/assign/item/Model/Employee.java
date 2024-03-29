package com.assign.item.Model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;


@Entity
@Table(name="Employee")
public class Employee {
	
	@ManyToMany
    @JoinTable(name = "Assignment",
            joinColumns = @JoinColumn(name = "emp_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    private List<Item> items;
	
	public long getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(long emp_id) {
		this.emp_id = emp_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAssigned() {
		return item_assigned;
	}
	public void setAssigned(String item_assigned) {
		this.item_assigned = item_assigned;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long emp_id;
	private String name;
	private String item_assigned;

}
