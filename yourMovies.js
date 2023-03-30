let yourMovies = JSON.parse(localStorage.getItem("yourMovies"));
createList(yourMovies, "your-movie-list", "Remove", "removeMovie");

let collection = document.getElementsByClassName("your-movie-list-2");
for (let i = 0; i < collection.length; i++) {
  collection.item(i).innerHTML = `
  <button class="yourMovies-time-button time-decrement">
    &lt
  </button>
  <span>
    12h
  </span>
  <button class="yourMovies-time-button time-increment">
    &gt
  </button>
  `;
}

let timeMinus = document.querySelectorAll(".time-decrement");
let timePlus = document.querySelectorAll(".time-increment");
let rentTime = document.getElementsByTagName("span");

timePlus.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if (parseInt(rentTime[index].innerHTML) === 168) {
      alert("Max hours reached!");
    } else {
      rentTime[index].innerHTML = parseInt(rentTime[index].innerHTML) + 12 + "h";
    }
  })
})

timeMinus.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if (parseInt(rentTime[index].innerHTML) === 12) {
      alert("Min hours reached!");
    } else {
      rentTime[index].innerHTML = parseInt(rentTime[index].innerHTML) - 12 + "h";
    }
  })
}) 
