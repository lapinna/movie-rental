const movies = [
  { title: "Titanic", genre: "Romance", price: 3, count: 2 },
  { title: "28 Days Later", genre: "Science Fiction", price: 3, count: 3 },
  { title: "Blue Valentine ", genre: "Romance", price: 3, count: 0 },
  { title: "Apollo 13", genre: "Historical", price: 3, count: 5 },
  { title: "The Blair Witch Project", genre: "Horror", price: 3, count: 4 },
  { title: "Dumb & Dumber", genre: "Comedy", price: 3, count: 2 },
  { title: "Ghostbusters", genre: "Comedy", price: 5, count: 6 },
  { title: "Avatar", genre: "Science Fiction", price: 3, count: 0 },
];

let yourMovies = [];

function createList(items, tableId, btnText) {
  const table = document.getElementById(tableId);

  items.forEach((item, pos) => {
    let row = document.createElement("tr");
    let itemAttributes = Object.values(item);
    table.appendChild(row);

    itemAttributes.forEach((attribute, index) => {
      let data = document.createElement("td");
      data.classList.add(`${tableId}-${index}`, `movie-${pos}`);
      data.innerHTML = attribute;
      row.appendChild(data);
    });

    row.innerHTML += `
    <td>
    <button id="rent-btn-${pos}" class="${tableId}-button" onclick="rentMovie(${pos})">
    ${btnText}
    </button>
    </td>
    `;
  });
  return table;
}

createList(movies, "movie-list", "Rent");

function checkStock(tableId) {
  let stock = document.querySelectorAll(`.${tableId}-3`);
  stock.forEach((elem) => {
    if (elem.innerHTML > 0) {
      elem.innerHTML = `<img src="img/check.png">`;
    } else {
      elem.innerHTML = `<img src="img/cross.png">`;
    }
  });
}
checkStock("movie-list");

function rentMovie(index) {
  if (movies[index].count === 0) {
    alert("Movie not available!");
    movies[index].count -= 1;
    yourMovies.push(movies[index]);
  }
}
