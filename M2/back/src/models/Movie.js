const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String, // Título de la película
  year: Number, // Año
  director: String, // Director
  duration: String, // Duración
  genre: [String], // Género como array de strings
  rate: Number, // Calificación
  poster: String, // URL del poster
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
