class Card{
    card = document.createElement("card")
    constructor(number:number){
        this.setCard(number)
    }

    setCard(number:number){
        switch (number){
            case 1: this.card.innerHTML = "test"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 2: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 3: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 4: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 5: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 6: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 7: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 8: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
            case 9: this.card.innerHTML = "testing"
                    this.card.style.backgroundImage = `url(assets/download.jpg)`
            break
        }
    }

    returnCard(){
        return this.card
    }

}