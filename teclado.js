const d = document;
let x = 0,
y=0;
export function shortcuts (e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`);//pa ver si se presiono alguna tecla especial
    // console.log(`alt: ${e.altKey}`);
    // console.log(`shift: ${e.shiftKey}`);

    if(e.key === 'a'&&e.altKey){
        alert('Lanzaste una alerta con el teclado');
    }
    if(e.key === 'c'&&e.altKey){
        confirm('Lanzaste una confirmacion con el teclado');
    }
    if(e.key === 'o'&&e.altKey){
        prompt('Lanzaste un aviso con el teclado');
    }
}
export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
        //console.log(limitsBall,limitsStage);
    switch (e.keyCode) {
        case 37://flecha izquierda
        if(limitsBall.left > limitsStage.left) {
            e.preventDefault();
            x--
            };
            break;
        case 38://flecha arriba
        if(limitsBall.top > limitsStage.top) {
            e.preventDefault();
            y--
            };
            break;
        case 39://flecha derecha
        if(limitsBall.right < limitsStage.right){
            e.preventDefault();
            x++
            };
            break;
        case 40://flecha abajo
        if(limitsBall.bottom < limitsStage.bottom){
            e.preventDefault();
            y++
            };
            break;
        default:
            break;
        }
        $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}