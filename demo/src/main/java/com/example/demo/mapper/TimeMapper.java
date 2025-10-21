package com.example.demo.mapper;

import java.util.Date;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TimeMapper {
	
	@Select("SELECT NOW()")
	public Date getCurrentTime();
	
	public Date getTime();

}
