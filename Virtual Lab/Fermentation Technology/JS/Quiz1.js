
const start = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const question = document.getElementById('question-container');

const questionelement = document.getElementById('question');
const answerbuttonelement = document.getElementById('answer-buttons');

let shuffel, currentquestion

//let shuffel, currentquestion

start.addEventListener('click', startgame);
nextButton.addEventListener('click', () => {
    currentquestion++;
    setnext();
})

function startgame() {//Start game
    start.classList.add('hide');
    shuffel = questions.sort(() => Math.random() - .5);
    currentquestion = 0;
    console.log(shuffel);
    question.classList.remove('hide');
    setnext();
}

function setnext() {//set's next question
    resetstate();
    showquestion(shuffel[currentquestion]);
}

function showquestion(question) {
    questionelement.innerHTML = question.question;
    question.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerText = answers.text;
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectanswer);
        answerbuttonelement.appendChild(button);
    });
}

function resetstate() {
    nextButton.classList.add('hide');
    while (answerbuttonelement.firstChild) {
        answerbuttonelement.removeChild(answerbuttonelement.firstChild);
    }
}

function selectanswer(e) {
    const selectbutton = e.target;
    const correct = selectbutton.dataset.correct
    Array.from(answerbuttonelement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffel.length > currentquestion + 1) {
        nextButton.classList.remove('hide');
    }
    else {
        start.innerText = 'Restart';
        start.classList.remove('hide');
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'The doubling phase of the microorganisms in the growth curve is __________ phase.',
        answers: [
            { text: 'Lag phase', correct: false },
            { text: 'Exponential phase', correct: true },
            { text: 'Stationary phase', correct: false },
            { text: 'Death phase', correct: false }

        ]
    },
    {
        question: 'Which of the following method is preferred for Actinomycetes biomass monitoring?',
        answers: [
            { text: 'Dry weight', correct: false },
            { text: 'Optical density', correct: false },
            { text: 'Coulter counter', correct: false },
            { text: 'Packed cell volume', correct: true }

        ]
    },
    {
        question: 'The method used for direct cell counting is  ____________ ',
        answers: [
            { text: 'Dry weight', correct: false },
            { text: 'Optical density', correct: false },
            { text: 'Packed cell volume', correct: false },
            { text: 'Haemocytometer', correct: true }

        ]
    },
    {
        question: 'The statistical technique for cell number determination is _____________',
        answers: [
            { text: 'Most probable number', correct: true },
            { text: 'Optical density', correct: false },
            { text: 'Coulter counter', correct: false },
            { text: 'Packed cell volume', correct: false }

        ]
    },
    {
        question: 'The range of wavelength used for absorbance based method of biomass determination is __________',
        answers: [
            { text: '200 nm to 400 nm', correct: false },
            { text: '600 nm to 660 nm', correct: true },
            { text: '260 nm to 280 nm', correct: false },
            { text: '800 nm to 850 nm', correct: false }

        ]
    }
]