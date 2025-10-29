

function showList(page){
	
	replyService.list({no: no, page: page}, function(data){
		let list = data.list;
		let str = "";
		
		if(!list || list.length == 0) {
				str += "댓글이 존재하지 않습니다.";
				$("#replyPageNav").hide();
		} else {
			for(let i = 0; i < list.length; i++){
				str += `<div class="card dataRow" data-rno="${list[i].rno}">`
				str += `		<div class="card-header">`
				str += `			<span class="font-weight-bold">${list[i].id}</span>`
				str += `			<span class="float-right">${displayTime(list[i].writeDate)}</span>`
				str += `		</div>`
				str += `		<div class="card-body"><pre class="replyContent">${list[i].content}</pre>`
				if(list[i].id == data.id){
					str += `<hr><button class="btn btn-success btn-sm replyUpdateBtn">수정</button>`;
					str += `<button class="btn btn-danger btn-sm replyDeleteBtn">삭제</button>`;
				}
				str += `</div>`
				str += `	</div>`
			}
			$("#replyPageNav > ul").html(showPageNav(data.pageObject));
			$("#replyPageNav").show();
		}
		
		$("#dataDiv").html(str);
		replyPage = page;
	})
	
}

$("#replyPageNav > ul").on("click", "li", function(){
	if(!$(this).hasClass("disabled")){
		let page = $(this).data("page");
		showList(page);
	}
	return false;
});


$("#replyWriteBtn").on("click", function(){
	$("#replyContent").val("");
	$("#modalReplyWriteBtn").show();
	$("#modalReplyUpdateBtn").hide();
	
});

$("#modalReplyWriteBtn").on("click", function(){
	let reply = {no: no, content: $("#replyContent").val()};
	replyService.write(reply, function(result){
		showList(1);
		
		$("#resultModalBody").text(result);
		$("#resultModal").modal("show");
	});
	$("#boardReplyModal").modal("hide");
});

$("#dataDiv").on("click", ".replyUpdateBtn", function(){
	let dataRowObj = $(this).closest(".dataRow");
	let rno = dataRowObj.data("rno");
	$("#replyRno").val(rno);
	$("#replyContent").val(dataRowObj.find(".replyContent").text());
	$("#modalReplyWriteBtn").hide();
	$("#modalReplyUpdateBtn").show();
	$("#boardReplyModal").modal("show");
	
});

$("#modalReplyUpdateBtn").on("click", function(){
	let reply = {rno: $("#replyRno").val(), content: $("#replyContent").val()};
	replyService.update(reply, function(result){
		showList(replyPage);
				
		$("#resultModalBody").text(result);
		$("#resultModal").modal("show");
	});
	$("#boardReplyModal").modal("hide");
});

$("#dataDiv").on("click", ".replyDeleteBtn",function(){
	if(confirm("정말 댓글을 삭제하시겠습니까?")){
		let rno = $(this).closest(".dataRow").data("rno");
		replyService.delete(rno, function(result){
			showList(1);
			
			$("#resultModalBody").text(result);
			$("#resultModal").modal("show");
		});
	}
});


$(function(){
	showList(1);
});
