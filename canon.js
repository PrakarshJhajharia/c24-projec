class canon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 40, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = -45;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      strokeWeight(0)
      
      fill(255);
      rect(0, 0, 50, 40);
      
      ellipse(0,-15,this.width)
      fill(0)
      rect(0,-15,100,2)
      fill(255);
      strokeWeight(1)
    stroke("black")
    rotate(angle);
    rect(40,0,20,5)
    
      pop();
    }
  };