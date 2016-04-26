$(document).ready(function(){
	$('#unfollow_btn').hover(function(){
		$(this).html("Unfollow");
		$(this).removeClass("btn-primary");
		$(this).addClass("btn-danger");
	}, function(){
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-primary");
		$(this).html("Following");
	})
})