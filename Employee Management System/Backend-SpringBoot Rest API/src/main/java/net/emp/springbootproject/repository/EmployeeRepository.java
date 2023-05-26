package net.emp.springbootproject.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import net.emp.springbootproject.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
}