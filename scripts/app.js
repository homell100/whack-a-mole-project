$(document).ready(function(){
    $("button").click(function(){
        STATUS.startPlaying()
        //Clear all previous setTimeouts
        STATUS.clearTimeouts()
        //Hide all moles & set score to 0
        DOM.reset()
        play()
    })
})

function play(){
    //Get rnd number between 1 and 6
    STATUS.setMole()
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
            DOM.updateScore()   
        }
    })
    DOM.showMole(moleNum)
    
    STATUS.timers.push(
        //After some time hide the mole
        setTimeout(function(){
            //In case the mole has not been clicked, we remove the listener anyway
            divMole.off("click")      
            DOM.hideMole(moleNum)
            //After the mole has hidden, we leave a delay for the next mole to appear  
            if(!STATUS.timeUp()) setTimeout(function(){
                play()
            }, CONFIG.DELAY*1000)
        }, CONFIG.HIDE_SPEED*1000)
    )
}
