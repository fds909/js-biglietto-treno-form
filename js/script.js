/*
    Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri
    che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
    Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali,
    per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
    Richiesta di oggi 10/03/22:
    Utilizzare lo stesso esercizio con la NUOVA REPOSITORY per utilizzare la manipolazione del DOM vista oggi e
    realizzare il mockup
*/

// Raccolta dati di input tramite DOM
let nameSurname = document.getElementById("nameSurname");
let kilometers = document.getElementById("kilometers");
let ageRange = document.getElementById("age-range");

let yourTicket = document.getElementById("your-ticket");



// Tasto generate
let generate = document.getElementById("generate");

generate.addEventListener('click',
    function() {
        yourTicket.classList.remove('d-none');

        // visualizza nome
        document.getElementById("displayName").innerHTML = nameSurname.value;
        
        // visualizza offerta in base a fascia di età
        let offer = '';
        
        switch (ageRange.value) {
            case 'minorenne':
                offer = 'Biglietto Ridotto (-20%)';
                break;
            case 'maggiorenne':
                offer = 'Biglietto Standard';
                break;
            case 'over65':
                offer = 'Biglietto Ridotto (-40%)'
                break;
        }

        document.getElementById("offer").innerHTML = offer;

        // genera e visualizza carrozza casuale
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);

        // genera e visualizza codice CP casuale
        document.getElementById("CPCode").innerHTML = '9' + Math.floor(Math.random() * 9999);

        //calcolo costo biglietto
        let ticketPrice = 0.21 * kilometers.value;
        console.log(ticketPrice);
        // applicazione eventuale sconto
        if (ageRange.value == 'minorenne') {
            ticketPrice *= 0.8;
        } else if (ageRange.value == 'over65') {
            ticketPrice *= 0.6;
        }

        // visualizzazione prezzo
        document.getElementById('ticket-cost').innerHTML = ticketPrice.toFixed(2) + '€';

    }
)

// Tasto Annulla
let cancel = document.getElementById("cancel");

cancel.addEventListener('click',
    function() {
        yourTicket.classList.add('d-none');
    }
);