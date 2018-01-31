<?php
/**
 * Created by PhpStorm.
 * User: imransayed
 * Date: 1/30/18
 * Time: 5:35 PM
 */


function gore_enqueue_scripts() {
	wp_enqueue_script( 'gore_main_js', get_template_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0', true );
	wp_localize_script( 'gore_main_js', 'postdata', array(
		'ajax_url' => admin_url( 'admin-ajax.php' ),
	) );
}

add_action( 'wp_enqueue_scripts', 'gore_enqueue_scripts' );

add_action( 'wp_ajax_my_ajax_hook', 'gore_create_user' );

function gore_create_user() {
	wp_create_user( $_POST['user_name'], $_POST['user_pass'], $_POST['user_email'] );
	wp_send_json_success( array(
		'Hello World' => 'hello',
	) );
}
