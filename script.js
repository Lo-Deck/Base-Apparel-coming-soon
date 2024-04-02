
const myForm = document.getElementById('sendEmail');;

const myInput = document.getElementById('emailAdress');

const myError = document.getElementById('error');


myForm.addEventListener('submit', function(event){

    if(!myInput.validity.valid)
    {
        error.innerText = 'Please provide a valid form';

        myInput.style.borderColor = 'red';

        myError.classList.add('hidden');
        myInput.focus(); 

        event.preventDefault();
        
    }

});



