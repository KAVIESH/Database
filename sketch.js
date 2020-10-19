var ball;
var database, ballPosition, position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ballPosition = database.ref('Ball/Position');
    ballPosition.on("value", readPosition, showError);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
   // ball.x = ball.x + x;
    //b//all.y = ball.y + y;
 database.ref('Ball/Position').set({
     'x': position.x + x, 
     'y': position.y + y,
 })
}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function showError(){
console.log("error");
}