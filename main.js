//VARIABLES
const imagenCabecera = document.querySelector("#headerImage");

//OBJETOS
//--imagenes
const imgs = {
  cabecera: "./IMAGENES/Central/imagenCentral.png",
};

//--cabecera
const obj = {
  opcionesDeCabecera: function () {
    imagenCabecera.src = imgs.cabecera;
    imagenCabecera.style.width = "100%";
    return imagenCabecera;
  },
  tituloCabecera: "DULCE DEL ALMA",
  parrafoCabecera:
    "Lorem ipsum, dolor sit amet consectetur isicing elit. Reprehenderit atque itaque vel quos totam iste tempora quod nde modi veritatis laudantium voluptatem commodi et, excepturi, hicullam nesciunt saepe suscipit.",
};

//CARGA DEL DOCUMENTO
document.addEventListener("DOMContentLoaded", (e) => {
  obj.opcionesDeCabecera();
  document.querySelector("h1").innerHTML = obj.tituloCabecera;
  document.querySelector("p").innerHTML = obj.parrafoCabecera;
});
