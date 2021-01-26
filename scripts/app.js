$(document).ready(function(){
    $("button").click(function(){
        //Hide all moles & set score to 0
        STATUS.startPlaying()
        //Revert such changes to the DOM, as well as hide all moles
        DOM.updateScore(STATUS.getScore())
        DOM.hideAllMoles()
        //Pick a mole and start the game with it
        play()
    })
})

function play(){
    //Get rnd number between 1 and NUM_HOLES and assign such num to the next mole to show
    STATUS.setMole(UTILITIES.rndNum(CONFIG.NUM_HOLES))
    var moleNum = STATUS.getMoleNum()
    var divMole = DOM.getMoleDiv(moleNum)
    //Allow user to click on mole
    STATUS.setMoleClick(false)
    divMole.click(function(){
        //If the mole has not been clicked previously
        if(!STATUS.getMoleClick()){
            //Remove listener to the mole
            divMole.off("click")
            //Set that a mole has been clicked
            STATUS.setMoleClick(true)
            //Add a point to the score
            STATUS.addScore()
            //Update the score
            DOM.updateScore(STATUS.getScore())   
        }
    })
    DOM.showMole(moleNum)
    //Clear all previous setTimeouts
    STATUS.clearTimeouts()
    //Add to the array of timers such timeOut because its is needed to clean them all each time there is a reset
    STATUS.timers.push(
        //After some time hide the mole
        setTimeout(function(){
            //In case the mole has not been clicked, we remove the listener anyway
            divMole.off("click")      
            DOM.hideAllMoles(moleNum)
            //After the mole has hidden, we leave a delay for the next mole to appear  
            if(!STATUS.timeUp(CONFIG.MAX_TIME)) setTimeout(function(){
                STATUS.clearTimeouts()
                //Another mole is shown
                play()
            }, CONFIG.DELAY*1000)
        }, CONFIG.HIDE_SPEED*1000)
    )
}
