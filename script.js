let btn= document.querySelector('#btn1');
let btn2= document.querySelector('#yesButton')
let state = document.querySelector('.state');

btn.addEventListener('mouseover',movimiento);
btn.addEventListener('click', toggleTextoNo);
btn2.addEventListener('click',pintarYesButton);

function movimiento(){
    if(btn.classList.contains('posicion_Normal')){
        btn.classList.replace('posicion_Normal','move1');

    }else if(btn.classList.contains('move1')){
        btn.classList.replace('move1','move2');
    }else if(btn.classList.contains('move2')){
        btn.classList.replace('move2','move3');
    }else if(btn.classList.contains('move3')){
        btn.classList.replace('move3','move4');
    }else if(btn.classList.contains('move4')){
        btn.classList.replace('move4','move5');
    }else if(btn.classList.contains('move5')){
        btn.classList.replace('move5','move6');
    }else if(btn.classList.contains('move6')){
        btn.classList.replace('move6','move7');
    }else if(btn.classList.contains('move7')){
        btn.classList.replace('move7','posicion_Normal');
    }
    
}
function toggleTextoNo() {
    if (state.innerText === "¡Atrapaste el 'NO'!") {
        state.innerText = "";
    } else {
        state.innerText = "¡Atrapaste el 'NO'!";
    }
}
function pintarYesButton() {
    if (btn2.classList.contains("desPintado")) {
        btn2.classList.replace("desPintado", "pintado");
        state.innerText = "¡Felicidades, has presionado el botón 'Sí'!";
    } else if (btn2.classList.contains("pintado")) {
        btn2.classList.replace("pintado", "desPintado");
        state.innerText = "";
    }
}
