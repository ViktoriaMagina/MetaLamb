import * as $ from 'jquery'
import "magnific-popup"
import "jquery.maskedinput"


$(document).ready(function() {
	$('.registration-popup-link').magnificPopup({
		type: 'inline',
		focus: '#name',
		// fixedContentPos: false,
	});
	$(document).on('click', '.registration-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	// $("#birthday-registration").mask("(999) 999-9999");
});