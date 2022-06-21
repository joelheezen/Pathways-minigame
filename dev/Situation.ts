class Situation{
    game = document.getElementsByTagName("game")[0] 
    cardBox = document.createElement("cardbox")
    card1 :HTMLElement
    card2 :HTMLElement
    card3 :HTMLElement
    submitSelection :HTMLElement
    selection = "mid"
    touchstartX = 0
    touchendX = 0
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

    checkDirection() {
        if (this.touchendX < this.touchstartX && this.touchendX - this.touchstartX < -40) {this.cycleRight()}
        if (this.touchendX > this.touchstartX && this.touchendX - this.touchstartX > 40) {this.cycleLeft()}
    }

    createCardBox(){
        this.game.innerHTML = ""
        this.game.appendChild(this.cardBox)
        let leftCycle = document.createElement("leftcycle")
        let rightCycle = document.createElement("rightcycle")
        this.game.appendChild(leftCycle)
        leftCycle.style.backgroundImage = `url(assets/arrow-left.png)`
        leftCycle.style.backgroundSize = `100% 100%`
        rightCycle.style.backgroundImage = `url(assets/arrow-right.png)`
        rightCycle.style.backgroundSize = `100% 100%`
        this.game.appendChild(rightCycle)
        leftCycle.addEventListener("click", () => this.cycleLeft())
        rightCycle.addEventListener("click", () => this.cycleRight())

        document.addEventListener('touchstart', e => {
            this.touchstartX = e.changedTouches[0].screenX
        })

        document.addEventListener('touchend', e => {
            this.touchendX = e.changedTouches[0].screenX
            this.checkDirection()
        })
    }

    createFirstSituation(){
        this.game.appendChild(new Prompt("Je bent onderweg naar huis, welke weg zou je nemen?").returnPrompt())
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
        this.game.appendChild(new Prompt("Iemand benadert je, op wie zou je reageren?").returnPrompt())
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
        this.game.appendChild(new Prompt("Je ziet iemand seksueel geintimideert worden, help je, bel je de politie of troost je die persoon nadat het gebeurt is?").returnPrompt())
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
        let h1 = document.createElement("H1")
        h1.innerHTML = `keuze`
        lockBtn.appendChild(h1)
        lockBtn.addEventListener("click",() => this.submitCard())
    }

    cycleRight(){
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
        else if (this.selection == "right"){
            this.selection = "left"
            this.card1.style.transform = `translateX(0%)`
            this.card2.style.transform = `translateX(105%)`
            this.card3.style.transform = `translateX(210%)`
        }
    }

    cycleLeft(){
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
        else if (this.selection == "left"){
            this.selection = "right"
            this.card1.style.transform = `translateX(-210%)`
            this.card2.style.transform = `translateX(-105%)`
            this.card3.style.transform = `translateX(0%)`
        }
    }

    submitCard(){
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
        let text = document.createElement("H1")
        text.innerHTML = "Eindresultaten"
        html.style.overflow = `scroll` 
        let htmlGame = this.game as HTMLElement
        htmlGame.style.overflow = `scroll`
        this.game.innerHTML = ""
        let topCard = document.createElement("card")
        this.game.appendChild(text)
        this.game.appendChild(topCard)
        topCard.style.backgroundImage = localStorage.getItem("situation1")
        topCard.style.left = `10vw`
        topCard.style.top = `10vh`

        let middleCard = document.createElement("card")
        middleCard.style.top = `55vh`
        this.game.appendChild(middleCard)
        middleCard.style.backgroundImage = localStorage.getItem("situation2")
        middleCard.style.left = `10vw`

        let bottomCard = document.createElement("card")
        this.game.appendChild(bottomCard)
        bottomCard.style.top = `100vh`
        bottomCard.style.backgroundImage = localStorage.getItem("situation3")
        bottomCard.style.left = `10vw`
        let bottomText = document.createElement("h1")
        bottomText.innerHTML = `bespreek met je groepsgenoten hoe jullie keuzes verschillen en waarom! Daarna mag je een grenzen bloemetje pakken.`
        this.game.appendChild(bottomText)
        bottomText.style.top = `140vh`
    }
    
}