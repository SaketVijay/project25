class Paper{
    constructor (x, y, r){
        var options = {
            isStatic:false,
            restitution:24,
            density:19,
            friction:13
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x, this.y, this.r - 20/2, options)
        World.add(world,this.body)

    }
    display(){
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, this.r, this.r)
    pop();
    }
}