class Chain {
    constructor(body1,body2){
     
        this.Chain = Constraint.create({
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 50
        })

      World.add(world,this.Chain);
    };
  display(){
    
  var bodyApos = this.Chain.bodyA.position;
  var bodyBpos = this.Chain.bodyB.position;
  push()
  strokeWeight(5);
  stroke("red");
  line(bodyApos.x,bodyApos.y,bodyBpos.x,bodyBpos.y);
  pop()
  }



}