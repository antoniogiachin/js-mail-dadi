// // Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click button
const button = document.getElementById('send');


button.addEventListener('click',

    function(){
                
        const mail = document.getElementById('mail').value;                
        
        let trovato = false;
        // Definisco un let fuori dal ciclo for
        for (let i = 0 ; i < mailList.length; i++){

            if (mail == mailList[i]){
                trovato = true;
                // Variabile booleana
            }

        }
        
        if (trovato){
            alert('Bentornato Signore!');
        } else {
            alert ('Pussa via!');
        }
    }

);





