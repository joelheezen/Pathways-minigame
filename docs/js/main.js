var Card = (function () {
    function Card(number) {
        this.card = document.createElement("card");
        this.setCard(number);
    }
    Card.prototype.setCard = function (number) {
        switch (number) {
            case 1:
                this.card.style.backgroundImage = "url(assets/Crowded-street.jpg)";
                break;
            case 2:
                this.card.style.backgroundImage = "url(assets/dark-alley.jpg)";
                break;
            case 3:
                this.card.style.backgroundImage = "url(assets/lit-street.jpg)";
                break;
            case 4:
                this.card.style.backgroundImage = "url(assets/hey-jij-daar.png)";
                break;
            case 5:
                this.card.style.backgroundImage = "url(assets/hey-lekker-ding.png)";
                break;
            case 6:
                this.card.style.backgroundImage = "url(assets/psst.png)";
                break;
            case 7:
                this.card.style.backgroundImage = "url(assets/Call.png)";
                break;
            case 8:
                this.card.style.backgroundImage = "url(assets/Help.png)";
                break;
            case 9:
                this.card.style.backgroundImage = "url(assets/comfort.jpg)";
                break;
        }
    };
    Card.prototype.returnCard = function () {
        return this.card;
    };
    return Card;
}());
var Intermission = (function () {
    function Intermission(selectedCard) {
        this.game = document.getElementsByTagName("game")[0];
        this.game.innerHTML = "";
        this.showSelectedCard(selectedCard);
        this.nextButton();
    }
    Intermission.prototype.showSelectedCard = function (card) {
        this.game.appendChild(new Prompt("Je hebt gekozen voor").returnPrompt());
        this.game.appendChild(card);
        localStorage.setItem("situation" + Startscreen.currentSituation, card.style.backgroundImage);
        card.style.top = "10vh";
        card.style.left = "10vw";
        console.log(card);
    };
    Intermission.prototype.nextButton = function () {
        var _this = this;
        Startscreen.currentSituation += 1;
        var btn = document.createElement("lockbtn");
        this.game.appendChild(btn);
        var h1 = document.createElement("h1");
        h1.innerHTML = "volgende";
        btn.appendChild(h1);
        btn.addEventListener("click", function () { return _this.advance(Startscreen.currentSituation); });
    };
    Intermission.prototype.advance = function (n) {
        new Situation(n);
    };
    return Intermission;
}());
window.addEventListener("load", function () { return new Startscreen(); });
var Startscreen = (function () {
    function Startscreen() {
        this.createStartLayout();
    }
    Startscreen.prototype.createStartLayout = function () {
        var _this = this;
        var game = document.getElementsByTagName("game")[0];
        var mascotte = document.createElement("H1");
        var startButton = document.createElement("startbutton");
        game.appendChild(mascotte);
        mascotte.style.top = "10vh";
        mascotte.innerHTML = "abc-game";
        game.appendChild(startButton);
        var h1 = document.createElement("h1");
        startButton.appendChild(h1);
        h1.innerHTML = "start";
        startButton.addEventListener("click", function () { return _this.startSituation(Startscreen.currentSituation); });
    };
    Startscreen.prototype.startSituation = function (number) {
        new Situation(number);
    };
    Startscreen.currentSituation = 1;
    return Startscreen;
}());
var Prompt = (function () {
    function Prompt(text) {
        this.h1 = document.createElement("h1");
        this.h1.innerHTML = text;
        this.h1.classList.add("question");
    }
    Prompt.prototype.returnPrompt = function () {
        return this.h1;
    };
    return Prompt;
}());
var Situation = (function () {
    function Situation(number) {
        this.game = document.getElementsByTagName("game")[0];
        this.cardBox = document.createElement("cardbox");
        this.selection = "mid";
        this.selectSituation(number);
    }
    Situation.prototype.selectSituation = function (number) {
        this.createCardBox();
        switch (number) {
            case 1:
                this.createFirstSituation();
                break;
            case 2:
                this.createSecondSituation();
                break;
            case 3:
                this.createThirdSituation();
                break;
            case 4: this.endScreen();
        }
    };
    Situation.prototype.createCardBox = function () {
        var _this = this;
        this.game.innerHTML = "";
        this.game.appendChild(this.cardBox);
        var leftCycle = document.createElement("leftcycle");
        var rightCycle = document.createElement("rightcycle");
        this.game.appendChild(leftCycle);
        leftCycle.style.backgroundImage = "url(assets/arrow-left.png)";
        leftCycle.style.backgroundSize = "100% 100%";
        rightCycle.style.backgroundImage = "url(assets/arrow-right.png)";
        rightCycle.style.backgroundSize = "100% 100%";
        this.game.appendChild(rightCycle);
        leftCycle.addEventListener("click", function () { return _this.cycleLeft(); });
        rightCycle.addEventListener("click", function () { return _this.cycleRight(); });
    };
    Situation.prototype.createFirstSituation = function () {
        this.game.appendChild(new Prompt("Je bent onderweg naar huis, welke weg zou je nemen?").returnPrompt());
        console.log("created first situation");
        this.card1 = new Card(1).returnCard();
        this.card2 = new Card(2).returnCard();
        this.card3 = new Card(3).returnCard();
        this.cardBox.appendChild(this.card1);
        this.cardBox.appendChild(this.card2);
        this.cardBox.appendChild(this.card3);
        this.createLockBtn();
        this.card1.style.transform = "translateX(-105%)";
        this.card2.style.transform = "translateX(0%)";
        this.card3.style.transform = "translateX(105%)";
    };
    Situation.prototype.createSecondSituation = function () {
        this.game.appendChild(new Prompt("Iemand benadert je, op wie zou je reageren?").returnPrompt());
        console.log("created second situation");
        this.card1 = new Card(4).returnCard();
        this.card2 = new Card(5).returnCard();
        this.card3 = new Card(6).returnCard();
        this.cardBox.appendChild(this.card1);
        this.cardBox.appendChild(this.card2);
        this.cardBox.appendChild(this.card3);
        this.createLockBtn();
        this.card1.style.transform = "translateX(-105%)";
        this.card2.style.transform = "translateX(0%)";
        this.card3.style.transform = "translateX(105%)";
    };
    Situation.prototype.createThirdSituation = function () {
        this.game.appendChild(new Prompt("Je ziet iemand seksueel geintimideert worden, help je, bel je de politie of troost je die persoon nadat het gebeurt is?").returnPrompt());
        console.log("created third situation");
        this.card1 = new Card(7).returnCard();
        this.card2 = new Card(8).returnCard();
        this.card3 = new Card(9).returnCard();
        this.cardBox.appendChild(this.card1);
        this.cardBox.appendChild(this.card2);
        this.cardBox.appendChild(this.card3);
        this.createLockBtn();
        this.card1.style.transform = "translateX(-105%)";
        this.card2.style.transform = "translateX(0%)";
        this.card3.style.transform = "translateX(105%)";
    };
    Situation.prototype.createLockBtn = function () {
        var _this = this;
        var lockBtn = document.createElement("lockbtn");
        this.game.appendChild(lockBtn);
        var h1 = document.createElement("H1");
        h1.innerHTML = "keuze";
        lockBtn.appendChild(h1);
        lockBtn.addEventListener("click", function () { return _this.submitCard(); });
    };
    Situation.prototype.cycleRight = function () {
        console.log("cycling right");
        if (this.selection == "mid") {
            this.selection = "right";
            this.card1.style.transform = "translateX(-210%)";
            this.card2.style.transform = "translateX(-105%)";
            this.card3.style.transform = "translateX(0%)";
        }
        else if (this.selection == "left") {
            this.selection = "mid";
            this.card1.style.transform = "translateX(-105%)";
            this.card2.style.transform = "translateX(0%)";
            this.card3.style.transform = "translateX(105%)";
        }
        else if (this.selection == "right") {
            this.selection = "left";
            this.card1.style.transform = "translateX(0%)";
            this.card2.style.transform = "translateX(105%)";
            this.card3.style.transform = "translateX(210%)";
        }
    };
    Situation.prototype.cycleLeft = function () {
        console.log("cycling left");
        if (this.selection == "mid") {
            this.selection = "left";
            this.card1.style.transform = "translateX(0%)";
            this.card2.style.transform = "translateX(105%)";
            this.card3.style.transform = "translateX(210%)";
        }
        else if (this.selection == "right") {
            this.selection = "mid";
            this.card1.style.transform = "translateX(-105%)";
            this.card2.style.transform = "translateX(0%)";
            this.card3.style.transform = "translateX(105%)";
        }
        else if (this.selection == "left") {
            this.selection = "right";
            this.card1.style.transform = "translateX(-210%)";
            this.card2.style.transform = "translateX(-105%)";
            this.card3.style.transform = "translateX(0%)";
        }
    };
    Situation.prototype.submitCard = function () {
        console.log("test" + this.selection);
        if (this.selection == "left") {
            this.submitSelection = this.card1;
        }
        else if (this.selection == "mid") {
            this.submitSelection = this.card2;
        }
        else if (this.selection == "right") {
            this.submitSelection = this.card3;
        }
        else {
        }
        new Intermission(this.submitSelection);
    };
    Situation.prototype.endScreen = function () {
        var html = document.getElementsByTagName("html")[0];
        var text = document.createElement("H1");
        text.innerHTML = "Eindresultaten";
        html.style.overflow = "scroll";
        var htmlGame = this.game;
        htmlGame.style.overflow = "scroll";
        this.game.innerHTML = "";
        console.log("endresults");
        var topCard = document.createElement("card");
        this.game.appendChild(text);
        this.game.appendChild(topCard);
        topCard.style.backgroundImage = localStorage.getItem("situation1");
        topCard.style.left = "10vw";
        topCard.style.top = "10vh";
        var middleCard = document.createElement("card");
        middleCard.style.top = "55vh";
        this.game.appendChild(middleCard);
        middleCard.style.backgroundImage = localStorage.getItem("situation2");
        middleCard.style.left = "10vw";
        var bottomCard = document.createElement("card");
        this.game.appendChild(bottomCard);
        bottomCard.style.top = "100vh";
        bottomCard.style.backgroundImage = localStorage.getItem("situation3");
        bottomCard.style.left = "10vw";
        var bottomText = document.createElement("h1");
        bottomText.innerHTML = "bespreek met je groepsgenoten hoe jullie keuzes verschillen en waarom! Daarna mag je een grenzen bloemetje pakken.";
        this.game.appendChild(bottomText);
        bottomText.style.top = "140vh";
    };
    return Situation;
}());
//# sourceMappingURL=main.js.map