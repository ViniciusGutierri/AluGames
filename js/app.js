let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(idJogo) {
    let jogoClicado = document.getElementById(`game-${idJogo}`);
    let imagemJogo = jogoClicado.querySelector('.dashboard__item__img');
    let botaoJogo = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    if (imagemJogo.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagemJogo.classList.remove('dashboard__item__img--rented');
            botaoJogo.classList.remove('dashboard__item__button--return');
            botaoJogo.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagemJogo.classList.add('dashboard__item__img--rented');
        botaoJogo.classList.add('dashboard__item__button--return');
        botaoJogo.innerHTML = 'Devolver';
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});