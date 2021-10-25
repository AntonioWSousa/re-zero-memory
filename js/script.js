const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar a carta
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
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

  resetBoard();
}

//função para desvirar as cartas
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500)
}

//função que vai resetar o tabuleiro
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//evento de clique da carta
cards.forEach((card) => {
  card.addEventListener('click', flipCard)
})