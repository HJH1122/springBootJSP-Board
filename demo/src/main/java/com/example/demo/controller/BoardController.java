package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.service.BoardService;

import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
@RequestMapping("/board")
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@GetMapping("/list.do")
	public String list(Model model) {
		
		log.info("일반게시판 리스트 로그");
		model.addAttribute("list", service.list());
		
		return "board/list";
	}
	
	@GetMapping("/view.do")
	public String view(Long no, int inc, Model model) {
		log.info("no=" + no + " inc=" + inc);
		
		model.addAttribute("vo", service.view(no, inc));
		
		log.info("model=" + model);
		
		return "board/view";
	}

}
