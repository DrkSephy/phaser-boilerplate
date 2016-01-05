var Player = (function () {
	
	'use strict';

	function Class(game, map) {
		_.extend(this, new AbstractSprite(game, map));
	
		this.className = 'Player';
		this.spriteName = 'player';
		this.spriteSheetPath = 'PATH/TO/SPRITESHEET';
	}

	Class.prototype = {
		preload: preload,
		init: init,
		update: update
	}

	// Extend the Class prototype object
	_.extend(Class.prototype, AbstractSprite.prototype);

	return Class;


	function preload() {
		this.gameReference.load.spritesheet {
			this.spriteName,
			this.spriteSheetPath,
			SpriteConstants.SIZE,
			SpriteConstants.SIZE
		};
	}

})();