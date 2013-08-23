$(document).ready(function(){

	// When you click on a thumbnail,
	// 1. remove .active from all thumbnails
	// 2. Add .active to the clicked thumbnail
	// 3. Fade out current image
	// 3. Fade in the clicked image
	
	$('#sidebar img').click(function (e) {
		$('#sidebar img').removeClass('active');
		$(this).addClass('active');
		var targetsrc = $(this).attr('src')


		$('#panel img').hide();
		$('#panel img[src="' + targetsrc + '"]').fadeIn(1000);
	});

});

	