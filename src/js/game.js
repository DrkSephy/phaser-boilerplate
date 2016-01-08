(function () {

	'use strict';

	var GAME_WIDTH = mapConstants.NUM_COLUMNS * mapConstants.TILE_SIZE;
	var GAME_HEIGHT = mapConstants.NUM_ROWS * mapConstants.TILE_SIZE;

	var _game 	= null;
	var _map  	= null;
	var _player = null;
	var _isUpPressed = false;
	var _isRightPressed = false;
	var _isDownPressed  = false;
	var _isLeftPressed  = false;
	_keyboardInput      = null;

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

	function create() {
		// Set references
		_keyboardInput = _game.input.keyboard;

		// Init game objects
		_map.init();
		_player.init({x: 1, y: 1});
		_tonberry.init({x: 7, y: 1});
	}

	function update() {
		_player.update(
			_keyboardInput.isDown(Phaser.Keyboard.UP) || _isUpPressed, 
			_keyboardInput.isDown(Phaser.Keyboard.RIGHT) || _isRightPressed,
			_keyboardInput.isDown(Phaser.Keyboard.DOWN) || _isDownPressed,
			_keyboardInput.isDown(Phaser.Keyboard.LEFT) || _isLeftPressed
		);
		_tonberry.update();
	}

	function onUpPressed() {
		_isUpPressed = true;
	}

	function onRightPressed() {
		_isRightPressed = true;
	}

	function onDownPressed() {
		_isDownPressed = true;
	}

	function onLeftPressed() {
		_isLeftPressed = true;
	}

	function onUpReleased() {
		_isUpPressed = false;
	}

	function onRightReleased() {
		_isRightPressed = false;
	}

	function onDownReleased() {
		_isDownPressed = false;
	}

	function onLeftReleased() {
		_isLeftPressed = false;
	}
	
})();