$('.btn-box').click(function() {
	$('.menu-btn').toggleClass('active');
	$('.welcome-nav').toggleClass('active');
});

$('.welcome-nav li').click(function() {
	$('.menu-btn').toggleClass('active');
	$('.welcome-nav').toggleClass('active');
});

$('.project').click(function() {
	$(this).toggleClass('active');
	$('.aside').toggleClass('active');
});