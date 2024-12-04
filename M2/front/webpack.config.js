const path = require('path');

module.exports = {
    entry: './scripts/index.js', // Apunta al archivo existente
    output: {
        path: path.resolve(__dirname, 'public'), // Carpeta de salida
        filename: 'bundle.js', // Nombre del archivo generado
    },
    mode: 'development', // Modo del proyecto
};
