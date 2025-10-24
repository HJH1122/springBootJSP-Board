<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>게시판 리스트</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  

</head>
<body>
<div class="container">
    <h2>상세 페이지</h2>
    <table class="table">
	    <tr>
	    	<th>번호</th>
			<td>${vo.no}</td>
	    </tr>
	    <tr>
	    	<th>제목</th>
			<td><pre>${vo.title}</pre></td>
	    </tr>
	    <tr>
	    	<th>내용</th>
			<td>${vo.content}</td>
	    </tr>
	    <tr>
	    	<th>작성자</th>
			<td>${vo.writer}</td>
	    </tr>
	    <tr>
	    	<th>작성일</th>
			<td><fmt:formatDate value="${vo.writeDate}" pattern="yyyy-MM-dd"/></td>
	    </tr>
	    <tr>
	    	<th>조회수</th>
			<td>${vo.hit}</td>
	    </tr>
	    
	</table>
	<jsp:include page="reply.jsp"/>

</div>
</body>
</html>
