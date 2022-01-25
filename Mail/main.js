// // Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click button
const button = document.getElementById('send');


button.addEventListener('click',

    function(){
                
        const mail = document.getElementById('mail').value;                
        
        for (let i = 0 ; i < mailList.length; i++){

            if (mail == mailList[i]){
                var  pass = true;
                console.log(true);
            }

        }
        
        if (pass == true){
            alert('Bentornato Signore!');
        } else {
            alert ('Pussa via!');
        }
    }

);





