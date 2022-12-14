const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.input-mensagem-erro');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function setError(index) {
    campos[index].style.border = '1px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}
function nameValidate() {
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    } else {
        removeError(1);
    }
}

function tellValidate() {
    if(campos[2].value.length < 11) {
        setError(2);
    } else {
        removeError(2);
    }
}
