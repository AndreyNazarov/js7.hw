const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingRef = document.querySelector("#ingredients");


const liRef = (element) => {
   element.map((el) => {
    let makeLiRef = document.createElement("li");
    makeLiRef.textContent = el
    
  });
  ingRef.append(...element);
    console.log(ingRef);
};


// const connectRef = element => {
//     const makeUlRef = document.createElement("ul");

//     makeUlRef.append(element)
//     console.log(makeUlRef);
// }
liRef(ingredients);

// connectRef(liRef)
