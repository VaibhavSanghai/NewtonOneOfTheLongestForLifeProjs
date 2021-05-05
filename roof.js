class Roof {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position; 

        rectMode(CENTER); 
        fill("brown"); 
        rect(pos.x, pos.y, this.width, this.height);
    }
}

/*Roof class is nothing but a ground class placed at a height*/
/*Use the ground class created from project of class 24*/