/**
 * utility JS
 */

let imageExts = ["JPG","JPEG","GIF","PNG","BMP"];

function checkImage(fileName){
	let ext = fileName.substrion(fileName.lastIndexOf(".")+1);

	if(!ext) return false;

	for(i=0; i<imageExts.length; i++){
		if(imageExts[i] == ext){
			return true;
		}
	}
	return false;
}


function displayTime(timeValue){
	// 오늘 날짜 객체 생성 - 24 시간이 지났는지 알아내기 위해서 필요
	var today = new Date();
	
	// 작성 날짜에 대한 형식을 만들려 작성 날짜를 날짜객체로 만들어야 한다.
	var dateObj = new Date(timeValue);
	
	// 댓글 작성 시간과의 차이
	// 날짜객체.getTime() - long 타입의 날짜 데이터가 나온다.
	var gap = today.getTime() - dateObj.getTime();

	
	// 24시간이 안 지난 경우 - 시분초를 출력한다.
	if(gap < (24 * 60 * 60 * 1000)){
		
		var hh = dateObj.getHours();
		var mi = dateObj.getMinutes();
		var ss = dateObj.getSeconds();
		
		// join(구분문자) 배열을 이어주는 함수. 배열 사이에 구분문자를 넣어 줘서 이어준다. 
		return [
			((hh > 9) ? '' : '0') + hh,
			((mi > 9) ? '' : '0') + mi,
			((ss > 9) ? '' : '0') + ss
		].join(':');
	
	// 24시간이 지난 경우 - 날짜 정보만 출력한다.
	} else{
	
		var yy = dateObj.getFullYear();
		// 월은 날짜 객체는 0 ~ 11 까지만 운영을 한다. 우리가 사용하는 월은 + 1 처리해야만 한다.
		var mm = dateObj.getMonth() + 1;
		var dd = dateObj.getDate();
		
		// join(구분문자) 배열을 이어주는 함수. 배열 사이에 구분문자를 넣어 줘서 이어준다. 
		return [
			yy,
			((mm > 9) ? '' : '0') + mm,
			((dd >  9) ? '' : '0') + dd
		].join('-');
	
	}
	
} // displayTime()의 끝
 	

function showPageNav(pageObject) {
    let str = "";

    // 처음으로 이동 버튼
    str += `<li class="page-item ${(pageObject.page != 1) ? '' : 'disabled'}" 
                data-page="1">
                <a class="page-link" href="#">
                    <i class="fa fa-fast-backward"></i>
                </a>
            </li>`;

    // 이전 페이지 그룹 이동 버튼
    str += `<li class="page-item ${(pageObject.startPage != 1) ? '' : 'disabled'}" 
                data-page="${pageObject.startPage - 1}">
                <a class="page-link" href="#">
                    <i class="fa fa-caret-left"></i>
                </a>
            </li>`;

    // 개별 페이지 번호
    for (let i = pageObject.startPage; i <= pageObject.endPage; i++) {
        str += `<li class="page-item ${(pageObject.page == i) ? 'active' : ''}" 
                    data-page="${i}">
                    <a class="page-link" href="#">${i}</a>
                </li>`;
    }

    // 다음 페이지 그룹 이동 버튼
    str += `<li class="page-item ${(pageObject.endPage != pageObject.totalPage) ? '' : 'disabled'}" 
                data-page="${pageObject.endPage + 1}">
                <a class="page-link" href="#">
                    <i class="fa fa-caret-right"></i>
                </a>
            </li>`;

    // 마지막으로 이동 버튼
    str += `<li class="page-item ${(pageObject.page != pageObject.totalPage) ? '' : 'disabled'}" 
                data-page="${pageObject.totalPage}">
                <a class="page-link" href="#">
                    <i class="fa fa-fast-forward"></i>
                </a>
            </li>`;

    return str;
}
