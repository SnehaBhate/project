package com.assign.item.Model;



import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

//item ID, name, description, quantity, etc.

@Entity
@Table(name="Item")

public class Item {
//	
//	@ManyToMany(mappedBy = "items")
//    private List<Employee> employees;
//	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Item_id;
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	private String Name;
	
	public Item(long item_id, String name) {
		super();
		Item_id = item_id;
		Name = name;
	}
	public long getItem_id() {
		return Item_id;
	}
	public void setItem_id(long item_id) {
		Item_id = item_id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
}
