document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const cantidadImagenes = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= cantidadImagenes; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;

    //Event Handler

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;

  //Crear el modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  // boton cerrar
  const botonCerrar = document.createElement("BUTTON");
  botonCerrar.textContent = "X ";
  botonCerrar.classList.add("btn-cerrar");
  botonCerrar.onclick = cerrarModal;

  //Agregar boton cerrar al modal
  modal.appendChild(botonCerrar);
  modal.appendChild(imagen);

  //Agregar HTML al modal
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}
