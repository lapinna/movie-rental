const initialMovieData = [
  { title: "Titanic", genre: "Romance", price: 3, count: 2 },
  { title: "28 Days Later", genre: "Science Fiction", price: 3, count: 3 },
  { title: "Blue Valentine ", genre: "Romance", price: 3, count: 0 },
  { title: "Apollo 13", genre: "Historical", price: 3, count: 5 },
  { title: "The Blair Witch Project", genre: "Horror", price: 3, count: 4 },
  { title: "Dumb & Dumber", genre: "Comedy", price: 3, count: 2 },
  { title: "Ghostbusters", genre: "Comedy", price: 5, count: 6 },
  { title: "Avatar", genre: "Science Fiction", price: 3, count: 0 },
];

localStorage.setItem("movies", JSON.stringify(initialMovieData));