class stone  {
  
    constructor(x,y,width,height){
        var options = {
     'density': 2,
     'friction': 1.0,
    'restitution': 0.5
        }
        this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    World.add(world,this.body)
    
     }
     display(){
       fill('purple')
         rect(this.body.position.x,this.body.position.y,this.width,this.height)
         
     }
    }