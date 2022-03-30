package com.springrestapi.restapi.service;

import com.springrestapi.restapi.dao.MainDao;
import com.springrestapi.restapi.entity.MainEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Kelzang Ugyen Dorji on 3/28/2022.
 */
@Service
public class MainService {
    @Autowired
    MainDao mainDao;
    // CREATE
    public MainEntity createEmployee(MainEntity emp) {
        return mainDao.save(emp);
    }

    // READ
    public List<MainEntity> getEmployees() {
        return mainDao.findAll();
    }
    public MainEntity getEmployee(Long id) {
        return mainDao.findById(id).get();
    }

    // DELETE
    public void deleteEmployee(Long empId) {
        mainDao.deleteById(empId);
    }
    // UPDATE
    public MainEntity updateEmployee(Long empId, MainEntity employeeDetails) {
        MainEntity emp = mainDao.findById(empId).get();
        emp.setName(employeeDetails.getName());
        emp.setAge(employeeDetails.getAge());
        emp.setEmail(employeeDetails.getEmail());

        return mainDao.save(emp);
    }
}
