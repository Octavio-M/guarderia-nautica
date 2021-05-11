/*var tituloModal = document.getElementById("tituloModal");
var cuerpoModal = document.getElementById("cuerpoModal");
const br = document.createElement('br');

const youtubevideo = document.createElement('iframe');
youtubevideo.style.width = "50vh";
youtubevideo.style.height = "350px";
youtubevideo.setAttribute("frameborder", "0");

function actModal(seccion) {
    if (seccion == "cab") {
        const gif = document.createElement("img");
        gif.setAttribute("src", "/img/gif.gif");
        tituloModal.innerHTML = "Título 1";

        youtubevideo.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ");
        cuerpoModal.appendChild(youtubevideo);
        cuerpoModal.appendChild(br);
        cuerpoModal.appendChild(gif);
    }
    else if (seccion == "acc") {
        const texto = document.createElement("p");
        texto.className  = "coloreado";
        texto.innerText = "Test";

        tituloModal.innerHTML = "Título 2";
        youtubevideo.setAttribute("src", "https://www.youtube.com/embed/bPZSDBvDmVw");
        cuerpoModal.appendChild(youtubevideo);
        cuerpoModal.appendChild(br);
        cuerpoModal.appendChild(texto);

    }
    else if (seccion == "emb") {
        const botonete = document.createElement("a");
        botonete.className = "boton1";
        botonete.innerText = "Botón";
        const span1 = document.createElement("span");
        span1.classList.add("badge", "rounded-pill", "text-dark");
        span1.setAttribute("style", "background-color: #98c2ec");
        span1.innerText = "Badge";

        tituloModal.innerHTML = "Título 3";
        youtubevideo.setAttribute("src", "https://www.youtube.com/embed/B1BnKd7RrjE");
        cuerpoModal.appendChild(youtubevideo);
        cuerpoModal.appendChild(br);
        cuerpoModal.appendChild(botonete); 
        cuerpoModal.appendChild(document.createElement('br'));
        cuerpoModal.appendChild(span1);
    }
  }

function limpiarModal() {
    cuerpoModal.innerHTML = ""; //Limpia el cuerpo del modal.

}*/

function enviarEmail () {
    alert("El email fue enviado correctamente");
    return false;
}