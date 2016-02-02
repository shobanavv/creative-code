function Bubble(tempx,tempy) { // naming object with caps.
  this.x = tempx;
  this.y = tempy;
  // this.speed = ;

this.display = function(d){
  noStroke();
  fill(255,255,0);
  ellipse(this.x,this.y,20,20);
  fill(0);
  stroke(200,100,0);
  strokeWeight(2);
  fill(255);
  ellipse(this.x+5,this.y,5,5);
  fill(0);
  strokeWeight(0);
  ellipse(this.x+7,this.y,3,3);
  beginShape();
  fill(200,0,0);
  vertex(this.x+10, this.y-5);// d is the mic input.
  vertex(this.x+20,this.y);
  vertex(this.x+10, this.y+5);
  endShape(CLOSE);
  fill(255,255,0);
  arc(this.x-13,this.y, 40, 50, .5, PI-.5, OPEN);
  // this.house();

   // line(30, 30, 20, 80);
    // rotate(PI/5);

}
this.house = function() {

}
this.move = function(d){
    this.y = this.y- d;
}
this.offScreen = function(){
  if(this.y<0){
    return true;
  } else {
    return false;
  }
}
this.popped = function() {
  var distance = dist(this.x,this.y,mouseX,mouseY);
  if (distance <= 20){
    return true;
  } else {
    return false;
  }
}

}