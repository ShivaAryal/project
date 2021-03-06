function Ball(x,y){
  this.x=x;
  this.y=y;
  this.isClicked=false;
  this.vel_x=random(-1,1);
  this.vel_y=random(-1,1);
  this.acc_x=random(-0.1,0.1);
  this.acc_y=random(-0.1,0.1);
  this.show=function(){
    fill(120,200,255);
    ellipse(this.x,this.y,10,10);
  }
  this.update=function(){
    if(this.isClicked){
     this.x+=this.vel_x;
     this.y+=this.vel_y;
     this.vel_x+=this.acc_x;
     this.vel_y+=this.acc_y;
    }
 }
 this.bounce=function(){
   if((this.x>600)||(this.x<0))
     this.vel_x*=-1;
   if((this.y>600)||(this.y<0))
     this.vel_y*=-1;
 }
 this.isCollision=function(){
    var d = dist(this.x,this.y,mouseX,mouseY);
    if(d<10)
    this.isClicked=true;
 }
}