class Umbrella{

    constructor(x,y){
        var options={
            isStatic:true
        }

        this.body = Bodies.circle(x,y,50,options);
        this.image = loadImage("man1.jpeg","man2.jpeg","man3.jpeg","man4.jpeg","man5.jpeg","man6.jpeg","man7.jpeg");
        this.radius = 300;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}