class Prompt{
    h1 = document.createElement("h1") as HTMLElement
    constructor(text:string){
        this.h1.innerHTML = text
        this.h1.classList.add("question")
    }

    returnPrompt(){
        return this.h1
    }
}