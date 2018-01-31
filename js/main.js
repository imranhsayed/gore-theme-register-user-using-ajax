/**
 * Main javaScript File
 *
 * @package Gore
 */

(function( $ ) {
	"use strict";

	var post = {

		init: function() {
			post.addRegisterFormEvent();
		},

		/**
		 * Register a user for the register-form.php register form page
		 */
		register: function() {
			var username = document.getElementById( 'gore-login-username' ).value,
				useremail = document.getElementById( 'gore-login-email' ).value,
				userpass = document.getElementById( 'gore-login-pass' ).value;
			console.log( username );

			var request = $.post({
				url: postdata.ajax_url,
				data: {
					action: 'my_ajax_hook',
					user_name: username,
					user_email: useremail,
					user_pass: userpass
				}
			});

			request.done( function( resp ) {
				console.log( resp, 'done' );
			} );

			request.fail( function() {
				console.log( 'Error' );
			} );
			
		},

		/**
		 * Add an event on the submit form button for registering a user for the register-form.php register form page.
		 */
		addRegisterFormEvent: function() {
			var form = document.getElementById( 'register-form' );
			console.log( form );
			form.addEventListener( 'submit', function( event ) {
				event.preventDefault();
				post.register();
			} )
		}

	};

	post.init();

})(jQuery);