package com.springrestapi.restapi.dao;

import com.springrestapi.restapi.entity.MainEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Kelzang Ugyen Dorji on 3/28/2022.
 */
@Repository
public interface MainDao extends JpaRepository<MainEntity, Long> {
}
