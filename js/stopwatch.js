let ss = 00
let mm = 00
let hh = 00
let interval

function start() {
    document.querySelector('.start-btn').innerText = 'Iniciar'
    interval = setInterval(watch, 10)
}

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
    
}

function pause() {
    clearInterval(interval)
    if (ss > 0) {
        document.querySelector('.start-btn').innerText = 'Continuar'
    }
    
}

function stop() {
    clearInterval(interval)
    ss = 00
    mm = 00
    hh = 00
    document.getElementById('resultado').innerHTML = twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss)
    document.querySelector('.start-btn').innerText = 'Iniciar'
}

function watch() {
    ss++
    if (ss == 60) {
        mm++
        ss = 0
    }
    if (mm == 60) {
        hh++
        mm = 0
    }
    document.getElementById('resultado').innerHTML = twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss)
}