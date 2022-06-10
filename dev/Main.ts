window.addEventListener("load", () => new Startscreen())

class Startscreen{
    static currentSituation = 1
    constructor(){
        this.createStartLayout()
    }

    createStartLayout(){
        let game = document.getElementsByTagName("game")[0]
        let mascotte = document.createElement("mascotte")
        let startButton = document.createElement("startbutton")
        game.appendChild(mascotte)
        game.appendChild(startButton)
        startButton.addEventListener("click",() => this.startSituation(Startscreen.currentSituation))
    }

    startSituation(number:number){
        new Situation(number)
    }
}
