var txtPadrao = document.querySelector('.inicial');
var mostrarht = document.querySelector('.oculto_html');
const listaDeTeclas = document.querySelectorAll('.teclas');

for (contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[c];
    tecla.onclick = exibirTexto();
}

function exibirTexto () {
    txtPadrao.style.display = "none";
    if (listaDeTeclas[0]) {
        mostrarht.style.display = "flex";
    }   
}