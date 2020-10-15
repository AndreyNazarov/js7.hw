const counterRef = document.querySelector("#counter");
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
let countValueRef = document.querySelector("#value");

counterRef.addEventListener("click", (event) => {

  if (event.target === incrementRef) {
    countValueRef.textContent = Number(countValueRef.textContent) + 1;
  }else if (event.target === decrementRef) {
     countValueRef.textContent = Number(countValueRef.textContent) - 1;
   }
});
