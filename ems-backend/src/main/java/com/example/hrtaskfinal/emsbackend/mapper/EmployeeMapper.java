package com.example.hrtaskfinal.emsbackend.mapper;

import com.example.hrtaskfinal.emsbackend.dto.EmployeeDto;
import com.example.hrtaskfinal.emsbackend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getHomeTown(),
                employee.getEducation(),
                employee.getExperience(),
                employee.getManager(),
                employee.getIbu(),
                employee.getQuote()
        );
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                employeeDto.getHomeTown(),
                employeeDto.getEducation(),
                employeeDto.getExperience(),
                employeeDto.getManager(),
                employeeDto.getIbu(),
                employeeDto.getQuote()
        );
    }
}
