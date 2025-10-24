<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<%@ taglib prefix="pageNav" tagdir="/WEB-INF/tags" %>
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
  	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
<style type="text/css">
.dataRow:hover{
	background: #e0e0e0;
	cursor: pointer;
}
</style>

<script type="text/javascript">
	$(function(){
		$(".dataRow").on("click", function(){
			let no = $(this).find(".no").text();
			location = "view.do?no=" + no + "&inc=1";
		})
	})
	
</script>
  
</head>
<body>
<div class="container">
    <h2>리스트</h2>
    <table class="table">
	    <tr>
	    	<th>번호</th>
	    	<th>제목</th>
	    	<th>작성자</th>
	    	<th>작성일</th>
	    	<th>조회수</th>
	    </tr>
	    <c:forEach var="vo" items="${list}">
		    <tr class="dataRow">
		    	<td class="no">${vo.no}</td>
		    	<td>${vo.title}</td>
		    	<td>${vo.writer}</td>
		    	<td><fmt:formatDate value="${vo.writeDate}" pattern="yyyy-MM-dd"/></td>
		    	<td>${vo.hit}</td>
		    </tr>
		</c:forEach>
	</table>
	<div><pageNav:pageNav listURI="list.do" pageObject="${pageObject}"/> </div>
</div>
</body>
</html>
