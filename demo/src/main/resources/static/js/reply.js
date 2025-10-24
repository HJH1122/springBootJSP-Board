console.log("233")

let replyService = (function(){
	
	function list(){
		console.log("댓글 리스트 처리");
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