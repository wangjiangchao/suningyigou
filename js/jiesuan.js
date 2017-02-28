var cc=true;
$('#xuanze').click(function(){
	if(cc){
		$('#xuanze').css('background-position-y','-36px')
		cc=false;
	}else{
		$('#xuanze').css('background-position-y','-20px')
		cc=true;
	}
	
})
