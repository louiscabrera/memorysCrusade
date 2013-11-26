define(["Game", "Player"], function (Game, Player){

	return function elementIsInside( args ){

		var otherCollider;
		if(args.m_fixtureA.GetBody().GetUserData().id === this.id){
			otherCollider = args.m_fixtureB;
		} else{
			otherCollider = args.m_fixtureA;
		}

		if(otherCollider.GetBody().GetUserData().tag !== "Player"){
			var velocity = {};
			velocity.x = otherCollider.GetBody().GetLinearVelocity().x;
			velocity.y = otherCollider.GetBody().GetLinearVelocity().y;
			var rotation = otherCollider.GetBody().GetAngularVelocity();
			this.objects.push([otherCollider.GetBody().GetUserData(), velocity, rotation]);
			otherCollider.GetBody().GetUserData().hitBox.GetBody().m_type=1;
			otherCollider.GetBody().SetLinearVelocity({x:0,y:0});
			otherCollider.GetBody().SetAngularVelocity(0);
		}
	}
})