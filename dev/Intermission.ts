class Intermission{
    game = document.getElementsByTagName("game")[0]
    constructor(selectedCard:HTMLElement){
        this.game.innerHTML = ""
        this.showSelectedCard(selectedCard)
        this.nextButton()
    }

    showSelectedCard(card:HTMLElement){
        this.game.appendChild(new Prompt("Je hebt gekozen voor").returnPrompt())
        this.game.appendChild(card)
        Situation.selection = "nothing"
        localStorage.setItem("situation" + Startscreen.currentSituation, card.style.backgroundImage)
        card.style.top = `10vh`
        card.style.left = `10vw`
    }

    nextButton(){
        Startscreen.currentSituation += 1
        let btn = document.createElement("lockbtn")
        this.game.appendChild(btn)
        let h1 = document.createElement("h1")
        h1.innerHTML = `volgende`
        btn.appendChild(h1)
        btn.addEventListener("click", () => this.advance(Startscreen.currentSituation))
    }

    advance(n:number){
        new Situation(n)
    }
}