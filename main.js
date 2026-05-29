/**
 * 
 * ----------------------------------------------Registro studenti
 * 
 * 
 * ogni studente deve essere un oggetto con :
 * 
 * nome = document.getElementbyId("nome").value;
 * 
 * 
 * let studente :
 *      {
 *          nome : nome,
 *          cognome : cognome,
 *          eta : eta,
 *          voto : voto,
 *          sport : []    
 *      } 
 * 
 * L applicazione deve avere un form in HTML dove poter inserire : 
 * 
 *      - nome 
 *      - cognome
 *      - eta
 *      - voto
 *      - primo sport
 *      - secondo sport
 * 
 * Dopo aver compilato il form, l utente può cliccare su un bottone 
 * "AGGIUNGI STUDENTE" creando quindi un oggetto studente che andrà 
 * pushato dentro l array di oggetti degli studenti
 * 
 * 
 * Richieste : 
 * 
 *  //BOTTONE 
 *  Aggiungere uno studente
 *      - crea un oggetto con i dati del form e lo aggiungi all array
 * 
 *  //BOTTONE
 *  mostrare gli studenti
 *      - stampa in pagina tutti gli studenti presenti nella array usando forEach()
    
    //BOTTONE
 *  calcolare media voti
        -calcola la media dei voti utilizzando forEach()

    //BOTTONE
 *  mostrare primo studente
        -stampa solamente il primo studente dell array

    //BOTTONE
 *  aggiungere proprietà promosso
        - aggiungi ad ogni studente la proprietà promosso 
        - se il voto è maggiore di 6 sarà true altrimenti false

    //BOTTONE
 *  elimina età primo studente
        
    //BOTTONE
 *  mostra chiavi primo studente
        
    //BOTTONE
 *  mostra valori primo studente

    //BOTTONE
 *  clona primo studente
 *      - crea una copia del primo studente utilizzando un ciclo "for in"
 * 
 * 
 *  Mostrare i risultati in un DIV A PAGINA
 * 
 */



    //-----------------------------------------

    /*Dopo aver compilato il form, l utente può cliccare su un bottone 
 * "AGGIUNGI STUDENTE" creando quindi un oggetto studente che andrà 
 * pushato dentro l array di oggetti degli studenti

 *  //BOTTONE 
 *  Aggiungere uno studente
 *      - crea un oggetto con i dati del form e lo aggiungi all array
 * */



//array studenti
let studenti = [
  {
    nome : "Marco",
    cognome : "Polo",
    eta : 20,
    voto: 8,
    sport: ["nuoto", "arrampicata"]
  },
  {
    nome : "Giulia",
    cognome : "Rossi",
    eta : 30,
    voto: 5,
    sport: ["calcio", "ginnastica ritmica"]
  },
];

//prendo il bottone per la funzione
let aggiungiStudente = document.getElementById("aggiungiStudente");


//funzione prende i dati
aggiungiStudente.addEventListener("click", function(){

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = parseInt(document.getElementById("eta").value);
    let voto = parseFloat(document.getElementById("voto").value);
    let sport1 = document.getElementById("sport1").value;
    let sport2 = document.getElementById("sport2").value;

    // creo oggetto studente
    let studente = {

        nome: nome,
        cognome: cognome,
        eta: eta,
        voto: voto,
        sport: [sport1, sport2]

    };

    // aggiungo lo studente nell'array
    studenti.push(studente);

    console.log(studenti);

    //stampo in pagina

       output.innerHTML += `

         <h5>Nuovo studente</h5>
      
        <p>${studente.nome} ${studente.cognome}</p>

        <p>Età: ${studente.eta}</p>

        <p>Voto: ${studente.voto}</p>

        <p>Sport preferiti: ${studente.sport1} - ${studente.sport2}</p>


    `;


});

//--------------
/*
//BOTTONE
 *  mostrare gli studenti
 *stampa in pagina tutti gli studenti presenti nella array usando forEach()*/ 

let mostraStudenti = document.getElementById("mostraStudenti");

//mi chiamo l'output
let output = document.getElementById("output");


mostraStudenti.addEventListener("click", function(){

    output.innerHTML = `
    
        <h5>Lista studenti</h5>
    
    `;

    studenti.forEach(function(studente){

        output.innerHTML += `
               
            <p>

                - Nome: ${studente.nome} -

                Cognome: ${studente.cognome} -

                Età: ${studente.eta} -

                Voto: ${studente.voto} -

                Sport: ${studente.sport}

            </p>

        `;
     
    });

     document.querySelector("form").reset();

});

/*  //BOTTONE
 *  calcolare media voti
        -calcola la media dei voti utilizzando forEach()
*/


let mediaVoti = document.getElementById("mediaVoti");
let sommaVoti = 0;

mediaVoti.addEventListener("click", function(){

studenti.forEach(function(studente){

    sommaVoti += studente.voto;

});

let mediaVotiOutput = sommaVoti / studenti.length;

 output.innerHTML += `
       
 <p>Media voti: ${mediaVotiOutput}</p>
 
 `;

 sommaVoti = 0

});

  /* //BOTTONE
   mostrare primo studente
   stampa solamente il primo studente dell array
*/

let primoStudente = document.getElementById("primoStudente")

primoStudente.addEventListener("click", function(){

output.innerHTML += `
       
 <p>Il primo studente è: ${studenti[0].nome} ${studenti[0].cognome}</p>
 
 `;


})
/*//BOTTONE
 *  aggiungere proprietà promosso
        - aggiungi ad ogni studente la proprietà promosso 
        - se il voto è maggiore di 6 sarà true altrimenti false*
*/

let aggiungiPromosso = document.getElementById("aggiungiPromosso");

aggiungiPromosso.addEventListener("click", function(){

    studenti.forEach(function(studente){

        if(studente.voto >= 6){
            studente.promosso = true;

            output.innerHTML += `
            <p>
                Lo studente ${studente.nome} ${studente.cognome}
                è promosso
            </p>
        `;

        } else {
            studente.promosso = false;

               output.innerHTML += `
            <p>
                Lo studente ${studente.nome} ${studente.cognome}
                è bocciato
            </p>
        `;
        }

        

    });

});
/*    //BOTTONE
 *  elimina età primo studente
*/

let eliminaEta = document.getElementById("eliminaEta");


eliminaEta.addEventListener("click", function(){

   delete studenti[0].eta;

output.innerHTML += `
       
 <p>Il primo studente è: ${studenti[0].nome} ${studenti[0].cognome} la sua età: ${studenti[0].eta}</p>
 
 `;

 //riporto stato originale
 studenti[0].eta = 20;

})

 /*   //BOTTONE
 *  mostra chiavi primo studente
*/

let mostraChiavi = document.getElementById("mostraChiavi");

mostraChiavi.addEventListener("click", function(){

   let chiavi = Object.keys(studenti[0]);

output.innerHTML += `
       
 <p>Il primo studente è: ${studenti[0].nome} ${studenti[0].cognome} le chiavi sono: ${chiavi}</p>
 
 `;

})

/*  //BOTTONE
 *  mostra valori primo studente
*/

let mostraValori = document.getElementById("mostraValori");

mostraValori.addEventListener("click", function(){

   let valori = Object.values(studenti[0]);

output.innerHTML += `
       
 <p>Il primo studente è: ${studenti[0].nome} ${studenti[0].cognome} i valori sono: ${valori} </p>
 
 `;

})

/*  //BOTTONE
 *  clona primo studente
 *  - crea una copia del primo studente utilizzando un ciclo "for in"
*/

let clonaStudente = document.getElementById("clonaStudente");

clonaStudente.addEventListener("click", function(){

    let clone = {};

    for(let i in studenti[0]){

        clone[i] = studenti[0][i];

    }

    console.log("Ecco il clone:", clone);


    output.innerHTML += `

        <h5>Clone Studente</h5>

        <p>Nome: ${clone.nome}</p>

        <p>Cognome: ${clone.cognome}</p>

        <p>Età: ${clone.eta}</p>

        <p>Voto: ${clone.voto}</p>

        <p>Sport: ${clone.sport}</p>

        <hr>

    `;

});

//tasto pulisci

let pulisci = document.getElementById("pulisci");

pulisci.addEventListener("click", function(){

   output.innerHTML = `
  
   
   `


})
