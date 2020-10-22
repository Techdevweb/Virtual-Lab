var lineno = 0, linestotal = 6

function startsimulation() {
    document.getElementById('Start').innerHTML = "Next"
    var button = document.querySelector('.btn-success')
    button.classList.add('btn-info')

    procedure()

}

lst = ['1. Prepare and sterilize 100 ml nutrient broth (given medium) in side arm flask.', '2. Inoculate the broth with 10 % v/v of seed medium of given micro-organism.',
    '3. Read the absorbance at 600 nm as initial optical density.', '4. Sample out 5 ml of broth in centrifuge tube & keep it in refrigerator.',
    '5. Incubate the culture at 370C in shaker incubator.',
    '6. Read the absorbance after every hour and sample out 5 ml of broth after every 3 hrs.(The reason is the significant measurable increase is observed in absorbance over smalltime period which is not possible for dry weight.) Plot a correlation curve ofabsorbance versus dry weight.',
    '7. Centrifuge all tubes at 5000 rpm for 15 min or filter the broth using Whatman filterpaper',
    '8. Discard the supernatant & centrifuge again by adding 10ml D/W to each tube.',
    '9. Keep the tubes or filter paper in hot air oven (or vacuum oven) at 800C for 24 hrs or1100C for 5 hrs to obtain dry cell mass.',
    '10. Weigh centrifuge tube or filter paper and calculate the dry cell mass.',
    '11. Plot the changes in both parameters with respect to time.',
    ' 12. Measure the growth limiting substrate (in most cases Carbon source i.e. totalcarbohydrate like glucose) initially (at 0 hrs) and finally (after 48 hrs) and calculatethe yield coefficient.']

function procedure() {
    lineno = lineno + 1
    str = 'line' + lineno
    if (str == 'line1') {
        // const text1 = document.querySelector('#line1')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[0] + '</em>'
    }
    if (str == 'line2') {
        const text1 = document.querySelector('#line2')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[1] + '</em>'
    }
    if (str == 'line3') {
        const text1 = document.querySelector('#line3')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[2] + '</em>'
    }
    if (str == 'line4') {
        const text1 = document.querySelector('#line4')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[3] + '</em>'
    }
    if (str == 'line5') {
        const text1 = document.querySelector('#line5')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[4] + '</em>'
    }
    if (str == 'line6') {
        const text1 = document.querySelector('#line6')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[5] + '</em>'
    }
    if (str == 'line7') {
        const text1 = document.querySelector('#line7')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[6] + '</em>'
    }
    if (str == 'line8') {
        const text1 = document.querySelector('#line8')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[7] + '</em>'
    }
    if (str == 'line9') {
        const text1 = document.querySelector('#line9')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[8] + '</em>'
    }
    if (str == 'line10') {
        const text1 = document.querySelector('#line10')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[9] + '</em>'
    }
    if (str == 'line11') {
        const text1 = document.querySelector('#line11')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[10] + '</em>'
    }
    if (str == 'line12') {
        const text1 = document.querySelector('#line11')
        const text2 = document.querySelector('#procedure')
        text2.innerHTML = '<em>' + lst[11] + '</em>'
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

