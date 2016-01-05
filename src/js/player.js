var Player = (function () {
	
	'use strict';

	function Class(game, map) {
		_.extend(this, new AbstractSprite(game, map));
	
		this.className = 'Player';
		this.spriteName = 'player';
		this.spriteSheetPath = 'PATH/TO/SPRITESHEET';
	}

	


})();