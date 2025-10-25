package com.example.demo.board.controller;

import java.util.Map;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.util.page.PageObject;

import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/boardreply")
@Log4j2
public class BoardReplyController {
	
	@GetMapping(value = "/list.do", produces = {
			MediaType.APPLICATION_XML_VALUE,
			MediaType.APPLICATION_JSON_VALUE
	})
	public ResponseEntity<Map<String, Object>> list(PageObject pageObject, Long no, HttpSession session){

		
		return null;
	}
	
	@PostMapping("/write.do")
	public ResponseEntity<String> write(PageObject pageObject, HttpSession session){
		
		
		return null;
	}
	
	@PostMapping("/update.do")
	public ResponseEntity<String> update(PageObject pageObject, HttpSession session){
		
		
		return null;
	}
	
	@GetMapping("/delete.do")
	public ResponseEntity<String> delete(PageObject pageObject, HttpSession session){
		
		
		return null;
	}

}
