var peopleCount = 0;
var database;

function setup(){
    var canvas = createCanvas(displayWidth-37,displayHeight);
    database = firebase.database();
    form = new Form();
    form.display();
    user = new User();
}

function draw(){
    background(221, 66, 245)
}


