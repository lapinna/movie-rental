let movies = JSON.parse(localStorage.getItem("movies"));
let yourMovies = [];

createList(movies, "movie-list", "Rent", "rentMovie");

function rentMovie(index) {
  if (movies[index].count === 0) {
    updadteStock(index, movies[index].count);
    alert("Movie not available!");
  } else {
    movies[index].count -= 1;
    localStorage.setItem("movies", JSON.stringify(movies));
    yourMovies.push(movies[index]);
    localStorage.setItem("yourMovies", JSON.stringify(yourMovies));
    updadteStock(index, movies[index].count);
  }
}

function updadteStock(index, updateCount) {
  let stock = document.querySelectorAll(`.movie-list-3`);
  stock[index].innerHTML = `${updateCount}`;
  if (updateCount === 0) {
    stock[index].innerHTML = `<img src="img/cross.png">`;
  } else {
    stock[index].innerHTML = `<img src="img/check.png">`;
  }
}
