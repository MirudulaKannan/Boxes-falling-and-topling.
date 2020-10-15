class Box{ 
    constructor(x,y,width,height){ 
        this.width = width; 
        this.height = height; 
        var options = { 
            restitution: 0.5 
        } 
        this.body = bodies.rectangle(x,y,this.width,this.height,options); 
        world.add(myWorld,this.body);
    } 
    display(){
         var pos = this.body.position;
         var ang = this.body.angle;
         push()
         translate(pos.x,pos.y);
         rotate(ang);
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop();
    }
}