var Card = (function () {
    function Card(number) {
        this.card = document.createElement("card");
        this.setCard(number);
    }
    Card.prototype.setCard = function (number) {
        switch (number) {
            case 1:
                this.card.innerHTML = "test";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 2:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 3:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 4:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 5:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 6:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 7:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 8:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
                break;
            case 9:
                this.card.innerHTML = "testing";
                this.card.style.backgroundImage = "url(assets/download.jpg)";
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
        var mascotte = document.createElement("mascotte");
        var startButton = document.createElement("startbutton");
        game.appendChild(mascotte);
        game.appendChild(startButton);
        startButton.addEventListener("click", function () { return _this.startSituation(Startscreen.currentSituation); });
    };
    Startscreen.prototype.startSituation = function (number) {
        new Situation(number);
    };
    Startscreen.currentSituation = 1;
    return Startscreen;
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
        this.game.appendChild(rightCycle);
        leftCycle.addEventListener("click", function () { return _this.cycleLeft(); });
        rightCycle.addEventListener("click", function () { return _this.cycleRight(); });
    };
    Situation.prototype.createFirstSituation = function () {
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
        else {
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
        else {
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
        html.style.overflow = "scroll";
        var htmlGame = this.game;
        htmlGame.style.overflow = "scroll";
        this.game.innerHTML = "";
        console.log("endresults");
        var topCard = document.createElement("card");
        this.game.appendChild(topCard);
        topCard.style.backgroundImage = localStorage.getItem("situation1");
        var middleCard = document.createElement("card");
        middleCard.style.top = "40vh";
        this.game.appendChild(middleCard);
        middleCard.style.backgroundImage = localStorage.getItem("situation2");
        var bottomCard = document.createElement("card");
        this.game.appendChild(bottomCard);
        bottomCard.style.top = "80vh";
        bottomCard.style.backgroundImage = localStorage.getItem("situation3");
    };
    return Situation;
}());
//# sourceMappingURL=main.js.map