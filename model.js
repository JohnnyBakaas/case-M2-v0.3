const model = {
  movies: [
    {
      name: "Inglourious Basterds",
      picture: "img/inglourious basterds.png",
      description:
        "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      rating: 10,
      genre: ["Adventure", "Drama", "War"],
      id: 0,
    },
    {
      name: "Pulp Fiction",
      picture:
        "img/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 10,
      genre: ["Crime", "Drama"],
      id: 1,
    },
    {
      name: "Once Upon a Time In Hollywood",
      picture: "img/Once Upon a Time... in Hollywood (2019).jpg",
      description:
        "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
      rating: 7,
      genre: ["Comedy", "Drama"],
      id: 2,
    },
    {
      name: "The Hateful Eight",
      picture: "img/The Hateful Eight.jpg",
      description:
        "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
      rating: 8,
      genre: ["Crime", "Drama", "Mystery", "Thriller", "Western"],
      id: 3,
    },
    {
      name: "Django Unchained",
      picture: "img/Django Unchained.jpg",
      description:
        "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
      rating: 8,
      genre: ["Drama", "Western"],
      id: 4,
    },
    {
      name: "Kill Bill: Vol. 1",
      picture: "img/Kill Bill Vol 1.jpg",
      description:
        "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      rating: 8,
      genre: ["Action", "Crime", "Drama", "Thriller"],
      id: 5,
    },
    {
      name: "Kill Bill: Vol. 2",
      picture: "img/Kill Bill Vol.2.jpg",
      description:
        "The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.",
      rating: 8,
      genre: ["Action", "Crime", "Thriller"],
      id: 6,
    },
    {
      name: "Reservoir Dogs",
      picture: "img/Reservoir Dogs.jpg",
      description:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      rating: 10,
      genre: ["Crime", "Thriller"],
      id: 7,
    },
    {
      name: "Batman Begins",
      picture: "img/Batman Begins.jpg",
      description:
        "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
      rating: 9,
      genre: ["Action", "Crime", "Drama"],
      id: 8,
    },
    {
      name: "The Dark Knight",
      picture: "img/The Dark Knight.jpg",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 10,
      genre: ["Action", "Crime", "Drama", "Thriller"],
      id: 9,
    },
    {
      name: "The Dark Knight Rises",
      picture: "img/The Dark Knight Rises.jpg",
      description:
        "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      rating: 8,
      genre: ["Action", "Drama"],
      id: 10,
    },
    {
      name: "Interstellar",
      picture: "img/Interstellar.jpg",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 9,
      genre: ["Adventure", "Drama", "Sci-Fi"],
      id: 11,
    },
  ],
  users: [
    {
      username: "Johnny",
      pasword: "Hemmelig",
      id: 0,
    },
  ],
  watched: [{ userId: 0, movieId: 0, isFavorite: true }],

  userSelected: undefined, //legg inn objektet av brukeren

  genreList: [],
  genreSelected: null,

  togleWatched: false,
  togleFavorite: false,

  excludeMovies: [], //ekskluderer filmer fra mainViuw

  header: {
    logo: "🍅",
    name: "Fresh Tomatoes",
    sorting: "Sorter",
  },
};
