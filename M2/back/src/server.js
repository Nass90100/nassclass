const express = require("express");
const indexRouter = require("./routes/index"); // Importa el enrutador correctamente
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRouter);

module.exports = app;
