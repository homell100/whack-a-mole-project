setTimeout(function(){console.log("Hi")}, 10000)

$(document).ready(function(){
    $("button").click(function(){
        startGame()
    })
})

function startGame(){

    STATUS.startPlaying()
    DOM.reset()
    setTimeout(STATUS.stopPlaying, CONFIG.MAX_TIME*1000)
    while(STATUS.getState() == "RUNNING"){
        console.log(STATUS.getState())

        STATUS.setMole()
        //Show the mole
        DOM.showMole(STATUS.numMole)
        //Retreat mole
        setTimeout(DOM.hideMole, CONFIG.HIDE_SPEED, STATUS.numMole)

        //If clicked, add a point, remove listener and retreat Mole
        
    }
    
}
