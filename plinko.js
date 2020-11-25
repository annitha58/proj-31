class Plinko {
    constructor(x, y, r) {
      var options = {
          isStatic: true,
          restitution: 1,
          friction: 0
      }
      this.x = x;
      this.y = y;
      this.r = 10;
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.radius);
      pop();
    }
  };
