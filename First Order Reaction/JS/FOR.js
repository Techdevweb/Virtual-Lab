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
        document.getElementById('line1').style.color = 'rgb(237, 100, 100)'
    }
    if (str == 'line2') {
        document.getElementById('line1').style.color = 'black'
        document.getElementById('line2').style.color = 'rgb(237, 100, 100)'
    }
    if (str == 'line3') {
        document.getElementById('line2').style.color = 'black'
        document.getElementById('line3').style.color = 'rgb(237, 100, 100)'
    }
    if (str == 'line4') {
        document.getElementById('line3').style.color = 'black'
        document.getElementById('line4').style.color = 'rgb(237, 100, 100)'
    }
    if (str == 'line5') {
        document.getElementById('line4').style.color = 'black'
        document.getElementById('line5').style.color = 'rgb(237, 100, 100)'
    }
    if (str == 'line6') {
        document.getElementById('line5').style.color = 'black'
        document.getElementById('line6').style.color = 'rgb(237, 100, 100)'
        document.getElementById('Start').innerHTML = "Re run"
        var button = document.querySelector('.btn-success')
        button.classList.add('btn-danger')
        document.getElementById('complete').innerHTML = 'Simulation Complete <i class="fa fa-thumbs-up"></i>'
    }
    if (str == 'line7') {
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