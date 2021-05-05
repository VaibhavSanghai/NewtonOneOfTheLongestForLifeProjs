class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false, 
            restitution: 0.0, 
            friction: 1.0, 
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 50; 

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position; 
        var angle = this.body.angle; 

        push();
        translate(pos.x, pos.y); 
        rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}

/*Class Bob has to be pasted from the paper class of an earlier class project*/