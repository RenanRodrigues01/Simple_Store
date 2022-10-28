const addCarrinho = document.querySelectorAll('.botao');
const popup = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');
const qtn = document.getElementById('quantidade');
const botao = document.querySelectorAll('[data-botao]');

addCarrinho.forEach((itemAtual) => {
    itemAtual.addEventListener('click', () => {
        popup.style.display = 'block';
    })
})

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
})

botao.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        adcItem(evento.target.dataset.botao, evento.target.parentNode);
    })
})

function adcItem (operacao, controle) {
    const unidade = controle.querySelector('[data-unidade]');

    if(operacao === '+'){
        unidade.value = parseInt(unidade.value) + 1 + ' unidades';
    }else{
        unidade.value = parseInt(unidade.value) - 1 + ' unidades';
    }
}