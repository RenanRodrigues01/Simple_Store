const addCarrinho = document.querySelectorAll('.botao');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');
const qtn = document.getElementById('quantidade')

addCarrinho.forEach((itemAtual) => {
    itemAtual.addEventListener('click', () => {
        popup.style.display = 'block';
        qtn.focus();
    })
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})
