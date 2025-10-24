package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.board.mapper.TimeMapper;

@Controller
public class HomeController {
	
	@Autowired
	private TimeMapper mapper;
	
	@GetMapping("/")	
	public String index() {
		return "index";
	}
	
	@GetMapping("/time")	
	public String time(Model model) {
		model.addAttribute("currentTime", mapper.getCurrentTime());
		return "time";
	}
	
	@GetMapping("/time2")	
	public String time2(Model model) {
		model.addAttribute("currentTime", mapper.getTime());
		return "time";
	}

}
