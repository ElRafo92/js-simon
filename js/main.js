'use strict'
/*
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */

/*============================
==============================
        FUNCTIONS
==============================
============================*/
function numberRandom(arrayNum, large, cap) {

    while ( arrayNum.length < large ) {
        let x = Math.floor(Math.random() * cap) + 1;
        if (arrayNum.indexOf(x) === -1) {
            arrayNum.push(x);
        };
    };
};

/*============================
==============================
        MAIN
==============================
============================*/
//Visualizzare in pagina 5 numeri casuali da 1 a 100 senza duplicati.
let lista = document.querySelector('.lista');
const btn = document.querySelector('.btn');


btn.addEventListener('click', function(){
    lista.innerHTML = '';
    let numeriCasuali = [];
    
    
    for (let i = 0; i < 5; i++) {
        let digit = document.createElement('li');
        digit.classList.add('element', 'border', 'bg-elements');
        numberRandom(numeriCasuali, 5, 100);
        digit.innerHTML = numeriCasuali[i];
        lista.append(digit);
    }
    console.log(numeriCasuali)
    //Da lì parte un timer di 30 secondi.
    //Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    const timer = 2;
    setTimeout(function() {
        lista.remove()
    }, timer * 1000);   

    let inputNum = [];
    let numeriUguali = [];
    setTimeout(function() {
        for (let i = 0; i < 5; i++) {
            inputNum.push(Number(prompt('inserisci numero')));
            if (inputNum[i] === numeriCasuali[i]) {
                numeriUguali.push(inputNum[i]);
            }
        
        }
        console.log(inputNum);
        console.log(numeriUguali);

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    const numeri = document.querySelector('.numeri')
    const score = document.querySelector('.score');
    const giusti = document.querySelector('.giusti');
    
    
    score.innerHTML = `i numeri giusti sono ${numeriUguali}`;
    numeri.append(score);
    giusti.innerHTML = `ne hai indovinati ${numeriUguali.length}`;
    numeri.append(giusti);
    
    }, (timer + 1) * 1000);   
});
