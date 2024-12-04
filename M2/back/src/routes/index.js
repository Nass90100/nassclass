const { Router } = require("express");
const movieController = require("../controllers/movieController");
const { isValidMovie } = require("../middlewares/validateMovie");

const indexRouter = Router();

// Ruta para obtener todas las películas
indexRouter.get("/movies", movieController.getMovies);

// POST endpoint to create a movie
indexRouter.post("/movies", isValidMovie, movieController.createMovie);

// Respuesta por defecto para rutas no encontradas
indexRouter.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
  });
});

module.exports = indexRouter;
