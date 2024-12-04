console.log("Hola mundo");

const validateFields = ({
  title,
  year,
  durationHours,
  durationMinutes,
  rate,
  poster,
  director,
  genres,
}) => {
  if (!title || title.trim() === "") return "El título es obligatorio.";
  if (!year || isNaN(year) || year < 1888 || year > 2024)
    return "El año debe ser un número entre 1888 y 2024.";
  if (!durationHours || isNaN(durationHours) || durationHours < 0)
    return "Las horas de duración deben ser un número válido.";
  if (
    !durationMinutes ||
    isNaN(durationMinutes) ||
    durationMinutes < 0 ||
    durationMinutes > 59
  )
    return "Los minutos de duración deben ser entre 0 y 59.";
  if (!rate || isNaN(rate) || rate < 1 || rate > 10)
    return "La calificación debe estar entre 1 y 10.";
  if (!poster || !poster.trim()) return "La URL del póster es obligatoria.";
  if (!director || !/^[a-zA-ZÀ-ÿ\s]+$/.test(director))
    return "El nombre del director debe ser válido.";
  if (genres.length === 0) return "Debes seleccionar al menos un género.";
  return null; // Sin errores
};

const onSubmitForm = (e) => {
  e.preventDefault();

  const form = e.target;

  // Obtener valores del formulario directamente
  const title = form.querySelector("#name").value.trim();
  const year = parseInt(form.querySelector("#year").value, 10);
  const durationHours = parseInt(
    form.querySelector("#duration-hours").value,
    10
  );
  const durationMinutes = parseInt(
    form.querySelector("#duration-minutes").value,
    10
  );
  const rate = parseFloat(form.querySelector("#rate").value);
  const poster = form.querySelector("#url").value.trim();
  const director = form.querySelector("#director").value.trim();
  const genres = Array.from(
    form.querySelectorAll('input[name="genres"]:checked')
  ).map((checkbox) => checkbox.value);

  // Validar los campos
  const errorMessage = validateFields({
    title,
    year,
    durationHours,
    durationMinutes,
    rate,
    poster,
    director,
    genres,
  });
  if (errorMessage) {
    displayError(errorMessage);
    return;
  }

  // Construir el objeto de datos
  const data = {
    title,
    year,
    duration: `${durationHours}h ${durationMinutes}min`,
    rate,
    poster,
    director,
    genres,
  };

  console.log("Formulario procesado con datos:", data);

  // Mostrar mensaje de éxito
  displaySuccess("El formulario fue enviado exitosamente.");
};

const displayError = (message) => {
  const errorContainer = document.getElementById("form-error");
  if (errorContainer) {
    errorContainer.innerText = message;
    errorContainer.style.display = "block";
  } else {
    alert(message);
  }
};

const displaySuccess = (message) => {
  const successContainer = document.getElementById("form-success");
  if (successContainer) {
    successContainer.innerText = message;
    successContainer.style.display = "block";
  } else {
    alert(message);
  }
};

const initForm = () => {
  const movieForm = document.getElementById("createMovieForm");
  if (!movieForm) {
    console.error("El formulario con id 'createMovieForm' no se encontró.");
    return;
  }
  movieForm.addEventListener("submit", onSubmitForm);
};

document.addEventListener("DOMContentLoaded", () => {
  initForm();
});

module.exports = {
  initForm,
};
