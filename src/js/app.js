document.addEventListener("DOMContentLoaded", function () {
  navegacionFija();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
});

function navegacionFija() {
  // Navegacion fija al hacer scroll
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  document.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");

  navLinks.forEach( link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const sectionScroll = e.target.getAttribute("href"); 
      const seccion = document.querySelector(sectionScroll);
      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
} // Scroll suave

function resaltarEnlace() {
  // Resalta enlace actual segun el scroll
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navegacion-principal a");
    let actual = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        actual = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}

function crearGaleria() {
  // Crea la galeria de imagenes
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
  // Muestra la imagen en un modal
  const imagen = document.createElement("IMG"); //Crear imagen
  imagen.src = `src/img/gallery/full/${i}.jpg`; //Asignar imagen

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
  // Cierra el modal
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}
