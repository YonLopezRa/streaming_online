import elPadrinoImg from '../images/el_padrino.jpg';
import batmanImg from '../images/batman.jpg';
import pilpFictionImg from '../images/pulp_fiction.jpg';
import matrixImg from '../images/matrix.jpg';
import forrestGumpImg from '../images/forrest_gump.jpg';
import gladiadorImg from '../images/gladiador.jpg';
import titanicImg from '../images/titanic.jpg';
import senorAnillosImg from '../images/senor_anillos.jpg';
import interstellarImg from '../images/interstellar.jpg';
import parasitosImg from '../images/parasite.jpg';
import jokerImg from '../images/joker.jpg';
import inceptionImg from '../images/inception.jpg';
import laLaLandImg from '../images/laland.jpg';
import avengersEndgameImg from '../images/avengers_endgame.jpg';
import cocoImg from '../images/coco.jpg';
import soulImg from '../images/soul.jpg';
import whiplashImg from '../images/whiplash.jpg';
import shrekImg from '../images/shrek.jpg';
import spiderManImg from '../images/spider_man.jpg';
import laVidaEsBellaImg from '../images/la_vida_es_bella.jpg';
const moviesData = [
  {
    id: 1,
    title: "El Padrino",
    director: "Francis Ford Coppola",
    year: 1972,
    synopsis: "La historia de la familia Corleone, una dinastía de la mafia italiana en Estados Unidos.",
    duration: 175,
    genre: ["Crimen", "Drama"],
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    image: elPadrinoImg,
    trailerId: "sY1S34973zA",
    price: 9.99,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 2,
    title: "El Caballero de la Noche",
    director: "Christopher Nolan",
    year: 2008,
    synopsis: "Batman enfrenta al Joker, un criminal caótico que desata el caos en Ciudad Gótica.",
    duration: 152,
    genre: ["Acción", "Crimen", "Drama"],
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    image: batmanImg,
    trailerId: "EXeTwQWrcwY",
    price: 10.99,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    synopsis: "Historias entrelazadas de crimen, redención y violencia en Los Ángeles.",
    duration: 154,
    genre: ["Crimen", "Drama"],
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    image: pilpFictionImg,
    trailerId: "s7EdQ4FqbhY",
    price: 8.99,
    rentalPrice: 3.49,
    rentalDays: 48
  },
  {
    id: 4,
    title: "Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    synopsis: "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
    duration: 136,
    genre: ["Acción", "Ciencia ficción"],
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    image: matrixImg,
    trailerId: "vKQi3bBA1y8",
    price: 8.99,
    rentalPrice: 3.49,
    rentalDays: 48
  },
  {
    id: 5,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    synopsis: "La historia de un hombre con un bajo coeficiente intelectual que presencia eventos históricos clave.",
    duration: 142,
    genre: ["Drama", "Romance"],
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    image: forrestGumpImg,
    trailerId: "bLvqoHBptjg",
    price: 9.49,
    rentalPrice: 3.49,
    rentalDays: 48
  },
  {
    id: 6,
    title: "Gladiador",
    director: "Ridley Scott",
    year: 2000,
    synopsis: "Un general romano busca venganza contra el emperador que asesinó a su familia.",
    duration: 155,
    genre: ["Acción", "Drama"],
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    image: gladiadorImg,
    trailerId: "owK1qxDselE",
    price: 10.49,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 7,
    title: "Titanic",
    director: "James Cameron",
    year: 1997,
    synopsis: "Una historia de amor a bordo del trágico Titanic.",
    duration: 195,
    genre: ["Drama", "Romance"],
    actors: ["Leonardo DiCaprio", "Kate Winslet"],
    image: titanicImg,
    trailerId: "2e-eXJ6HgkQ",
    price: 9.99,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 8,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    director: "Peter Jackson",
    year: 2001,
    synopsis: "Un hobbit emprende una misión para destruir un poderoso anillo.",
    duration: 178,
    genre: ["Aventura", "Fantasía"],
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    image: senorAnillosImg,
    trailerId: "V75dMMIW2B4",
    price: 10.99,
    rentalPrice: 4.49,
    rentalDays: 48
  },
  {
    id: 9,
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "Exploradores viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    duration: 169,
    genre: ["Ciencia ficción", "Drama"],
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    image: interstellarImg,
    trailerId: "zSWdZVtXT7E",
    price: 11.49,
    rentalPrice: 4.99,
    rentalDays: 48
  },
  {
    id: 10,
    title: "Parásitos",
    director: "Bong Joon-ho",
    year: 2019,
    synopsis: "Una familia pobre se infiltra poco a poco en la vida de una familia rica.",
    duration: 132,
    genre: ["Drama", "Suspenso"],
    actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    image: parasitosImg,
    trailerId: "5xH0HfJHsaY",
    price: 10.49,
    rentalPrice: 4.49,
    rentalDays: 48
  },
  {
    id: 11,
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    synopsis: "La transformación de Arthur Fleck en el infame criminal Joker.",
    duration: 122,
    genre: ["Crimen", "Drama", "Psicológico"],
    actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    image: jokerImg,
    trailerId: "zAGVQLHvwOY",
    price: 10.99,
    rentalPrice: 4.49,
    rentalDays: 48
  },
  {
    id: 12,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "Un ladrón roba secretos a través de los sueños usando tecnología de infiltración onírica.",
    duration: 148,
    genre: ["Acción", "Ciencia ficción"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    image: inceptionImg,
    trailerId: "YoHD9XEInc0",
    price: 10.49,
    rentalPrice: 4.49,
    rentalDays: 48
  },
  {
    id: 13,
    title: "La La Land",
    director: "Damien Chazelle",
    year: 2016,
    synopsis: "Un pianista de jazz y una actriz luchan por cumplir sus sueños en Los Ángeles.",
    duration: 128,
    genre: ["Musical", "Romance", "Drama"],
    actors: ["Ryan Gosling", "Emma Stone"],
    image: laLaLandImg,
    trailerId: "0pdqf4P9MB8",
    price: 9.99,
    rentalPrice: 4.49,
    rentalDays: 48
  },
  {
    id: 14,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    year: 2019,
    synopsis: "Los Vengadores restantes luchan para revertir el daño causado por Thanos.",
    duration: 181,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
    image: avengersEndgameImg,
    trailerId: "TcMBFSGVi1c",
    price: 11.99,
    rentalPrice: 4.99,
    rentalDays: 48
  },
  {
    id: 15,
    title: "Coco",
    director: "Lee Unkrich, Adrian Molina",
    year: 2017,
    synopsis: "Un niño viaja al mundo de los muertos para conocer a su tatarabuelo músico.",
    duration: 105,
    genre: ["Animación", "Aventura", "Fantasía"],
    actors: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    image: cocoImg,
    trailerId: "xlnPHQ3TLX8",
    price: 8.99,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 16,
    title: "Soul",
    director: "Pete Docter",
    year: 2020,
    synopsis: "Un músico viaja al más allá tras un accidente y reflexiona sobre la vida.",
    duration: 100,
    genre: ["Animación", "Aventura", "Drama"],
    actors: ["Jamie Foxx", "Tina Fey"],
    image: soulImg,
    trailerId: "xOsLIiBStEs",
    price: 9.49,
    rentalPrice: 3.99,
    rentalDays: 48
  },
  {
    id: 17,
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    synopsis: "Un joven baterista busca la perfección bajo un instructor brutal.",
    duration: 106,
    genre: ["Drama", "Música"],
    actors: ["Miles Teller", "J.K. Simmons"],
    image: whiplashImg,
    trailerId: "7d_jQycdQGo",
    price: 8.49,
    rentalPrice: 3.49,
    rentalDays: 48
  },
  {
    id: 18,
    title: "Shrek",
    director: "Andrew Adamson, Vicky Jenson",
    year: 2001,
    synopsis: "Un ogro solitario se embarca en una misión para rescatar a una princesa.",
    duration: 90,
    genre: ["Animación", "Aventura", "Comedia"],
    actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
    image: shrekImg,
    trailerId: "CwXOrWvPBPk",
    price: 7.99,
    rentalPrice: 3.49,
    rentalDays: 48
  },
  {
    id: 19,
    title: "Spider-Man: No Way Home",
    director: "Jon Watts",
    year: 2021,
    synopsis: "Peter Parker lidia con las consecuencias de que todos conozcan su identidad como Spider-Man.",
    duration: 148,
    genre: ["Acción", "Aventura", "Ciencia ficción"],
    actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    image: spiderManImg,
    trailerId: "JfVOs4VSpmA",
    price: 11.99,
    rentalPrice: 4.99,
    rentalDays: 48
  },
  {
  id: 20,
  title: "La Vida es Bella",
  director: "Roberto Benigni",
  year: 1997,
  synopsis: "Un hombre utiliza su imaginación para proteger a su hijo de los horrores de un campo de concentración nazi.",
  duration: 116,
  genre: ["Drama", "Comedia", "Guerra"],
  actors: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini"],
  image: laVidaEsBellaImg,
  trailerId: "8CTjcVr9Iao",
  price: 8.99,
  rentalPrice: 3.99,
  rentalDays: 48
}
];

export default moviesData;