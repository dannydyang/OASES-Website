$(document).ready(function() {

	// while (true) {
	// 	var shift = parseInt($('.carousel').css('margin-left').replace('px', ''));
	// 	if (shift == -3200) {
	// 		$('.carousel').css('margin-left', 0)
	// 	}
	// 	setTimeout(function() {
	// 		$('.carousel').css('margin-left', shift-640)
	// 	}, 300)
	// }

	$('.next').click(function() {
		var shift = parseInt($('.carousel').css('margin-left').replace("px", ""));
		if (shift == -3200) {
			$('.carousel').css('margin-left', 0)
		} else {
			$('.carousel').css('margin-left', shift-640)
		}
	})
})