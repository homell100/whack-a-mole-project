const STATUS ={
    state: "STOP",
    score: 0,
    timer: 0,
    startPlaying: function(){
        this.state = "RUNNING",
        this.score = 0,
        this.startingTime = new Date()
    },
    getState: function(){
        return this.state
    },
    resetScore: function(){
        this.score = 0
    },
    addScore: function(){
        console.log(this.score) 
        console.log(STATUS.getScore())
        this.score = this.score + 1

    },
    getScore: function(){
        return this.score
    },
    timeUp: function(){    
        return ((new Date()).getTime() - this.startingTime.getTime())/1000>CONFIG.MAX_TIME 
    },
    setMole: function(){
        this.numMole = UTILITIES.rndNum()
    },
    getMole: function(){
        return this.numMole
    }
}