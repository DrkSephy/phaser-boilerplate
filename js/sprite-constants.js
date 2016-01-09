var SpriteConstants = (function () {

	'use strict';

	var _constants = {};

	_constants.SIZE = 16;
	_constants.WalkingSpeed = getWalkingSpeed();
	_constants.AnimFPS = getAnimFPS();
	_constants.Animation = getAnims();
	_constants.Anchor = getAnchor();
	_constants.Direction = getDirections();

	return _constants;

	function getWalkingSpeed() {
		return {
			NORMAL: 1,
			SLOW: 0.5,
			SLOWEST: 0.25
		};
	}

	function getAnimFPS() {
		return {
			NORMAL: 6,
			SLOW: 4,
			SLOWEST: 2
		};
	}

	function getAnims() {
		return {
			STILL_UP: 'still-up',
			STILL_DOWN: 'still-down',
			STILL_SIDE: 'still-side',
			WALKING_UP: 'walking-up',
			WALKING_DOWN: 'walking-down',
			WALKING_SIDE: 'walking_side'
		};
	}

	function getAnchor() {
		return {
			X: 0.5,
			Y: 1
		};
	}

	function getDirections() {
		return {
			UP: 'up',
			RIGHT: 'right',
			DOWN: 'down',
			LEFT: 'left'
		};
	}
	
})();