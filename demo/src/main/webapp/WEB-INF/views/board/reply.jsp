<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>

	<div class="card">
		<div class="card-header">
			<span class="font-weight-bold">댓글</span>
			<span class="float-right">
				<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#boardReplyModal">
				  write
				</button>
			</span>
		</div>
		<div class="card-body">
			데이터 표시
		</div>
		<div class="card-footer">
			페이지네이션
		</div>
	</div>


<!-- The Modal -->
<div class="modal" id="boardReplyModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        Modal body..
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

<script type="text/javascript">

	//게시판 글 번호 받기
	let no = ${vo.no};
	let replyPage = 1; 
	
	
</script>
<script src="/js/reply.js"></script>
<script src="/js/replyProcess.js"></script>
