// // Función para renderizar las películas en el DOM
// render.js
// Función para renderizar las películas en el DOM
// Función para renderizar las películas en el DOM
console.log("Hola mundo");

export const renderMoviesCards = (movies, container) => {
  // Limpia el contenedor antes de agregar nuevas tarjetas
  container.innerHTML = "";

  movies.forEach((movie) => {
    // Agregar log para depurar
    console.log("Poster URL:", movie.poster);

  // Recorre el array de películas y crea las tarjetas
  // movies.forEach((movie) => {
  //   console.log("Procesando película:", movie);

    // Crea un contenedor para cada película
    const card = document.createElement("div");
    card.classList.add("card", "card-gray", "text-white", "m-2");

    // Agrega el contenido HTML de cada película a la tarjeta
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="card-img-top">
      <div class="card-body">
        <h2 class="card-title">${movie.title}</h2>
        <p class="card-text"><strong>Año:</strong> ${movie.year}</p>
        <p class="card-text"><strong>Director:</strong> ${movie.director}</p>
      </div>
      <p class="card-text"><strong>Duración:</strong> ${movie.duration}</p>
      <p class="card-text"><strong>Géneros:</strong> ${movie.genre.join(", ")}</p>
      <p class="card-text"><strong>Calificación:</strong> ${movie.rate}</p>
    `;

    // Agrega la tarjeta al contenedor
    container.appendChild(card);
  });
};

// Exporta la función renderMoviesCards
export default renderMoviesCards;
 

  
  
// const renderMovies = (movies) => {
//     // Limpia el contenedor antes de agregar nuevas tarjetas
//     moviesContainer.innerHTML = ""; 
  
//     // Recorre el array de películas y crea las tarjetas
//     movies.forEach((movie) => {
//       console.log("procesando pelicula", movie);
//       // Crea un contenedor para cada película con clases de Bootstrap y clase personalizada
//       const card = document.createElement("div");
//       card.classList.add("card", "card-gray", "text-white", "m-2"); // Usamos 'text-white' para todo el texto blanco
  
//       // Agrega el contenido HTML de cada película a la tarjeta
//       card.innerHTML = `
//         <img src="${movie.poster}" alt="${movie.title}" class="card-img-top">
//         <div class="card-body">
//           <h2 class="card-title">${movie.title}</h2>
//           <p class="card-text"><strong>Año:</strong> ${movie.year}</p>
//           <p class="card-text"><strong>Director:</strong> ${movie.director}</p>
//           <p class="card-text"><strong>Duración:</strong> ${movie.duration}</p>
//           <p class="card-text"><strong>Géneros:</strong> ${movie.genre.join(", ")}</p>
//           <p class="card-text"><strong>Calificación:</strong> ${movie.rate}</p>
//         </div>
//       `;
  
//       // Agrega la tarjeta al contenedor principal
//       moviesContainer.appendChild(card);
//     });
//   };
  
//   // Función para obtener las películas desde la API usando jQuery
//   const fetchMovies = () => {
//     // Hace una solicitud GET a la API
//     $.get("https://students-api.up.railway.app/movies", (data) => {
//       // Si la solicitud es exitosa, renderiza las películas
//       renderMovies(data);
//     }).fail((error) => {
//       // Muestra un error en caso de fallo
//       console.error("Error al obtener los datos de la API:", error);
//     });
//   };
  
//   // Cuando el DOM esté completamente cargado, ejecuta fetchMovies
//   document.addEventListener("DOMContentLoaded", fetchMovies);

//   module.exports = render;