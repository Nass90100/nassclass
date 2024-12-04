const { getAllMovies, addMovie } = require("../services/movieService");
const getMovies = async (req, res) => {
  try {
    // Llamar al servicio para obtener las películas
    const movies = await getAllMovies();

    // Verificar si ocurrió algún error en el servicio
    if (!movies || movies.length === 0) {
      return res
        .status(400)
        .json({ error: "No se encontraron películas / No movies found" });
    }

    // Devolver las películas al cliente
    res.status(200).json(movies);
  } catch (error) {
    console.error(`Error en getMovies: ${error.message}`);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener las películas" });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    // Call the service function to create the movie
    const newMovie = await addMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });

    // Return success response
    res.status(201).json({
      message: "Movie created successfully",
      movie: newMovie,
    });
  } catch (error) {
    console.error(`Error in addMovie: ${error.message}`);
    res.status(500).json({ error: "Error creating movie" });
  }
};

module.exports = { getMovies, createMovie };
