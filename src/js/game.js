(function () {

	'use strict';

	var GAME_WIDTH = mapConstants.NUM_COLUMNS * mapConstants.TILE_SIZE;
	var GAME_HEIGHT = mapConstants.NUM_ROWS * mapConstants.TILE_SIZE;

	var _game 	= null;
	var _map  	= null;
	var _player = null;
	var _isUpPressed = false;
	var _isRightPressed = false;

	// Auto Initialization
	init();

	// Init
	function init() {
		initPhaser();
	}

	function initPhaser() {
		// Add game
		_game =  new Phaser.Game(
			GAME_WIDTH, GAME_HEIGHT,
			Phaser.CANVAS, 'phaser-js-test',
			{
				preload: preload,
				create: create,
				update: update, 
				render: render
			}
		);

		// Create map
		_map = new Map(_game);

		// Create player 
		_player = new Player(_game, _map);
		_tonberry = new NPC(_game, _map);
	}

	function preload() {
		_map.preload();
		_player.preload();
		_tonberry.preload();
	}
	
})();