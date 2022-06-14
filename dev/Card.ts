class Card{
    card = document.createElement("card")
    constructor(number:number){
        this.setCard(number)
    }

    setCard(number:number){
        switch (number){
            case 1: this.card.style.backgroundImage = `url(assets/Crowded-street.jpg)`
            break
            case 2: this.card.style.backgroundImage = `url(assets/dark-alley.jpg)`
            break
            case 3: this.card.style.backgroundImage = `url(assets/lit-street.jpg)`
            break
            case 4: this.card.style.backgroundImage = `url(assets/hey-jij-daar.png)`
            break
            case 5: this.card.style.backgroundImage = `url(assets/hey-lekker-ding.png)`
            break
            case 6: this.card.style.backgroundImage = `url(assets/psst.png)`
            break
            case 7: this.card.style.backgroundImage = `url(assets/Call.png)`
            break
            case 8: this.card.style.backgroundImage = `url(assets/Help.png)`
            break
            case 9: this.card.style.backgroundImage = `url(assets/comfort.jpg)`
            break
        }
    }

    returnCard(){
        return this.card
    }

}