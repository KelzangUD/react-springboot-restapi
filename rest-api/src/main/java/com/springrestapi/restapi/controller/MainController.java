package com.springrestapi.restapi.controller;

import com.springrestapi.restapi.entity.MainEntity;
import com.springrestapi.restapi.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kelzang Ugyen Dorji on 3/28/2022.
 */
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/employeeAPI")
public class MainController {
    @Autowired
    MainService mainService;

    @RequestMapping(value="/employees", method= RequestMethod.POST)
    public MainEntity createEmployee(@RequestBody MainEntity emp) {
        return mainService.createEmployee(emp);
    }

    @RequestMapping(value="/employees", method=RequestMethod.GET)
    public List<MainEntity> readEmployees() {
        return mainService.getEmployees();
    }

    @RequestMapping(value="/employees/{empId}", method=RequestMethod.PUT)
    public MainEntity readEmployees(@PathVariable(value = "empId") Long id, @RequestBody MainEntity empDetails) {
        return mainService.updateEmployee(id, empDetails);
    }

    @RequestMapping(value="/employees/{empId}", method=RequestMethod.DELETE)
    public void deleteEmployees(@PathVariable(value = "empId") Long id) {
        mainService.deleteEmployee(id);
    }
}
