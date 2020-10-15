const firstTaskRef = document.querySelector("#categories");

const liRef = document.querySelectorAll("li.item");
console.log(`В списке ${liRef.length} категории.`);

const findEl = (elements) =>
  elements.forEach((el) => {
    const title = el.querySelector("h2").textContent;
    console.log(`Категория: ${title}`);
    // const countLI = el.childNodes.length;
    const countLI = el.querySelector("ul").children.length;
    console.log(countLI);
    
  });

findEl(liRef);
