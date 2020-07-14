console.log('JavaScript ok');
window.addEventListener('load', start);

var globalVermelho = 0;
var globalVerde = 0;
var globalAzul = 0;

function start() {
  preventFormSubmit();

  var evento = document.querySelector('#rangeVermelho');
  evento.addEventListener('input', handleOnchange);

  var evento2 = document.querySelector('#rangeVerde');
  evento2.addEventListener('input', handleOnchange);

  var evento3 = document.querySelector('#rangeAzul');
  evento3.addEventListener('input', handleOnchange);
}

function preventFormSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

function getGlobal() {
  let vermelho = document.querySelector('#valorAtualizadoVermelho');
  vermelho.value = globalVermelho;

  let verde = document.querySelector('#valorAtualizadoVerde');
  verde.value = globalVerde;

  let azul = document.querySelector('#valorAtualizadoAzul');
  azul.value = globalAzul;
}

function setColorTextArea(_vermelho, _verde, _azul) {
  function getTextArea() {
    return document.querySelector('#cores');
  }
  var divArea = getTextArea();
  divArea.style =
    'background-color: rgb(' + _vermelho + ',' + _verde + ',' + _azul + ')';
}

function handleOnchange(event) {
  switch (event.target.id) {
    case 'rangeVermelho':
      var exibe = document.querySelector('#valorAtualizadoVermelho');
      exibe.value = event.target.value;
      globalVermelho = event.target.value;
      break;
    case 'rangeVerde':
      document.querySelector('#valorAtualizadoVerde').value =
        event.target.value;
      globalVerde = event.target.value;
      break;
    case 'rangeAzul':
      var exibe = document.querySelector('#valorAtualizadoAzul');
      exibe.value = event.target.value;
      globalAzul = event.target.value;
      break;
    default:
      console.log(event.target.id);
  }

  setColorTextArea(globalVermelho, globalVerde, globalAzul);
}
