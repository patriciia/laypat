// JavaScript Document
$(document).on("pagecreate","#Historia",function(){
	$("p").on("tap",function(){
		$("span").text("swipe activado!");
	});
});