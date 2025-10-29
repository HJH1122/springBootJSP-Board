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
	
	function write(reply, callback, error){
		$.ajax({
			type: "post",
			url: "/boardreply/write.do",
			data: JSON.stringify(reply),
			contentType: "application/json; charset=utf-8",
			success: function(result, status, xhr){
				if(callback){
					callback(result);
				} else {
					alert(result);
				}
				
			},
			error: function(xhr, status, er){
				console.log("reply.js xhr=" , xhr);
				console.log("reply.js status=" , status);
				console.log("reply.js er=" , er);
				if(error) error();
				else alert("댓글 등록 실패");
			},
		})
	}
		
	function update(reply, callback, error){
		$.ajax({
					type: "post",
					url: "/boardreply/update.do",
					data: JSON.stringify(reply),
					contentType: "application/json; charset=utf-8",
					success: function(result, status, xhr){
						if(callback){
							callback(result);
						} else {
							alert(result);
						}
						
					},
					error: function(xhr, status, er){
						console.log("reply.js xhr=" , xhr);
						console.log("reply.js status=" , status);
						console.log("reply.js er=" , er);
						if(error) error();
						else alert("댓글 수정 실패");
					},
				});
			
	}
			
	function deleteReply(rno, callback, error){
		$.ajax({
				type: "get",
				url: "/boardreply/delete.do?rno=" + rno,
				success: function(result, status, xhr){
					if(callback){
						callback(result);
					} else {
						alert(result);
					}
					
				},
				error: function(xhr, status, er){
					console.log("reply.js xhr=" , xhr);
					console.log("reply.js status=" , status);
					console.log("reply.js er=" , er);
					if(error) error();
					else alert("댓글 삭제 실패");
				},
			});
	}
	
	return{
		list: list,
		write: write,
		update: update,
		delete: deleteReply
	}
})();