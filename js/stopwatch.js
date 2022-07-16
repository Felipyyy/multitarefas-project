let ss = 0
let mm = 0
let hh = 0
let interval

function start() {
    document.querySelector('.start-btn').innerText = 'Iniciar'
    interval = setInterval(watch, 1000)
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
    ss = 0
    mm = 0
    hh = 0
    document.getElementById('resultado').innerHTML = twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss)
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