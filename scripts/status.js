const STATUS ={
    score: 0,
    timer: 0,
    mole: {
        num:-1,
        hasBeenClicked: false
    },
    timers: [],
    startPlaying: function(){
        this.startingTime = new Date()
        this.score = 0
    },
    addScore: function(){
        this.score = this.score + 1
    },
    getScore: function(){
        return this.score
    },
    timeUp: function(){    
        return ((new Date()).getTime() - this.startingTime.getTime())/1000>CONFIG.MAX_TIME 
    },
    setMole: function(){
        this.mole.num = UTILITIES.rndNum()
    },
    getMoleNum: function(){
        return this.mole.num
    },
    setMoleClick: function(a){
        this.mole.hasBeenClicked = a
    },
    getMoleClick: function(){
        return this.mole.hasBeenClicked
    },
    clearTimeouts: function(){
        for(var i=0; i<this.timers.length; i++){
            console.log("cleared")
            clearTimeout(this.timers[i])
        }
    }

}