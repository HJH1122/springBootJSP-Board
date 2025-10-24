package com.example.demo.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.demo.board.service.BoardService;
import com.example.demo.util.page.PageObject;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;

@Controller
@Log4j2
@RequestMapping("/board")
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@GetMapping("/list.do")
	public String list(Model model, HttpServletRequest request) throws Exception {
		
		PageObject pageObject = PageObject.getInstance(request);
		
		log.info("일반게시판 리스트 로그");
		model.addAttribute("list", service.list(pageObject));
		model.addAttribute("pageObject", pageObject);
		
		log.info(model);
		
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
