var oLi = $('.wrapper .move');
var index = 0;
var timer = null;
var flag = true;
function init() {

	oLi.css({'left':'800px','z-index':'1','top':'50%','height':'0px','margin-top':'0px'});
	oLi.eq(0).css({'top':'50%','width':'250px','height':'180px','left':'0px','margin-top':'-90px','opacity':'0.4','z-index':'1'});
	oLi.eq(1).css({'top':'0px','width':'400px','height':'300px','left':'200px','margin-top':'0px','opacity':'1','z-index':'100'});
	oLi.eq(2).css({'top':'50%','width':'250px','height':'180px','left':'550px','margin-top':'-90px','opacity':'0.4','z-index':'1'});

}
function leftMove() {
	oLi.css({'z-index':'1'});
	if(flag) {
		flag = false;
		oLi.eq(index % 6).animate({'left':'-250px','top':'50%','width':'250px','height':'0px','margin-top':'0px'});
		oLi.eq((index + 1)%6) .animate({'left':'0px','top':'50%','width':'250px','height':'180px','margin-top':'-90px','opacity':'0.4','z-index':'1'});
		oLi.eq((index + 2)%6).animate({'left':'200px','top':'0px','width':'400px','height':'300px','margin-top':'0px','opacity':'1','z-index':'100'});
		oLi.eq((index + 3)%6).animate({'left':'550px','top':'50%','width':'250px','height':'180px','margin-top':'-90px','opacity':'0.4','z-index':'1'},function(){
			index ++;
			flag = true;
		});
	}	
}
function rightMove() {
	oLi.css({'z-index':'1'});
	if(flag) {
		flag = false;
		oLi.eq((index - 1) % 6).css({'left':'-250px'});
		oLi.eq((index - 1 )% 6).animate({'left':'0px','top':'50%','width':'250px','height':'180px','margin-top':'-90px','opacity':'0.4','z-index':'1'});
		oLi.eq((index)%6) .animate({'left':'200px','top':'0px','width':'400px','height':'300px','margin-top':'0px','opacity':'1','z-index':'100'});
		oLi.eq((index + 1)%6).animate({'left':'550px','top':'50%','width':'250px','height':'180px','margin-top':'-90px','opacity':'0.4','z-index':'1'});
		oLi.eq((index + 2)%6).animate({'left':'800px','top':'50%','width':'250px','height':'0px','margin-top':'0px','opacity':'0.4','z-index':'1'},function(){
			index --;
			flag = true;
		});
	}	
}
timer = setInterval(leftMove,1000);
$('.wrapper .btnLeft').on('click',function () {
	leftMove();
})
$('.wrapper .btnRight').on('click',function () {
	rightMove();
})

$('.wrapper').on('mousemove',function(){
	clearInterval(timer);
})
$('.wrapper').on('mouseout',function(){
	timer;
})
init();