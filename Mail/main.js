// // Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click button
const button = document.getElementById('send');

button.addEventListener('click',

    function(){

        const userMail = document.getElementById('mail').value;
        console.log(userMail);

        for (let i = 0 ; i < mailList.length; i++){
        
            //Controllo funzionamento ciclo for
            console.log(mailList[i]);
        
             if (userMail == mailList[i]){
                alert('Benvenuto amico!');
            } else {
                alert('Pussa via!');
            }
        
        
        }



    }

);


// Ciclo for per verifica

