// // document.addEventListener("DOMContentLoaded", () => {
// //   const moviesContainer = document.querySelector(".container");

// //   const renderMovies = () => {
// //     moviesContainer.innerHTML = ""; // Limpia el contenedor antes de agregar contenido
// //     tempData.forEach((movie) => {
// //       const card = document.createElement("div");
// //       card.classList.add("card");

// //       card.innerHTML = `
// //         <img src="${movie.poster}" alt="${movie.title}">
// //         <h2>${movie.title}</h2>
// //         <p><strong>Año:</strong> ${movie.year}</p>
// //         <p><strong>Director:</strong> ${movie.director}</p>
// //         <p><strong>Duración:</strong> ${movie.duration}</p>
// //         <p><strong>Géneros:</strong> ${movie.genre.join(", ")}</p>
// //         <p><strong>Calificación:</strong> ${movie.rate}</p>
// //       `;
// //       moviesContainer.appendChild(card);
// //     });
// //   };

// //   renderMovies(); // Llama a la función para renderizar las películas
// // });
// // Selecciona el contenedor donde se renderizarán las películas
// const moviesContainer = document.querySelector(".container");

// // Función para renderizar las películas en el DOM
// const renderMovies = (movies) => {
//   // Limpia el contenedor antes de agregar nuevas tarjetas
//   moviesContainer.innerHTML = "";

//   // Recorre el array de películas y crea las tarjetas
//   movies.forEach((movie) => {
//     console.log("procesando pelicula",movie)
//     // Crea un contenedor para cada película
//     const card = document.createElement("div");
//     card.classList.add("card"); // Añade la clase "card" para estilos

//     // Agrega el contenido HTML de cada película a la tarjeta
//     card.innerHTML = `
//       <img src="${movie.poster}" alt="${movie.title}">
//       <h2>${movie.title}</h2>
//       <p><strong>Año:</strong> ${movie.year}</p>
//       <p><strong>Director:</strong> ${movie.director}</p>
//       <p><strong>Duración:</strong> ${movie.duration}</p>
//       <p><strong>Géneros:</strong> ${movie.genre.join(", ")}</p>
//       <p><strong>Calificación:</strong> ${movie.rate}</p>
//     `;

//     // Agrega la tarjeta al contenedor principal
//     moviesContainer.appendChild(card);
//   });
// };

// // Función para obtener las películas desde la API usando jQuery
// const fetchMovies = () => {
//   // Hace una solicitud GET a la API
//   $.get("https://students-api.up.railway.app/movies", (data) => {
//     // Si la solicitud es exitosa, renderiza las películas
//     renderMovies(data);
//   }).fail((error) => {
//     // Muestra un error en caso de fallo
//     console.error("Error al obtener los datos de la API:", error);
//   });
// };

// // Cuando el DOM esté completamente cargado, ejecuta fetchMovies
// document.addEventListener("DOMContentLoaded", fetchMovies);
// const moviesContainer = document.querySelector(".container");

// const renderMovies = require('./render');

// // Usa la función render
// const output = render('Hello, World!');
// console.log(output); // Imprime: Rendered content: Hello, World!

// Selecciona el contenedor donde se renderizarán las películas
// Selecciona el contenedor donde se renderizarán las películas
// Asegúrate de que el archivo HTML tenga un elemento con la clase "container"
// Selecciona el contenedor donde se renderizarán las películas
// Asegúrate de que el archivo HTML tenga un elemento con la clase "container"
// Importa la función renderCards desde renderCards.js
// Importa la función renderMovies desde render.js
// Importa axios para manejar la solicitud HTTP
// Importa axios para manejar la solicitud HTTP
// Importa axios para manejar la solicitud HTTP
// Importa Axios correctamente
// Importa Axios correctamente
// const axios = require("axios");

// // Importa la función renderMovies desde el archivo render.js
// const renderMovies = require('./render');

// // Prueba de axios: Función para verificar que la API funciona
// const testAxios = async () => {
//   try {
//     // Realiza una solicitud GET a la nueva API
//     const response = await axios.get("https://students-api.up.railway.app/movies");
//     console.log("Respuesta de prueba obtenida:", response.data); // Muestra los datos en la consola

//     // Llama a la función renderMovies y pasa los datos obtenidos
//     renderMovies(response.data);
//   } catch (error) {
//     console.error("Error al realizar la solicitud de prueba:", error.message);
//   }
// };

// // Ejemplo con Promesas
// const testAxiosWithPromises = () => {
//   axios
//     .get("https://students-api.up.railway.app/movies")
//     .then((response) => {
//       console.log("Respuesta obtenida usando Promesas:", response.data); // Muestra los datos en la consola

//       // Llama a la función renderMovies y pasa los datos obtenidos
//       renderMovies(response.data);
//     })
//     .catch((error) => {
//       console.error("Error al realizar la solicitud con Promesas:", error.message);
//     });
// };

// // Llama a las funciones de prueba
// testAxios(); // Usando Async/Await
// testAxiosWithPromises(); // Usando Promesas

// const axios = require('axios');// Importa la biblioteca Axios, que se utiliza para realizar solicitudes HTTP de manera sencilla.

// // Define una función asíncrona llamada `testAxios` que realiza una solicitud GET.
// const testAxios = async () => {
//   try {
//     // Realiza una solicitud HTTP GET a la URL especificada usando Axios.
//     // Esto intenta obtener una lista de películas de la API proporcionada.
//     const response = await axios.get("https://students-api.up.railway.app/movies");

//     // Muestra los datos obtenidos en la consola para verificar que la solicitud fue exitosa.
//     console.log("Respuesta de prueba obtenida:", response.data);

//     // Comprueba si la función `renderMovies` está definida.
//     // Si lo está, llama a esta función y le pasa los datos obtenidos como argumento.
//     if (typeof renderMovies === "function") {
//       renderMovies(response.data);
//     } else {
//       // Si `renderMovies` no está definida, muestra un mensaje de error en la consola.
//       console.error("La función renderMovies no está definida.");
//     }
//   } catch (error) {
//     // Captura cualquier error que ocurra durante la solicitud.
//     // Esto incluye errores de red, fallos en la API o problemas con la URL.
//     console.error("Error al realizar la solicitud de prueba:", error.message);
//   }
// };

// // Define una función que utiliza Promesas para realizar una solicitud GET (en lugar de async/await).
// const testAxiosWithPromises = () => {
//   // Realiza la solicitud GET utilizando el método `get` de Axios.
//   axios
//     .get("https://students-api.up.railway.app/movies")
//     .then((response) => {
//       // Si la solicitud es exitosa, muestra los datos en la consola.
//       console.log("Respuesta obtenida usando Promesas:", response.data);

//       // Verifica si la función `renderMovies` está definida.
//       // Si está definida, llama a la función con los datos obtenidos.
//       if (typeof renderMovies === "function") {
//         renderMovies(response.data);
//       } else {
//         // Si `renderMovies` no está definida, muestra un mensaje de error.
//         console.error("La función renderMovies no está definida.");
//       }
//     })
//     .catch((error) => {
//       // Captura y maneja cualquier error que ocurra durante la solicitud.
//       console.error("Error al realizar la solicitud con Promesas:", error.message);
//     });
// };

// // Simula la función `renderMovies` si no está definida previamente.
// // Esta función simplemente muestra las películas en la consola.
// const renderMovies = (movies) => {
//   console.log("Películas renderizadas:", movies);
// };

// // Llama a la función `testAxios` para realizar la solicitud usando async/await.
// testAxios();

// // Si deseas probar el enfoque basado en Promesas, puedes descomentar esta línea para ejecutarlo.
// // testAxiosWithPromises();

// Importamos la biblioteca Axios para realizar solicitudes HTTP
console.log("Hola mundo");

const { initForm } = require("./form.js");
import axios from "axios"; // Correct way to import axios
import renderMoviesCards from "./render.js";

const API_BACKEND = "http://localhost:3000/movies";
// const API_BACKEND = "https://students-api.up.railway.app/movies";

// Probar conexión a la API
const testApiConnection = async () => {
  try {
    const response = await axios.get(API_BACKEND);
    console.log("Respuesta de la API:", response.data);
  } catch (error) {
    console.error("Error conectando a la API:", error.message);
  }
};

testApiConnection();

const utils = {
  insertMsgToContainer: (msg) => {
    console.log(`Mensaje al contenedor: ${msg}`);
  },
};

const getMoviesAxiosPromises = async () => {
  try {
    const response = await axios.get(API_BACKEND);
    const movies = response.data;
    const container = document.getElementById("movies-container");
    if (container) {
      renderMoviesCards(movies, container);
    } else {
      console.error("No se encontró el contenedor 'movies-container'");
    }
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    utils.insertMsgToContainer(
      "Error al obtener las películas. Inténtalo de nuevo más tarde."
    );
  }
};

// Inicializar lógica al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  getMoviesAxiosPromises();
  initForm();
});

const container = document.getElementById("movies-container");
if (container) {
  console.debug("Contenedor 'movies-container' encontrado:", container);
  renderMoviesCards(movies, container);
} else {
  console.error("No se encontró el contenedor 'movies-container'");
}
