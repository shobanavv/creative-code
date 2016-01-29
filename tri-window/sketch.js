// // Learning Processing
// // Daniel Shiffman
// // http://www.learningprocessing.com

// // Example 1-1: stroke and fill

var mic;

function setup() {
createCanvas(500,500);
noStroke();
colorMode(HSB);
gif = loadGif('images/mygif.gif');
mic = new p5.AudioIn();
mic.start();
ang = 0.1;
diameter=height-10;

}

function draw() {


    switch (APP.itemSelected) {
        case 'VIEW1':
            draw1();
            break;
        case 'VIEW2':
            draw2();
            break;
        case 'VIEW3':
            draw3();
            break;
        default:
            console.log("nothing to draw");
    }
}