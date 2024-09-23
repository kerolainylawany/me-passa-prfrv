let botaoAtivo = null;

function exibirImagem(opcao, botao) {
    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");
    
    if (opcao === 'sol'){
        imagem.src = "sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolhe o Sol! Uma estrela que ilumina o nosso dia."
    } else if (opcao === 'lua') {
        imagem.src = "lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
    } else if (opcao === 'estrela') {
        imagem.src = "estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrela! Um dos pontos brilhantes no céu nortuno.";
    } else if (opcao === 'jupiter') {
        imagem.src = "jupiter.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Júpiter! É um do maior planeta do sistema solar.";
    } else if (opcao === 'marte') {
        imagem.src = "marte.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Marte! É o planeta vermelho.";
    
    } else {
        imagem.style.display = "none";
        texto.innerText = "Opção inválida.Escolha entre Sol, Lua ou Estrela."
    }

    if (botaoAtivo){
        botaoAtivo.classList.remove('active');
    }
    botao.classList.add('active');
    botaoAtivo = botao;
}
