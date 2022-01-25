// Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// Definisco prompt richiesta mail
const userMail = prompt("Inserisci la tua mail")

// Ciclo for per verifica

for (let i = 0 ; i < mailList.length; i++){

    //Controllo funzionamento ciclo for
    // console.log(mailList[i]);

    if (userMail == mailList[i]){
        alert('Benvenuto amico!');
    } else {
        alert('Pussa via!');
    }


}
