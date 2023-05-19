class Ground{
    constructor(x,y,w,h){
        let options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.ground=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.ground)
    }

 display(){
    var pos=this.ground.position;
    push()
    rectMode(CENTER)
    fill("yellow")
    rect (pos.x,pos.y,this.w,this.h)
    pop()
 }
}
