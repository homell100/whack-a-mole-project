const DOM = {
    //Updates the score
    updateScore: function(score){
        $(".score").text(score)
    },
    //Returns the nth mole
    getMoleDiv: function(n){
        return $(`.game div:nth-of-type(${n}) .mole`)
    },
    //Shows the nth mole
    showMole: function(n){
        $(`.game div:nth-of-type(${n})`).addClass("up")
    },
    //Hides the nth mole
    hideMole: function(n){
        $(`.game div:nth-of-type(${n})`).removeClass("up")
    },
    //Hide all moles
    hideAllMoles: function(){
        $(".hole").removeClass("up")
    }
}