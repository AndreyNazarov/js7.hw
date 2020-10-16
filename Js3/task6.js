const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {

  console.dir(event.target);

    if(event.target.value.length === Number(event.target.dataset.length)){
        event.target.classList.add('valid')
        
        return;
        
    }
    console.log(event.target);
    event.target.classList.add("invalid")

})

inputRef.addEventListener("blur", event => 
{
    if(event.target.value.length === 0){
event.target.classList.remove("valid", "invalid")
    }
})
