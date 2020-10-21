var lineno = 0, linestotal = 6

function startsimulation() {
    document.getElementById('Start').innerHTML = "Next"
    var button = document.querySelector('.btn-success')
    button.classList.add('btn-info')

    procedure()

}

function procedure() {
    lineno = lineno + 1
    str = 'line' + lineno
    if (str == 'line1') {
        const text1 = document.querySelector('#line1')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line2') {
        const text1 = document.querySelector('#line2')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line3') {
        const text1 = document.querySelector('#line3')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line4') {
        const text1 = document.querySelector('#line4')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line5') {
        const text1 = document.querySelector('#line5')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line6') {
        const text1 = document.querySelector('#line6')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line7') {
        const text1 = document.querySelector('#line7')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line8') {
        const text1 = document.querySelector('#line8')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line9') {
        const text1 = document.querySelector('#line9')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line10') {
        const text1 = document.querySelector('#line10')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line11') {
        const text1 = document.querySelector('#line11')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
    }
    if (str == 'line12') {
        const text1 = document.querySelector('#line12')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + text1.textContent + '</em>'
        document.getElementById('line5').style.color = 'black'
        document.getElementById('line6').style.color = 'rgb(237, 100, 100)'
        document.getElementById('Start').innerHTML = "Re run"
        var button = document.querySelector('.btn-success')
        button.classList.add('btn-danger')
        document.getElementById('complete').innerHTML = 'Simulation Complete <i class="fa fa-thumbs-up"></i>'
        var a = document.querySelector('#simulation1')
        a.classList.add('background')
    }
    if (str == 'line13') {
        lineno = 0
        window.location.reload()
    }


}

function reset() {
    document.getElementById('Start').innerHTML = "Start"
    var button = document.querySelector('.btn-success')
    button.classList.remove('btn-info')
    window.location.reload()
}

