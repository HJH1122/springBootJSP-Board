<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>

	<div class="card">
		<div class="card-header">
			<span class="font-weight-bold">댓글</span>
			<span class="float-right">
				<button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#boardReplyModal" id="replyWriteBtn">
				  write
				</button>
			</span>
		</div>
		<div class="card-body" id="dataDiv">
			데이터 표시
		</div>
		<div class="card-footer" id="replyPageNav">
			<ul class="pagination justify-content-center" style="margin:20px 0"></ul>
		</div>
	</div>


<!-- The Modal -->
<div class="modal" id="boardReplyModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">댓글 등록</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
		  <label for="comment">댓글 입력</label>
		  <textarea class="form-control" rows="5" id="replyContent"></textarea>
		</div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-success" id="modalReplyWriteBtn">등록</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">취소</button>
      </div>

    </div>
  </div>
</div>



<!-- 처리 결과 모달 -->
<div class="modal" id="resultModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">처리 결과</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body" id="resultModalBody">
       
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">닫기</button>
      </div>

    </div>
  </div>
</div>

<script type="text/javascript">

	//게시판 글 번호 받기
	let no = ${vo.no};
	let page = 1; 
	
	
</script>
<script src="/js/util.js"></script>
<script src="/js/reply.js"></script>
<script src="/js/replyProcess.js"></script>
