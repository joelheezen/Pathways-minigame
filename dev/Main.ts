window.addEventListener("load", () => new Startscreen())

class Startscreen{
    constructor(){
        this.createStartLayout()
    }

    startSituation(number:number){
        new Situation(number)
    }

    createStartLayout(){
        let game = document.getElementsByTagName("game")[0]
        let mascotte = document.createElement("mascotte")
        let startButton = document.createElement("startbutton")
        game.appendChild(mascotte)
        game.appendChild(startButton)
        startButton.addEventListener("click",() => this.startSituation(1))
    }
}
