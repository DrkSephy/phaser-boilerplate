var AbstractSprite = (function () {

	'use strict';

	function Class(game, map) {
		
		this.gameReference = game;
		this.mapReference = map;
		this.className = 'AbstractSprite';

		// Properties
		this.sprite 			   = null;
		this.spriteName 		 = null;
		this.spriteSheetPath = null;

		// Positional variables
		this.initialTile = null;
		this.currentTile = null;
		this.nextTile 	 = null;

		// Animation variables
		this.animSpeed = 0;
		this.isWalkingAnim = false;

		// Movement variables
		this.surroundingCollisions = null;
		this.walkingDirection = null;
		this.walkingSpeed = 0;
		this.isMoving = false;
	}

	Class.prototype = {
		
		// Animation Methods
		addBasicAnimation: addBasicAnimation,
		setAnim: setAnim,

		// Movement methods
		move: move,

		// Tile management methods
		isOnTile: isOnTile,
		getTileFromCurrentPosition: getTileFromCurrentPosition,
		setNextTileFromCurrentDirection: setNextTileFromCurrentDirection,
		getTileX: getTileX,
		getTileY: getTileY
	}; 

	return Class;

	

})();