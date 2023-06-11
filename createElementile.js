// !Problem Statement
// Take a string from user.
// Calculate the number of vowels and present them on the page.

// !türkce Sorun bildirimi Kullanıcıdan bir dize alın. Ünlülerin sayısını hesaplayın ve sayfada gösterin.

const input = document.querySelector("input");
const btnResult = document.querySelector(".btn-primary");
btnResult.addEventListener("click", (e) => {
  if (!vowels(input.value)) {
    input.focus();
  } else {
    const myString = document.createTextNode(vowels(input.value));
    const li = document.createElement("li");
    li.appendChild(myString);
    const ul = document.querySelector("ul");
    ul.appendChild(li);
    input.value = "";
    input.focus();
  }
});






input.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      btnResult.click();
      break;
    case "Delete":
      btnDelete.click();
      break;
  }
});

function vowels(sentence) {
  let count = 0;
  const sesliHarfler = ["a", "e", "i", "o", "ö", "u", "ü"];
  for (let i of sentence.toLowerCase().split("")) {
    if (sesliHarfler.includes(i)) {
      count += 1;
    } else {
      count = count;
    }
  }
  return `There are ${count} vowels in ${sentence}`;
}
// const myString = prompt('enter your sentence:') //input.value
// console.log(vowels(myString));





const btnDelete = document.querySelector(".btn-danger");
const ul = document.querySelector('ul')
btnDelete.addEventListener("click", (e) => {
  //?burdada tanimlayabilirdim
  // const ul = document.querySelector('ul')
  // const li = document.querySelector('li')
  
    ul.lastChild.remove();
    input.focus();
});