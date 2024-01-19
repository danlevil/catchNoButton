let btn= document.querySelector('#btn1');


btn.addEventListener('mouseover',movimiento);

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