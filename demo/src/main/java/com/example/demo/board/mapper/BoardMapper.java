package com.example.demo.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.board.vo.BoardVO;
import com.example.demo.util.page.PageObject;

@Mapper
public interface BoardMapper {
	
	public Long getTotalRow(PageObject pageObject);
	
	public List<BoardVO> list(PageObject pageObject); 
	
	public Integer increase(Long no); 
	
	public BoardVO view(Long no);
}
