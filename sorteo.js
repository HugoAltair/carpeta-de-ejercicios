const d = document;
export default function draw(btn,selector){
    const getWinner = (selector) =>{
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random()*$players.length),
            winner = $players[random];
        console.log($players,random,winner);
        return `EL ganador es: ${winner.textContent}`;//porque winner es un elemento de una lista
    }
        d.addEventListener("click",e=>{
            if(e.target.matches(btn)){
                let result = getWinner(selector);
                alert(result);
                console.log(result);
            }
        });
    
}