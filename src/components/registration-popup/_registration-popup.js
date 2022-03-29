import * as $ from 'jquery'
import "magnific-popup"
import "jquery.maskedinput"


$(document).ready(function() {
	$('.registration-popup-link').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
	// $("#birthday-registration").mask("(999) 999-9999");
});

// $(document).ready(function($){
// 	$("#birthday-registration").mask("(999) 999-9999");
// })