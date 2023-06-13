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
	
	@ManyToMany(mappedBy = "items")
    private List<Employee> employees;
	
	
	public Long getItem_id() {
		return Item_id;
	}
	public void setItem_id(long item_id) {
		Item_id = item_id;
	}
//	public Item(int item_id, String name) {
	//	super();
		//Item_id = item_id;
	//	Name = name;
	//}
	Item(){
		
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
//	public int getQuantity() {
//		return quantity;
//	}
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Item_id;
	private String Name;
	//private int quantity;
	
	
	

}
