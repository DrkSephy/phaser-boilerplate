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

	function init(tile) {
		// initial position
		this.initialTile = tile;

		// Add a sprite
		this.sprite = this.gameReference.add.sprite(
			this.getTileX(this.initialTile.x),
			this.getTileY(this.initialTile.y),
			this.spriteName
		);

		// Set the anchor
		this.sprite.anchor.setTo(
			SpriteConstants.Anchor.X,
			SpriteConstants.Anchor.Y
		);

		// Set movement variables
		this.walkingSpeed = SpriteConstants.WalkingSpeed.NORMAL;
		this.walkingDirection = SpriteConstants.Direction.DOWN;

		// Set animation variables
		this.animSpeed = SpriteConstants.AnimFPS.NORMAL;

		// Setup animations
		this.addBasicAnimation();
	}

})();