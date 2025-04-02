document.addEventListener('DOMContentLoaded', function() {
    const resultado = JSON.parse(localStorage.getItem('resultado'));
    if (resultado) {
        exibirResultado(resultado.pessoas);
    }
});

function exibirResultado(pessoas) {
    const descricoes = {
        'Luísa Barros': 'Bem-vind@, calour@ apadrinhad@!',
        'Danilo Alves Ribeiro': 'Bem-vind@, calour@ apadrinhad@',
        'Lucca': 'Bem-vind@, calour@ apadrinhad@',
        'Kenji': 'Bem-vind@, calour@ apadrinhad@',
        'Lázaro': 'Bem-vind@, calour@ apadrinhad@',
        'Sill': 'Bem-vind@, calour@ apadrinhad@',
        'João Luz': 'Bem-vind@, calour@ apadrinhad@',
        'Henrique': 'Bem-vind@, calour@ apadrinhad@'
    };

    const imagens = {
        'Luísa Barros': '',
        'Danilo Alves Ribeiro': '',
        'Lucca': '',
        'Kenji': '',
        'Lázaro': '',
        'Sill': '',
        'João Luz': '',
        'Henrique': ''
    };

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = pessoas.map(pessoa => `
        <div class="resultado-container">
            <h3>Você combina com <strong>${pessoa}</strong></h3>
            <img src="${imagens[pessoa]}" alt="${pessoa}" class="torneira-imagem">
            <p>${descricoes[pessoa]}</p>
        </div>
    `).join('');

    resultadoDiv.style.display = 'block';
}
