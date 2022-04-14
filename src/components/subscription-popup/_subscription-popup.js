import * as $ from 'jquery'
import "magnific-popup"


$(document).ready(function() {
	$('.subscription-popup-link').magnificPopup({
		type: 'inline',
		focus: '#name',
		// fixedContentPos: false,
	});
	$(document).on('click', '.subscription-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	// $("#birthday-registration").mask("(999) 999-9999");
});