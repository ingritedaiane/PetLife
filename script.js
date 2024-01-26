var questoes = document.querySelectorAll('.duvidas')

questoes.forEach(function (duvidas) {
    duvidas.addEventListener('click', function () {
        duvidas.classList.toggle('ativa')
    })
});