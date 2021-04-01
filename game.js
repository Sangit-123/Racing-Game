class Game {
    constructor()
    {

    } 
    readGameState(){
        console.log("hi")
        var ref = database.ref("gameState")
        ref.on("value",function(data){
            gameState=data.val()
        }) 
    }
    writeGameState(a){
        database.ref("/").update({
            gameState:a
        })
    }
    playtheGame(){
        if(gameState==0){
           form=new Form()
           player=new Player()
           player.readPlayerCount()
           console.log(playerCount)
           form.display() 
           console.log("hi")
        }
        car1s = createSprite(200,200,50,50)
        car2s = createSprite(500,200,50,50)
        car3s = createSprite(400,200,50,50)
        car4s = createSprite(1000,200,50,50)
        car1s.addImage(car1)
        car2s.addImage(car2)
        car3s.addImage(car3)
        car4s.addImage(car4)
        cars.push(car1s)
        cars.push(car2s)
        cars.push(car3s)
        cars.push(car4s)
    }
    starttheGame(){
        player.readAllPlayers()
        player.readCarsAtTheEnd()
        form.hide()
        var i = 0
        var x = 400
        var y = 0
        image (track,0,-displayHeight*6,displayWidth,displayHeight*7)
        for(var p in allplayers){
            i = i + 1
            cars[i-1].x=x
            y = displayHeight - allplayers[p].distance
            cars[i-1].y = y
            x = x + 350

        if(i==player.position){
            camera.position.x=displayWidth/2
            camera.position.y=cars[i-1].y
        }
    }
    if(player.distance>7200)
    {
        gameState = 2 
        player.rank = endCars + 1
        player.updateCarsAtTheEnd(player.rank)
        
    }
        drawSprites()
        if(keyIsDown(UP_ARROW)){
            player.distance = player.distance + 20
            player.createPlayer()
        }
    }
    end(){
        alert("YOU CAME " + player.rank + "!!!")
        console.log(player.rank)
    }
}
