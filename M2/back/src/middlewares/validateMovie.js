const isValidMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  // Check if all fields are present
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    return res.status(400).json({
      error:
        "All fields (title, year, director, duration, genre, rate, poster) are required",
    });
  }

  // Check if year is a 4-digit number
  if (!/^\d{4}$/.test(year)) {
    return res.status(400).json({ error: "Year must be a 4-digit number" });
  }

  // Proceed to the next middleware/controller
  next();
};

module.exports = { isValidMovie };
