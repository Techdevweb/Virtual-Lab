function appear() {
    var card = document.querySelector('.card1');
    var position = card.getBoundingClientRect().top;
    console.log(position);
    var screen = window.innerHeight;
    if (position < screen) {
        card.classList.add('card2');
    }
}


window.addEventListener('scroll', appear);