document.addEventListener("DOMContentLoaded", function () {
  // Categorías
  const btnCategorias = document.getElementById("btn-categorias");
  const listaCategorias = document.getElementById("lista-categorias");

  btnCategorias.addEventListener("click", function () {
    listaCategorias.classList.toggle("mostrar");
  });

  // Mi cuenta
  const btnCuenta = document.getElementById("btn-cuenta");
  const listaCuenta = document.getElementById("lista-cuenta");

  btnCuenta.addEventListener("click", function () {
    listaCuenta.classList.toggle("mostrar");
  });

  // Cerrar ambos dropdowns si se hace clic fuera
  document.addEventListener("click", function (event) {
    if (!btnCategorias.contains(event.target) && !listaCategorias.contains(event.target)) {
      listaCategorias.classList.remove("mostrar");
    }

    if (!btnCuenta.contains(event.target) && !listaCuenta.contains(event.target)) {
      listaCuenta.classList.remove("mostrar");
    }
  });
});
