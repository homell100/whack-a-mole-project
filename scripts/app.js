$(document).ready(function(){
    $(".mole").click(STATUS.addScore),
    $("button").click(function(){
        STATUS.startPlaying()
        DOM.reset()
        play()
    })
})

function play(){
    STATUS.setMole()
    DOM.showMole(STATUS.numMole)
    setTimeout(function(){
        DOM.hideMole(STATUS.numMole)
        if(!STATUS.timeUp()) play()
    }, CONFIG.HIDE_SPEED*1000)
}
