var APP = {
    itemSelected: 'VIEW1'
}
window.onload = function() {
    document.getElementById("button1").onclick = function() {
        APP.itemSelected = 'VIEW1';
    }
    document.getElementById("button2").onclick = function() {
        APP.itemSelected = 'VIEW2';
    }
    document.getElementById("button3").onclick = function() {
        APP.itemSelected = 'VIEW3';
    }
};


function draw1() {

    clear();
    background(200,100,100);
    fill(255);
    var d1 = 10 + (sin(ang) * diameter/4) + diameter/4;
    var d2 = 10 + (sin(ang + PI/2) * diameter/4) + diameter/4;
    var d3 = 10 + (sin(ang+ PI) * diameter/4) + diameter/4;

    ellipse(0, height/2, d1, d1);
    ellipse(width/2, height/2, d2, d2);
    ellipse(width, height/2, d3, d3);
    ang += 0.02;
}
function draw2() {
    clear();
    background(0);
    image(gif, 0, 0);
}
function draw3() {
    clear();
    var d = map(mic.getLevel(), 0, 0.1, 1, 25);
    var y = map(mic.getLevel(), 0,0.1, height, 0);
    fill(random(255),255,255);
    ellipse(width/2, y, d*5, d*5);
}