package com.matheuskya.demo.rest;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldControllor {

    @GetMapping("/hello")
    public String helloWorld() {
        return "Hello World!";
    }

    @GetMapping("ping")
    public Map<String, String> ping() {
        return Map.of("message", "pong");
    }

    @PostMapping("login")
    public Map<String, String> login(@RequestBody Map<String, String> request) {
        System.out.println("REQUEST PARAM");
        System.out.println(request.get("username"));
        System.out.println(request.get("password"));
        return Map.of("user_from_spring", request.get("username"));
    }
}
