package com.springbootdev.examples;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EntityScan(basePackages = {"com.springbootdev.domain.entity"})
@EnableJpaRepositories(basePackages = {"com.springbootdev.domain.repository"})
@CrossOrigin(origins = "http://localhost:3000")

public class SpringBootDataJpaExampleApplication
{
	public static void main(String[] args)
    {
		SpringApplication.run(SpringBootDataJpaExampleApplication.class, args);
	}
}
