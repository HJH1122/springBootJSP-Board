console.log("233")

let replyService = (function(){
	
	function list(param, callback, error){
		console.log("댓글 리스트 처리");
		
		let no = param.no;
		let page = param.page || 1;
		
		$.getJSON("/boardreply/list.do?no=" + no + "&page=" + page,
			function(data, status, xhr){
				console.log("data=", JSON.stringify(data));
				
				if(callback) callback(data);
				
			}
		).fail(function(xhr, status, err){
			console.log("xhr=", xhr);
			console.log("status=", status);
			console.log("err=", err);
			
			if(error) error();
			else alert('댓글 리스트 오류');
		})
		
	}
	
	function write(){
		console.log("댓글 등록 처리");
	}
		
	function update(){
			console.log("댓글 수정 처리");
	}
			
	function deleteReply(){
			console.log("댓글 삭제 처리");
	}
	
	return{
		list: list,
		write: write,
		update: update,
		delete: deleteReply
	}
})();