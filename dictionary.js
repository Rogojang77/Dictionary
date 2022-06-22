const words = [];
function addWord() {
  let word = document.getElementById("wordInsert").value;
  words.push(word);
  var list = document.createElement("li");
  list.appendChild(document.createTextNode(word));
  document.querySelector("ul").appendChild(list);
}
function find() {
  let searchedWord = document.getElementById("search").value;
  let exist = 0;
  for (let i = 0; i < words.length; i++) {
    console.log(words[i], searchedWord);
    if (words[i] == searchedWord) {
      exist = 1;
      break;
    }
  }
  if (exist != 0) {
    alert("The word exist in dictionary.");
  } else {
    alert("The word doesn`t exist in dictionary.");
  }
}