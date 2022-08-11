//const input = document.querySelector('.login');
//const button = document.querySelector('.button-play');
//const form = document.querySelector('.login-form');

//const validateInput = ({ target }) => {
//  if (input.value != null) {
//    button.removeAttribute('disabled');
//    return;
//  }

//  button.setAttribute('disabled', '');
//}

//const handleSubmit = (event) => {
//  event.preventDefault();
  
//  localStorage.setItem('player', input.value);
//  window.location = 'paginas/jogo.html';
//}

//input.addEventListener('input', validateInput);
//button.addEventListener('submit', handleSubmit);

const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validarInput = ({target}) => {
    if(target!=""){
        console.log('foi');
        button.removeAttribute('disabled', '');
        return;
    }
    button.setAttribute('disable', '');
}

input.addEventListener('button', validarInput);

function valida(){
    document.getElementsByClassName('login-button').disabled = true;
    if(document.getElementsByClassName('login-input').value != ""){
        document.getElementsByClassName('login-button').disabled = false;

    }else{
        console.log('erro');
    }
}