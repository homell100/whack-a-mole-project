const DOM = {
    updateScore: function(){
        $(".score").text(STATUS.getScore())
    },
    getMoleDiv: function(num){
        return $(`.game div:nth-of-type(${moleNum}) .mole`)
    },
    showMole: function(a){
        $(`.game div:nth-of-type(${a})`).addClass("up")
    },
    hideMole: function(a){
        $(`.game div:nth-of-type(${a})`).removeClass("up")
    },
    hideAllMoles: function(){
        $(".hole").removeClass("up")
    },
    reset: function(){
        //Reset score
        this.updateScore()
        this.hideAllMoles()
    }
}