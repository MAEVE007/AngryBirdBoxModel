
class Bird {
    constructor(x, y,  height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      
      strokeWeight(4)
      
      rect(0, 0, this.width, this.height);
      
    }
  };
  