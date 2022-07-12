const painel = document.getElementById('res')
let equacao = ''

function add(valor) {
  equacao = painel.innerHTML += valor
  escreverNoPainel(equacao)
}

function calcular() {
  if (equacao) {
    escreverNoPainel(eval(equacao))
  } else {
    escreverNoPainel('[ERROR]')
  }
  
}

function cleanLastDigit() {
  escreverNoPainel(painel.innerHTML.slice(0, -1))
}

function clean() {
  escreverNoPainel('')
  equacao = ''
}


function escreverNoPainel(valor) {
  painel.innerHTML = valor
}


