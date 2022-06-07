class Situation{
    game = document.getElementsByTagName("game")[0]
    constructor(number:number){
        console.log("situation created " +number)
        this.selectSituation(number)
    }

    selectSituation(number:number){
        switch(number){
            case 1: this.createFirstSituation()
            break;
            case 2: this.createSecondSituation()
            break;
            case 3: this.createThirdSituation()
            break;
        }
    }

    createFirstSituation(){
        console.log("created first situation")
        this.game.innerHTML = ""
    }

    createSecondSituation(){
        console.log("created second situation")
    }

    createThirdSituation(){
        console.log("created third situation")
    }
}