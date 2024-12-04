const Movie = require("../models/Movie");

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

const addMovie = async (movieData) => {
  try {
    const newMovie = await Movie.create(movieData);
    return newMovie;
  } catch (error) {
    throw new Error(`Error creating movie from service: ${error.message}`);
  }
};
module.exports = { getAllMovies, addMovie };
