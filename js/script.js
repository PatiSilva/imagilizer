$(document).ready(function(){


	// $('.fadein img:gt(0)').hide();

	// When you click on a thumbnail,
	// 1. remove .active from all thumbnails
	// 2. Add .active to the clicke thumbnail
	// 3. Fade out current image
	// 3. Fade in the clicked image
	
	$('#sidebar img').click(function (e) {
		$('#sidebar img').removeClass('active');
		$(this).addClass('active');
		var targetsrc = $(this).attr('src')


		$('#panel img').hide();
		$('#panel img[src="' + targetsrc + '"]').fadeIn(1000);
});



     
     // setInterval(function(){
     //  $('.fadein :first-child').fadeOut()
     //     .next('img').fadeIn()
     //     .end().appendTo('.fadein');
     // }, 3000);

	});

	