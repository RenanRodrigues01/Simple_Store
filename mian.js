const addCarrinho = document.querySelectorAll('.botao');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');

addCarrinho.forEach((itemAtual) => {
    itemAtual.addEventListener('click', () => {
        popup.style.display = 'block';
    })
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})
