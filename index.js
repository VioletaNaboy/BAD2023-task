const form = document.querySelector(".data-string");
const resultEl = document.querySelector(".result");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const string = form.querySelector("input").value;
  const words = string.split(" ");
  const uniqueOfWord = words.map((unit) => {
    const charsOfWord = unit.split("");
    return lookUniqueLetter(charsOfWord);
  });
  const uniqueChar = lookUniqueLetter(uniqueOfWord);
  resultEl.innerHTML = uniqueChar;
});

function lookUniqueLetter(letters) {
  let uniqueLetter = null;

  for (let a = 0; a < letters.length; a++) {
    let isUnique = true;
    for (let i = 0; i < letters.length; i++) {
      if (a !== i && letters[a] === letters[i]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueLetter = letters[a];
      break;
    }
  }

  return uniqueLetter;
}
