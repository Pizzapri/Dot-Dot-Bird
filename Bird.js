class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.smoke=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
if( this.body.velocity.x>10 && this.body.position.x>200 ){
    var pos=[this.body.position.x,this.body.position.y];
    this.smoke.push(pos);
}
   
    for(var smoke=0;smoke<this.smoke.length;smoke++){
      image(this.image2,this.smoke[smoke][0],this.smoke[smoke][1])
    }
    
  }
}
