const DOM = {
    updateScore: function(){
        $(".score").text(STATUS.getScore())
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