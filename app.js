console.log("consoles");

// Função para exibir uma mensagem personalizada para cada console
function exibirInfoConsole(console) {
    switch (console) {
      case 'atari':
        alert('Você clicou no botão do Atari!');
        break;
      case 'mastersystem':
        alert('Você clicou no botão do Master System!');
        break;
        case 'megadrive':
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
    {
        titulo: "Atari",
        descricao: "O Atari 2600 foi um dos primeiros videogames domésticos a alcançar grande popularidade, marcando o início de uma nova era no entretenimento. Lançado em 1977, ele revolucionou a forma como as pessoas interagiam com jogos eletrônicos, saindo dos arcades e entrando nas casas.",
        link: "https://pt.wikipedia.org/wiki/Atari_2600",
        jogos: ["Berzerk", "Pac-Man", "Mr. Postman", "Frostbite", "Pitfall"],
        anoLancamento: 1977
        
    },
    {
        titulo: "MasterSystem",
        descricao: "O Master System foi um console de videogame de 8 bits da Sega, lançado em 1986. Conhecido por seus jogos de alta qualidade gráfica para a época, como Sonic the Hedgehog, o Master System foi um grande sucesso no Brasil.",
        link: "https://pt.wikipedia.org/wiki/Master_System",
        jogos: ["Castle of Illusion Starring Mickey Mouse", "Psycho Fox", "Altered Beast", "The Lucky Dime Caper", "Hang-On"],
        anoLancamento: 1986
    },
    {
        titulo: "MegaDrive",
        descricao: "O Mega Drive (conhecido como Genesis nos Estados Unidos) foi um console de videogame de 16 bits da Sega, lançado em 1988. Concorrente direto do Super Nintendo, o Mega Drive se destacou por seus jogos de ação e por títulos como Sonic the Hedgehog e Mortal Kombat.",
        link: "https://pt.wikipedia.org/wiki/Mega_Drive",
        jogos: ["Sonic the Hedgehog", "Ultimate Mortal Kombat 3", "Street Fighter 2", "Golden Axe", "Beavis and Butt-Head"],
        anoLancamento: 1988
    },
    {
        titulo: "PlayStation",
        descricao: "O PlayStation foi o primeiro console de videogame de 32 bits da Sony, lançado em 1994. Com gráficos revolucionários para a época e jogos exclusivos como Final Fantasy VII, o PlayStation marcou uma nova era nos videogames.",
        link: "https://pt.wikipedia.org/wiki/PlayStation",
        jogos: ["Final Fantasy IX", "Chrono Cross", "Metal Gear Solid", "Tekken 3", "Twisted Metal 3"],
        anoLancamento: 1994
    },
    {
        titulo: "PC",
        descricao: "O computador pessoal (PC) é uma plataforma de jogos extremamente versátil, capaz de rodar uma infinidade de jogos, desde títulos independentes até grandes blockbusters. A versatilidade e a constante evolução do hardware tornam o PC uma das plataformas de jogos mais populares.",
        link: "https://pt.wikipedia.org/wiki/Computador_pessoal",
        jogos: ["The Elder Scrolls V: Skyrim", "DOTA 2", "Diablo", "Worms Armageddon", "Age of Empires 2"],
        anoLancamento: 1970 // Data aproximada para fins ilustrativos
    }
];

const botoesConsoles = document.querySelectorAll('.console-button');

botoesConsoles.forEach(botao => {
    botao.addEventListener('click', () => {
        const consoleSelecionado = consoles.find(console => console.titulo.toLowerCase() === botao.id.toLowerCase());

        const descricaoConsole = document.getElementById('descricaoConsole');
        descricaoConsole.innerHTML = `
            <h2>${consoleSelecionado.titulo}</h2>
            <p>Lançado em: ${consoleSelecionado.anoLancamento}</p>
            <p>${consoleSelecionado.descricao}</p>
            <p><a href="${consoleSelecionado.link}">Saiba mais na Wikipédia</a></p>
            <h3>Meus Top 5 Jogos</h3>
                        <ul>
                ${consoleSelecionado.jogos.map(jogo => `<li>${jogo}</li>`).join('')}
            </ul>
        `;
    });
});
