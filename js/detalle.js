document.addEventListener("DOMContentLoaded", function() {
  const btnCategorias = document.getElementById("btn-categorias");
  const listaCategorias = document.getElementById("lista-categorias");
  btnCategorias.addEventListener("click", () => {
    listaCategorias.classList.toggle("mostrar");
  });
  document.addEventListener("click", (event) => {
    if (!btnCategorias.contains(event.target) && !listaCategorias.contains(event.target)) {
      listaCategorias.classList.remove("mostrar");
    }
  });


  const btnsVerDetalle = document.querySelectorAll(".ver-detalle-btn");
  const cerrarModales = document.querySelectorAll(".cerrar-modal");

  btnsVerDetalle.forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  cerrarModales.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
});
