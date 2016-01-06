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

	function update(isUpPressed, isRightPressed, isDownPressed, isLeftPressed) {
		if(this.isOntile()) {
			// Clear the previous tile's collision marker
			if(this.currentTile) {
				this.mapReference.setCollisionAt(this.currentTile, false);
			}

			// Get the current tile
			this.currentTile = this.getTileFromCurrentPosition();
			this.mapReference.setCollisionAt(this.currentTile, true);

			// Check surrounding collisions
			this.surroundingCollisions = this.mapReference.getSurroundingCollisionsAt(this.currentTile, true);
			
			// Movement in Up direction
			if(isUpPressed) {
				this.walkingDirection = SpriteConstants.Direction.UP;
				if(!this.surroundingCollisions.up) {
					this.isWalkingAnim = true;
					this.isMoving = true;
				} else {
					this.isWalkingAnim = false;
					this.isMoving = false;
				}
			}

			// Movement in right direction
			else if(isRightPressed) {
				this.walkingDirection = SpriteConstants.Direction.RIGHT;
				if(!this.surroundingCollisions.right) {
					this.isWalkingAnim = true;
					this.isMoving = true;
				}	else {
					this.isWalkingAnim = false;
					this.isMoving = false;
				}
			}

			// Movement in down direction
			else if(isDownPressed) {
				this.walkingDirection = SpriteConstants.Direction.DOWN;
				if(!this.surroundingCollisions.down) {
					this.isWalkingAnim = true;
					this.isMoving = true;
				} else {
					this.isWalkingAnim = false;
					this.isMoving = false;
				}
			} 

			// Movement in left direction
			else if(isLeftPressed) {
				this.walkingDirection = SpriteConstants.Direction.LEFT;
				if(!this.surroundingCollisions.left) {
					this.isWalkingAnim = true;
					this.isMoving = true;
				} else {
					this.isWalkingAnim = false;
					this.isMoving = false;
				}
			} 

			// None of the movement directions were triggered
			else {
				this.isWalkingAnim = false;
				this.isMoving = false;
			}
		} 

		// Player is not on a tile, in mid-movement
		else {
			this.setNextTileFromCurrentDirection();
			this.mapReference.setCollisionAt(this.nextTile, true);
			this.surroundingCollisions = this.mapReference.getSurroundingCollisionsAt(this.nextTile, true);
		}
	}

})();