// // Definisco un array con le mail consentite
const mailList = ['ciccio@gmail.com' , 'paperino@gmail.com' , "oreste@gmail.com"];

// click button
const button = document.getElementById('send');


button.addEventListener('click',

    function(){
                
        const mail = document.getElementById('mail').value;                
        
        for (let i = 0 ; i < mailList.length; i++){

            switch (mail){
                case mailList[0]:
                    console.log(mail)
                case mailList[1]:
                    console.log(mail)
                    
                case mailList[2]:
                    console.log(mail)

                alert('benvenuto')
                    break;
                default:
                    alert('scio')
                    break;            
            }

            



        }
        
    }

);





