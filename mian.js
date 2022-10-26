const addCarrinho = document.querySelector('.botao');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');

addCarrinho.addEventListener('click', () => {
    popup.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})