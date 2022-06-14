window.addEventListener("load", () => new Startscreen())

class Startscreen{
    static currentSituation = 1
    constructor(){
        this.createStartLayout()
    }

    createStartLayout(){
        let game = document.getElementsByTagName("game")[0]
        let mascotte = document.createElement("H1")
        let startButton = document.createElement("startbutton")
        game.appendChild(mascotte)
        mascotte.style.top = `10vh`
        mascotte.innerHTML = `abc-game`
        game.appendChild(startButton)
        let h1 = document.createElement("h1")
        startButton.appendChild(h1)
        h1.innerHTML = `start`
        startButton.addEventListener("click",() => this.startSituation(Startscreen.currentSituation))
    }

    startSituation(number:number){
        new Situation(number)
    }
}
