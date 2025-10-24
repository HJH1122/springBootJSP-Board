package com.example.demo.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.board.mapper.BoardMapper;
import com.example.demo.board.vo.BoardVO;
import com.example.demo.util.page.PageObject;

@Service
public class BoardService {
	
	@Autowired
	private BoardMapper mapper;
	
	public List<BoardVO> list(PageObject pageObject){
		pageObject.setTotalRow(mapper.getTotalRow(pageObject));
		return mapper.list(pageObject);
	}
	
	public BoardVO view(Long no, int inc){
		
		if(inc == 1) {
			mapper.increase(no);
		}
		
		return mapper.view(no);
	}

}
