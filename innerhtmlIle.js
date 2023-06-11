function vowels(sentence) {
  let count = 0;
  const sesliHarfler = ["a", "e", "i", "o", "ö", "u", "ü"];
  for (let i of sentence.split("")) {
    if (sesliHarfler.includes(i)) {
      count += 1;
    } else {
      count = count;
    }
  }
  return `There are  <span style="color:red">${count}</span> vowels in "${sentence}"`;
}
// const myString = prompt('enter your sentence:') //input.value

/*ekleme islemi*/
const addBtn = document.querySelector(".btn-primary");
const input = document.querySelector("input");
addBtn.addEventListener("click", (e) => {
  if (!input.value) {
    input.focus();
  } else {
    document.querySelector("ul").innerHTML = `<li>${vowels(input.value)}</li>`;
    input.value = "";
    input.focus();
  }
});

/*silme  islemi*/

const delBtn = document.querySelector(".btn-danger");
const ul = document.querySelector("ul");

delBtn.addEventListener("click", (e) => {
  if (!ul.lastChild) {
    input.focus();
  } else {
    ul.lastChild.remove();
    input.focus();
  }
});

/*enter ve delete tuslarini aktif etme islemi*/

input.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      addBtn.click();
      break;
    case "Delete":
      delBtn.click();
      break;
  }
});

/*2.yol*/

/* input.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "Enter":
            addItem.click();
            break;
          case "Delete":
            delItem.click();
            break;
        }
      });*/

/*tuslarin kod ve key codelarina ulasma */
/* input'un üzerinde iken bir klavye tusuna basilirsa calis*/
/*document.querySelector("#input").addEventListener("keydown", (e) => {
  //   console.log(e.code)
  //   console.log(e.keyCode)
  //? Basilan tus Enter ise
  if (e.code === "Enter") {
    addBtn.click() //? add butonun tiklanma fonksiyonu calistir.
  }
})*/
