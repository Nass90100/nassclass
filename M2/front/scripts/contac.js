// Añade un mensaje de confirmación al enviar el formulario.

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe realmente.
    
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."); // Muestra el mensaje de confirmación.
    
    // Vacía los campos del formulario.
    event.target.reset(); // Reinicia todos los campos del formulario.
  });
  