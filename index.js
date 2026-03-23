// js para que funcione el sitio
document.addEventListener("DOMContentLoaded", () => {
    console.log("PetroCorp listo");

  // formularios
  const forms = document.querySelectorAll("form");
  forms.forEach(f => {
    f.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Gracias! Los datos han sido enviados.");
        f.reset(); 
    });
  });

  // nombre de la pagina
  let n = "PetroCorp";
  console.log("Web: " + n);

  // click en imagenes
    const imgs = document.querySelectorAll("img");
    imgs.forEach(i => {
      i.addEventListener("dblclick", () => {
        alert("Hiciste doble click en una imagen");
      });
    });
});
