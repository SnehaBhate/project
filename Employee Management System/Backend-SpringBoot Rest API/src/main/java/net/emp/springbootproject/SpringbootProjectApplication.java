package net.emp.springbootproject;

import org.springframework.beans.factory.annotation.Autowired;
import net.emp.springbootproject.model.Employee;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import net.emp.springbootproject.model.Employee;
import net.emp.springbootproject.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootProjectApplication.class, args);
	}
		@Autowired
		private EmployeeRepository employeeRepository;
		
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Employee employee = new Employee();
		
		/*employee.setFirstName("Sneha");
		employee.setLastName("Bhate");
		employee.setEmailId("snehabhate001@gmail.com");
		employee.setsalary("50000");
		employeeRepository.save(employee);
		
		
		
		Employee employee1 = new Employee();
		employee1.setFirstName("Himanshi");
		employee1.setLastName("Gupta");
		employee1.setEmailId("himanshigupta001@gmail.com");
		employee1.setsalary("50000");
		employeeRepository.save(employee1);
		*/
	}
}

	
