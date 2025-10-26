package com.example.demo.board.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.board.mapper.BoardReplyMapper;
import com.example.demo.board.vo.BoardReplyVO;
import com.example.demo.util.page.PageObject;

@Service
public class BoardReplyService {
	
	@Autowired
	private BoardReplyMapper mapper;
	
	public List<BoardReplyVO> list(PageObject pageObject, Long no){
		
		pageObject.setTotalRow(mapper.getTotalRow(no));
		return mapper.list(pageObject, no);
	}
			
	public Integer write(BoardReplyVO vo){
		
		return null;
	}	
	
	public Integer update(BoardReplyVO vo){
		
		return null;
	}
	
	public Integer delete(Long rno){
		
		return null;
	}

}
