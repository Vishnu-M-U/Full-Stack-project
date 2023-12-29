package com.example.hrtaskfinal.emsbackend.repository;

import com.example.hrtaskfinal.emsbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
