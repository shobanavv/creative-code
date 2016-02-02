var numBubbles = 5;
var bubbles = [];
var song,mic;

function preload() {
  song = loadSound('images/mirudhangam-bit.mp4');
}


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    gif2 = loadGif('images/fm-yellow.gif');
    gif = loadGif('images/river.gif');
    // frameRate(.7);

    for(var i= 0; i<numBubbles;i++){

        bubbles.push(new Bubble(random(0,windowWidth),random(0,windowHeight)));
    }
    song.loop();
    mic = new p5.AudioIn();
    mic.start();
}

function draw(){

    // image(gif, 50, 250);
//     function draw() {
// var d = map(mic.getLevel(), 0, 0.5, 1, 50);
// var y = map(mic.getLevel(), 0, 0.5, height, 0);



//     ellipse(width/2, y, d, d);




// }
    var d = map(mic.getLevel(), 0, 0.5, 1, 50);
    console.log(d);
    d= d*2;
    background(random(255),105,d*2);

    for(var i = 0; i< bubbles.length; i++){
        bubbles[i].display();
        bubbles[i].move(d);
    }
    for(var i = bubbles.length-1;i>=0;i--){
        var bbubble = bubbles[i];
        if(bbubble.offScreen() == true || bbubble.popped() == true){
            bubbles.splice(i,1);
        }
    }

    if(bubbles.length <= numBubbles) {
        bubbles.push(new Bubble(random(0,windowWidth-50),random(50,windowHeight-50)));
    }
    console.log(bubbles.length);

}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
}
function mouseClicked() {
    noLoop();

    textSize(32);
    text("See you then....",120,120);
    console.log("done");
}