console.log("consoles");

// Função para exibir uma mensagem personalizada para cada console
function exibirInfoConsole(console) {
    switch (console) {
      case 'atari':
        alert('Você clicou no botão do Atari!');
        break;
      case 'masterSystem':
        alert('Você clicou no botão do Master System!');
        break;
        case 'MegaDrive':
        alert('Você clicou no botão do Mega Drive!');
        break;
        case 'Playstation':
        alert('Você clicou no botão do Playstation!');
        break;
        case 'pc':
        alert('Você clicou no botão do PC!');
        break;
    
      default:
        alert('Console não reconhecido.');
    }
  }
  
  const consoles = [
    // ... seus dados aqui
];

function criarBotoes() {
    const buttonContainer = document.querySelector('.button-container');

    consoles.forEach(console => {
        const button = document.createElement('button');
        button.id = console.titulo.toLowerCase().replace(/\s+/g, '-');
        button.textContent = console.titulo;
        button.addEventListener('click', () => {
            exibirInformacoes(console.titulo, button);
        });
        buttonContainer.appendChild(button);
    });
}

function exibirInformacoes(tituloConsole, button) {
    const consoleSelecionado = consoles.find(console => console.titulo === tituloConsole);

    // Cria o elemento do cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor'); // Adiciona uma classe CSS para estilizar o cursor
    cursor.innerHTML = `
        <h3>${consoleSelecionado.titulo}</h3>
        <p>${consoleSelecionado.descricao}</p>
        <a href="${consoleSelecionado.link}" target="_blank">Mais informações</a>
    `;

    // Posiciona o cursor logo abaixo do botão
    cursor.style.position = 'absolute';
    cursor.style.top = button.offsetTop + button.offsetHeight + 'px';
    cursor.style.left = button.offsetLeft + 'px';

    // Adiciona o cursor ao corpo da página
    document.body.appendChild(cursor);

    // Função para esconder o cursor (pode ser chamada em outro evento, como mouseout)
    function esconderCursor() {
        document.body.removeChild(cursor);
    }

    // Esconde o cursor após alguns segundos (opcional)
    setTimeout(esconderCursor, 3000);
}

criarBotoes();