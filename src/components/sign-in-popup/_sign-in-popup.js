import * as $ from 'jquery'
import "magnific-popup";


$(document).ready(function() {
	$('.sign-in-popup-link').magnificPopup({
		type: 'inline',
		focus: '#name',
	});
	$(document).on('click', '.sign-in-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});