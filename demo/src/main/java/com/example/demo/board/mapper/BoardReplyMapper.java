package com.example.demo.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.demo.board.vo.BoardReplyVO;
import com.example.demo.util.page.PageObject;

@Mapper
public interface BoardReplyMapper {
	
	public Long getTotalRow(Long no);
	
	public List<BoardReplyVO> list(@Param("pageObject") PageObject pageObject,@Param("no") Long no);

	public Integer write(BoardReplyVO vo);
	
	public Integer update(BoardReplyVO vo);
	
	public Integer delete(Long rno);
}
