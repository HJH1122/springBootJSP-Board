package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.BoardVO;

@Mapper
public interface BoardMapper {
	
	public List<BoardVO> list(); 
	
	public Integer increase(Long no); 
	
	public BoardVO view(Long no);
}
