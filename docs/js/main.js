window.addEventListener("load", function () { return new Startscreen(); });
var Startscreen = (function () {
    function Startscreen() {
        this.createStartLayout();
    }
    Startscreen.prototype.startSituation = function (number) {
        new Situation(number);
    };
    Startscreen.prototype.createStartLayout = function () {
        var _this = this;
        var game = document.getElementsByTagName("game")[0];
        var mascotte = document.createElement("mascotte");
        var startButton = document.createElement("startbutton");
        game.appendChild(mascotte);
        game.appendChild(startButton);
        startButton.addEventListener("click", function () { return _this.startSituation(1); });
    };
    return Startscreen;
}());
var Situation = (function () {
    function Situation(number) {
        this.game = document.getElementsByTagName("game")[0];
        console.log("situation created " + number);
        this.selectSituation(number);
    }
    Situation.prototype.selectSituation = function (number) {
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
        }
    };
    Situation.prototype.createFirstSituation = function () {
        console.log("created first situation");
        this.game.innerHTML = "";
    };
    Situation.prototype.createSecondSituation = function () {
        console.log("created second situation");
    };
    Situation.prototype.createThirdSituation = function () {
        console.log("created third situation");
    };
    return Situation;
}());
//# sourceMappingURL=main.js.map