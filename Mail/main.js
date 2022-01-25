// // Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click button
const button = document.getElementById('send');


button.addEventListener('click',

    function(){
                
        const mail = document.getElementById('mail').value;                
        
        if(mailList.includes(mail)){
            alert('Bentornato Sir!')
        } else {
            alert('Inserisci una mail valida!')
        }
        
    }

);





