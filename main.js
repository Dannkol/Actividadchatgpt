import api from "./src/api.js"


if (confirm('quieres hacer otra peticion?')) {
    api.api(prompt('ingresa tu peticion'))
}




