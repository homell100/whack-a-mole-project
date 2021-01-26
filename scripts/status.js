const STATUS ={
    //Represents the number of points of a game
    score: 0,
    //Used to control how long the game should run
    timer: 0,
    //Represents which moul will appear and whether it has been already click or not
    mole: {
        num:-1,
        hasBeenClicked: false
    },
    //Array of setTimerout which will be erased often 
    timers: [],
    //Starta new game by setting the initial time and score
    startPlaying: function(){
        this.startingTime = new Date()
        this.score = 0
    },
    //Increase score by 1
    addScore: function(){
        this.score = this.score + 1
    },
    //Return score
    getScore: function(){
        return this.score
    },
    //Returns whether the end has ended or not by running out of time
    timeUp: function(maxTime){    
        return ((new Date()).getTime() - this.startingTime.getTime())/1000>maxTime 
    },
    //Sets which mole will appear next
    setMole: function(n){
        this.mole.num = n
    },
    //Return which mole is active
    getMoleNum: function(){
        return this.mole.num
    },
    //Set whether the mole has been clicked during this period
    setMoleClick: function(bool){
        this.mole.hasBeenClicked = bool
    },
    //Returns whether the mole has been clicked during this period
    getMoleClick: function(){
        return this.mole.hasBeenClicked
    },
    //Clear all previous setTimeouts
    clearTimeouts: function(){
        for(var i=0; i<this.timers.length; i++){
            clearTimeout(this.timers[i])
        }
    }

}