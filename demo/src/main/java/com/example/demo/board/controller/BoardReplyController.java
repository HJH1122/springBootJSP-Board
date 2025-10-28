package com.example.demo.board.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.board.service.BoardReplyService;
import com.example.demo.board.vo.BoardReplyVO;
import com.example.demo.util.page.PageObject;

import jakarta.servlet.http.HttpSession;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/boardreply")
@Log4j2
public class BoardReplyController {
	
	@Autowired
	private BoardReplyService service;
	
	@GetMapping(value = "/list.do", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, Object>> list(PageObject pageObject, Long no, HttpSession session){

		List<BoardReplyVO> list = service.list(pageObject, no);
		
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		map.put("pageObject", pageObject);
		map.put("id", "test");
		
		return new ResponseEntity<>(map, HttpStatus.OK);
	}
	
	@PostMapping(value="/write.do", consumes = MediaType.APPLICATION_JSON_VALUE, produces=MediaType.TEXT_PLAIN_VALUE + ";charset=utf-8")
	public ResponseEntity<String> write(@RequestBody BoardReplyVO vo, HttpSession session){
		vo.setId("test");
		
		service.write(vo);
		
		return new ResponseEntity<String>("댓글이 등록되었습니다.", HttpStatus.OK);
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
