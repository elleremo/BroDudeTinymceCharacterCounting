<?php
/*
Plugin Name: BroDude Tinymce Character Counting
Author: ellereemo
Version: 1.0.0
*/


class BroDudeTinymceCharacterCounting {

	public static function run() {
		add_filter( 'init', [ __CLASS__, 'init' ] );
	}

	public static function init() {
		add_filter( 'mce_external_plugins', [ __CLASS__, 'advanced_features' ] );
	}


	public static function advanced_features( $init ) {
		$init['keyup_event'] = plugins_url( 'public/js/keyup_event.js', __FILE__ );

		return $init;
	}
}

BroDudeTinymceCharacterCounting::run();
