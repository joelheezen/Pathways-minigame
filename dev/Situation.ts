class Situation{
    game = document.getElementsByTagName("game")[0] 
    cardBox = document.createElement("cardbox")
    card1 :HTMLElement
    card2 :HTMLElement
    card3 :HTMLElement
    submitSelection :HTMLElement
    selection = "mid"
    constructor(number:number){
        this.selectSituation(number)
    }

    selectSituation(number:number){
        this.createCardBox()
        switch(number){
            case 1: this.createFirstSituation()
            break;
            case 2: this.createSecondSituation()
            break;
            case 3: this.createThirdSituation()
            break;
            case 4: this.endScreen()
        }
    }

    createCardBox(){
        this.game.innerHTML = ""
        this.game.appendChild(this.cardBox)
        let leftCycle = document.createElement("leftcycle")
        let rightCycle = document.createElement("rightcycle")
        this.game.appendChild(leftCycle)
        this.game.appendChild(rightCycle)
        leftCycle.addEventListener("click", () => this.cycleLeft())
        rightCycle.addEventListener("click", () => this.cycleRight())
    }

    createFirstSituation(){
        console.log("created first situation")
        this.card1 = new Card(1).returnCard()
        this.card2 = new Card(2).returnCard()
        this.card3 = new Card(3).returnCard()
        this.cardBox.appendChild(this.card1)
        this.cardBox.appendChild(this.card2)
        this.cardBox.appendChild(this.card3)
        this.createLockBtn()

        this.card1.style.transform = `translateX(-105%)`
        this.card2.style.transform = `translateX(0%)`
        this.card3.style.transform = `translateX(105%)`
    }

    createSecondSituation(){
        console.log("created second situation")
        this.card1 = new Card(4).returnCard()
        this.card2 = new Card(5).returnCard()
        this.card3 = new Card(6).returnCard()
        this.cardBox.appendChild(this.card1)
        this.cardBox.appendChild(this.card2)
        this.cardBox.appendChild(this.card3)
        this.createLockBtn()

        this.card1.style.transform = `translateX(-105%)`
        this.card2.style.transform = `translateX(0%)`
        this.card3.style.transform = `translateX(105%)`
    }

    createThirdSituation(){
        console.log("created third situation")
        this.card1 = new Card(7).returnCard()
        this.card2 = new Card(8).returnCard()
        this.card3 = new Card(9).returnCard()
        this.cardBox.appendChild(this.card1)
        this.cardBox.appendChild(this.card2)
        this.cardBox.appendChild(this.card3)
        this.createLockBtn()

        this.card1.style.transform = `translateX(-105%)`
        this.card2.style.transform = `translateX(0%)`
        this.card3.style.transform = `translateX(105%)`
    }

    createLockBtn(){
        let lockBtn = document.createElement("lockbtn")
        this.game.appendChild(lockBtn)
        lockBtn.addEventListener("click",() => this.submitCard())
    }

    cycleRight(){
        console.log("cycling right")
        if (this.selection == "mid"){
            this.selection = "right"
            this.card1.style.transform = `translateX(-210%)`
            this.card2.style.transform = `translateX(-105%)`
            this.card3.style.transform = `translateX(0%)`
        }
        else if(this.selection == "left"){
            this.selection = "mid"
            this.card1.style.transform = `translateX(-105%)`
            this.card2.style.transform = `translateX(0%)`
            this.card3.style.transform = `translateX(105%)`
        } 
        else{
            //do nothing because the selector cant go further right
        }
    }

    cycleLeft(){
        console.log("cycling left")
        if (this.selection == "mid"){
            this.selection = "left"
            this.card1.style.transform = `translateX(0%)`
            this.card2.style.transform = `translateX(105%)`
            this.card3.style.transform = `translateX(210%)`
        }
        else if(this.selection == "right"){
            this.selection = "mid"
            this.card1.style.transform = `translateX(-105%)`
            this.card2.style.transform = `translateX(0%)`
            this.card3.style.transform = `translateX(105%)`
        }
        else {
            //do nothing because the selector cant go further left
        }
    }

    submitCard(){
        console.log("test" + this.selection)
        if(this.selection == "left"){
            this.submitSelection = this.card1
        } 
        else if(this.selection == "mid"){
            this.submitSelection = this.card2
        }
        else if(this.selection == "right"){
            this.submitSelection = this.card3
        }
        else{
            //do nothing
        }
        new Intermission(this.submitSelection)
    }
    
    endScreen(){
        let html = document.getElementsByTagName("html")[0]
        html.style.overflow = `scroll` 
        let htmlGame = this.game as HTMLElement
        htmlGame.style.overflow = `scroll`
        this.game.innerHTML = ""
        console.log("endresults")
        let topCard = document.createElement("card")
        this.game.appendChild(topCard)
        topCard.style.backgroundImage = localStorage.getItem("situation1")
        topCard.style.left = `10vw`

        let middleCard = document.createElement("card")
        middleCard.style.top = `45vh`
        this.game.appendChild(middleCard)
        middleCard.style.backgroundImage = localStorage.getItem("situation2")
        middleCard.style.left = `10vw`

        let bottomCard = document.createElement("card")
        this.game.appendChild(bottomCard)
        bottomCard.style.top = `90vh`
        bottomCard.style.backgroundImage = localStorage.getItem("situation3")
        bottomCard.style.left = `10vw`
    }
}