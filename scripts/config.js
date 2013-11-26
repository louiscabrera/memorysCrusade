require.config({
		urlArgs: "bust=" +  Date.now(),

	 paths: {
	 		"L"						: "libs/L",
	 		"box2d"					: "libs/box2d",
	 		"RAF"	    			: "libs/requestAnimFrame",
	 		"Init"					: "game/Init",
	 		"B2D"					: "game/Box2D",
	 		"Run"					: "game/Run",
			"Game"      			: "game/Game",
			"Canvas"    			: "game/Canvas",
	 		"Ladder"				: "game/prefabs/Ladder",
	 		"GrabPoint"				: "game/prefabs/GrabPoint",
	 		"BouncingBall"			: "game/prefabs/BouncingBall",
	 		"Player"				: "game/prefabs/Player",
	 		"Spawn"					: "game/prefabs/Spawn",
	 		"Photo" 				: "game/prefabs/Photo",
	 		"Cube" 					: "game/prefabs/Cube",
	 		"StaticPlateform"		: "game/prefabs/StaticPlateform",
	 		"isPlayerInside"		: "game/functions/IsPlayerInside",
	 		"isPlayerOut"			: "game/functions/IsPlayerOut",
	 		"emitContactEvent"		: "game/functions/EmitContactEvent",
	 		"emitEndContactEvent"	: "game/functions/EmitEndContactEvent",
	 		"createB2Object"		: "game/functions/createB2Object",
	 		"doWaitingActions"		: "game/functions/DoWaitingActions",
	 		"checkPoint"			: "game/functions/checkPoint",
	 		"elementIsInside"		: "game/functions/elementIsInside",
	 		"isElementOut"			: "game/functions/isElementOut",
	 		"Zoom"					: "game/functions/Zoom",
	 		"action"				: "game/functions/Action",
	 		"down"					: "game/functions/Down",
	 		"up"					: "game/functions/Up",
	 		"jump"					: "game/functions/Jump",
	 		"control"				: "game/functions/Control",
	 		"move"					: "game/functions/Move",
	 		"death"					: "game/functions/Death",
	 		"AddEvent"				: "game/functions/AddEventHandler",
	 		"snapShoot" 			: "game/functions/snapShoot",
	 		"followPlayer"			: "game/functions/Rendering/FollowPlayer",
	 		"draw"					: "game/functions/Rendering/Draw",
	 		"Camera" 				: "game/Instances/Camera",
	 		"InputsHandler" 		: "game/controlers/InputsHandler"
		}

	, shim: {
			"box2d": {exports: "Box2D"}
		}
});
require(["main"]);