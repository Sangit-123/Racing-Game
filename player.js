class Player {
    constructor()
    {
        this.name = ''
        this.distance = 0
        this.position = null
        this.rank = 0
    } 
    readPlayerCount(){
        var ref = database.ref("playerCount")
        ref.on("value",function(data){
            playerCount=data.val()
        }) 
    }
    writePlayer(a){
        database.ref("/").update({
            playerCount:a 
        })
    }
    createPlayer(){
        var name = "allplayers/player " + this.position
        database.ref(name).set({
            name:this.name,
            distance:this.distance
        })
    }
    readAllPlayers(){
        var ref = database.ref("allplayers")
        ref.on("value",function(data){
            allplayers=data.val()
        }) 
    }
    readCarsAtTheEnd(){
        var ref = database.ref("carsAtTheEnd")
        ref.on("value",function(data){
            endCars=data.val()
        }) 
    }
    updateCarsAtTheEnd(a){
        console.log(a)
        database.ref("/").update({
            carsAtTheEnd:a 
        })
    }
}