var gameState = 0
var playerCount = 0
var database 
var game
var player
var form
var allplayers
var car1s,car2s,car3s,car4s
var cars = []
var endCars = 0
function preload(){
    car1=loadImage("car1.png")
    car2=loadImage("car2.png")
    car3=loadImage("car3.png")
    car4=loadImage("car4.png")
    track=loadImage("track.jpg")
}

function setup(){    
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
    game=new Game()
    game.readGameState()
    game.playtheGame()
    console.log(gameState)
}

function draw(){
    
    background("white");
    if(playerCount===4){
     
     game.writeGameState(1)
    }
    if(gameState===1){
     game.starttheGame()
    }
    if(gameState===2){
        game.end()
    }
}