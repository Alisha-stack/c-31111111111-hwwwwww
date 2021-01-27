class Particle {
    constructor(x,y,radius) {
      var options = {
          
        'restitution':0.8,
        'friction':0.3,
        'density':0.11,
        }
      
        this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
       
      World.add(world, this.body);
      
    }
    display(){
       ellipseMode(RADIUS);
       fill("blue");
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      

      
      
    }
  }