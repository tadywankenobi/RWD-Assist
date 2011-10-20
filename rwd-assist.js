$(document).ready(function(){

	$('body').append('<span id="rwd-assist"><span id="assist-size"></span><select class="assist-ss"><option value="-1">None</option><option>320</option><option>480</option><option>600</option><option>800</option><option>860</option><option>960</option><option>1024</option><option>1280</option><option>1300</option><option>1600</option><option>1800</option></select></span>');

	$('#rwd-assist #assist-size').html($(window).width()+"W x "+$(window).height()+"H");

	$('#rwd-assist').css({
		'margin' : '0',
		'padding' : '3px',
		'background-color' : '#f0f0f0',
		'position': 'absolute',
		'top': '0',
		'right':'0',
		'z-index': '99999'
	});

	$('#rwd-assist #assist-size').css({
		'margin' : '4px 10px 0 0',
		'padding' : '0',
		'color' : '#545454',
		'font-size' : '11px',
		'font-family' : 'sans-serif',
		'font-weight': 'bold',
		'display': 'inline-block'
	});


	$(window).resize(function(){
		$('#rwd-assist #assist-size').html($(window).width()+"W x "+$(window).height()+"H");
	});

	$('#rwd-assist .assist-ss').change(function(){
		if($(this).val() >= "0") {
			window.resizeTo($(this).val(),screen.height);
		}
	});

});