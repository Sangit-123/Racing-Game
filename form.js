class Form {
    constructor(){
        this.heading = createElement('h1')
        this.inputbox=createInput("Enter your name")
        this.button = createButton("Play")
        this.greeting = createElement('h2')
        this.resetButton = createButton("Reset the Game")
    }
    display(){
        this.heading.html("Welcome to this car game")
        this.heading.position(displayWidth-1200,displayHeight-1000)
        this.inputbox.position(displayWidth-1150,displayHeight-900)
        this.button.position(displayWidth-1100,displayHeight-850)
        this.resetButton.position(displayWidth-1000,displayHeight-750)
        this.button.mousePressed(()=>
        {
            this.inputbox.hide()
            this.button.hide()
            player.name = this.inputbox.value()
            playerCount = playerCount + 1
            player.writePlayer(playerCount)
            player.position = playerCount
            player.createPlayer()
            this.greeting.html("Hi " + player.name)
            this.greeting.position(250,250)
        })
        this.resetButton.mousePressed(()=>
        {
            player.writePlayer(0)
            game.writeGameState(0)
            var r=database.ref('allplayers')
            r.remove()
        })
    }
    hide(){
        this.inputbox.hide()
        this.button.hide()
        this.greeting.hide()
    }
}