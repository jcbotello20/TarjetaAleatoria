// Esperar a que el DOM se cargue completamente antes de ejecutar el siguiente código.
document.addEventListener("DOMContentLoaded", function () {
  // Realizar una petición HTTP GET al archivo JSON 'categorias.json' en el servidor.
  fetch("https://jcbotello20.github.io/Data/categorias.json")
    // Cuando la respuesta es recibida, convertir los datos en formato JSON.
    .then((response) => response.json())

    // Cuando los datos en formato JSON estén listos, realizar lo siguiente:
    .then((data) => {
      // Función para actualizar la información de la tarjeta con la categoría seleccionada.
      function actualizarTarjeta(Categoria) {
        document.querySelector(".card-img-top").src = Categoria.imagen;
        document.querySelector(".card-title").innerHTML = Categoria.tipo;
        document.querySelectorAll(".list-group-item")[0].innerHTML =
          "<strong>Nombre:</strong> " + Categoria.nombre;
        document.querySelectorAll(".list-group-item")[1].innerHTML =
          "<strong>Años:</strong> " + Categoria.años;
        document.querySelectorAll(".list-group-item")[2].innerHTML =
          "<strong>Ser:</strong> " + Categoria.ser;
        document.querySelectorAll(".list-group-item")[3].innerHTML =
          "<strong>Características:</strong> " + Categoria.caracteristicas;
      }

      // Elegir aleatoriamente un personaje del arreglo 'categorias' dentro del objeto JSON.
      var randomIndex = Math.floor(Math.random() * data.Categorias.length);
      var Categoria = data.Categorias[randomIndex];

      // Actualizar la información de la tarjeta con la categoría seleccionada.
      actualizarTarjeta(Categoria);

      // Agregar un manejador de eventos al botón "Nueva categoría" para actualizar la tarjeta con una nueva categoría aleatoria.
      document
        .getElementById("nueva-categoria-btn")
        .addEventListener("click", function () {
          randomIndex = Math.floor(Math.random() * data.Categorias.length);
          Categoria = data.Categorias[randomIndex];
          actualizarTarjeta(Categoria);
        });
    });
});
