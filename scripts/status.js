const STATUS ={
    state: "STOP",
    score: 0,
    timer: 0,
    numMole: -1,
    startPlaying: function(){
        this.state = "RUNNING",
        this.score = 0,
        this.timer = CONFIG.MAX_TIME
    },
    stopPlaying: function(){
        this.state = "STOP"
    },
    getState: function(){
        return this.state
    },
    resetScore: function(){
        this.score = 0
    },
    addScore: function(){
        this.score++
    },
    getScore: function(){
        return this.score
    },
    setMole: function(){
        this.numMole = UTILITIES.rndNum()
    },
    getMole: function(){
        return this.numMole
    }
}