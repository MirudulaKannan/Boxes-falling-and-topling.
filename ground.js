class Ground{

    constructor(x,y,width,height){

        this.width = width; 
        this.height = height; 
        var Options = { 
            isStatic: true
        } 
        this.body = bodies.rectangle(x,y,this.width,this.height,Options); 
        world.add(myWorld,this.body);
    } 

    display(){
         var pos = this.body.position;
         rectMode(CENTER);
         fill("pink");
         rect(pos.x,pos.y,this.width,this.height);

    }

}