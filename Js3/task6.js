const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    if(event.target.textContent.length === ["data-length"]){
        event.target.classList.add('valid')
    }
    else if(event.target.textContent.length !== ["data-length"]){
        event.target.classList.add('invalid') 
    }
})