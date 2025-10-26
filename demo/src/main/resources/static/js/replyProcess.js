

function showList(page){
	
	replyService.list({no: no, page: page}, function(data){
		let list = data.list;
		let str = "";
		
		if(!list || list.length == 0) str += "댓글이 존재하지 않습니다.";
		else {
			for(let i = 0; i < list.length; i++){
				str += `<div class="card">`
				str += `		<div class="card-header">`
				str += `			<span class="font-weight-bold">${list[i].id}</span>`
				str += `			<span class="float-right">${list[i].writeDate}</span>`
				str += `		</div>`
				str += `		<div class="card-body" id="dataDiv"><pre>${list[i].content}</pre>`
				if(list[i].id == data.id){
					str += `<hr><button class="btn btn-success btn-sm replyUpdateBtn">수정</button>`;
					str += `<button class="btn btn-danger btn-sm replyDeleteBtn">삭제</button>`;
				}
				str += `</div>`
				str += `	</div>`
			}
		}
		
		$("#dataDiv").html(str);
	})
	
}

$(function(){
	showList(1);
});
