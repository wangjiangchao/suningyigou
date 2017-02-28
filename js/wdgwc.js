var num=0;
$("#jia").click(function(){
	$("#shuzi>ul").css('top',num+15+'px');
})

var cc=true;
$('#qxfour').click(function(){
	if (cc) {
		$('#sancen>.zongjia>p:nth-child(1)>em').text('49.00');
		$('#qjs').css('background','#FF3300');
		cc=false;
		
	} else{
		$('#sancen>.zongjia>p:nth-child(1)>em').text('00.00');
		$('#qjs').css('background','#bbb');
		cc=true;
	}
	
})
