const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar a carta
function flipCard() {
  if (lockBoard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
}

//função para checar se a primeira carta e a segunda carta são iguais
function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards(); // condicional para saber se a primeira carta e a segunda carta são exatamente iguais, então vai chamar disabeCard, porque, se as cartas forem exatamente iguais, vai desablitar o clique da carta clicada
    return;
  }
  unflipCards();
}

//função para desabilitar as cartas
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

//função para desvirar as cartas
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500)
}

cards.forEach((card) => {
  card.addEventListener('click', flipCard)
})