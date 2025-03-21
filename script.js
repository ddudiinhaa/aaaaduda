document.addEventListener('DOMContentLoaded', function () {
    const botaoDeacessibilidade = document.getElementById('botao-acessibiliade')
    const opcoesDeacessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeacessibilidade.addEventListener('click', function () {
        botaoDeacessibilidade.classList.toggle('rotacao-botao');
        opcoesDeacessibilidade.classList.toggle('apresenta-lista');


        const botaoSelecionado = botaoDeacessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeacessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuirFonteBotao = document.getElementById('diminuir-fonte');

    const alternarContraste = document.getElementById('alternar-contraste');

    let tamanhoAtualFonte = 1
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem'


    })
    diminuirFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = '$(tamanhoAtualFonte)rem'
    })
    alternarContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})
scrollReveal().reaeal('#inicio',{delay:500});
scrollReveal().reaeal('#inicio',{delay:500});
scrollReveal().reaeal('#inicio',{delay:500});
scrollReveal().reaeal('#inicio',{delay:500});
