package com.springrestapi.restapi.entity;

import javax.persistence.*;

/**
 * Created by Kelzang Ugyen Dorji on 3/28/2022.
 */
@Entity
@Table(name="employee")
public class MainEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="emp_id")
    private Integer id;
    @Column(name="emp_name")
    private String name;
    @Column(name="emp_age")
    private Integer age;
    @Column(name="emp_email")
    private String email;

    public MainEntity() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
