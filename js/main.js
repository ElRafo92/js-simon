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

function nascondi(x) {
    x.classList.add('display-none')
}

function inputRec(array) {
    for (let i = 0; i < 5; i++) {
        array.push(prompt('inserisci numero'))
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
        numberRandom(numeriCasuali, 5, 5);
        digit.innerHTML = numeriCasuali[i];
        lista.append(digit);
    }
    console.log(numeriCasuali)
    //Da lì parte un timer di 30 secondi.
    //Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    let inputNum = [];

    setTimeout(tempo(), 500000);

    //function tempo() {
    for (let i = 1; i <= numeriCasuali.length; i++) {
        inputNum.push(Number(prompt('inserisci numero')));
    }
    //nascondi(lista)
    console.log(inputNum);
    //}
    

    let numeriUguali = [];
    let numeriDiversi = [];

    for (let i = 0; i <= numeriCasuali.length; i++) {
        if (inputNum[i] === numeriCasuali[i]) {
            numeriUguali.push(inputNum[i]);
        } else {
            numeriDiversi.push(inputNum[i]);
        }
    }
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    console.log(numeriUguali);
    console.log(numeriDiversi);

    let numeri = document.querySelector('.numeri')
    let giusti = document.querySelector('.giusti');
    let sbagliati = document.querySelector('.sbagliati');

    giusti.innerHTML = numeriUguali.length;
    giusti.innerHTML = numeriUguali.length;
    numeri.append(giusti);
    sbagliati.innerHTML = numeriDiversi.length;
    numeri.append(sbagliati);

});
