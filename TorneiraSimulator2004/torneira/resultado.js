document.addEventListener('DOMContentLoaded', function() {
    const resultado = JSON.parse(localStorage.getItem('resultado'));
    if (resultado) {
        exibirResultado(resultado.pessoas);
    }
});

function exibirResultado(pessoas) {
    const descricoes = {
        'Luísa Barros': 'Você é prático e eficiente, resolvendo problemas rapidamente.',
        'Danilo Alves Ribeiro': 'Você é altamente funcional e foca em facilitar a vida dos outros.',
        'Lucca': 'Você busca harmonia e conexão com o ambiente.',
        'Kenji': 'Você é flexível e sempre explora novas possibilidades.',
        'Lázaro': 'Você gosta de controlar o fluxo das situações e se adapta bem.',
        'Sill': 'Você é confiável e valoriza a precisão.',
        'João Luz': 'Você é tradicional e gosta de soluções diretas.',
        'Henrique': 'Você é intuitivo e se adapta sem perder a originalidade.'
    };

    const imagens = {
        'Luísa Barros': '/torneira/images/automatica.png',
        'Danilo Alves Ribeiro': '/torneira/images/ducharetratil.png',
        'Lucca': '/torneira/images/cascata.png',
        'Kenji': '/torneira/images/articulada.jpg',
        'Lázaro': '/torneira/images/controlevazao.jpg',
        'Sill': '/torneira/images/dupla.png',
        'João Luz': '/torneira/images/roscamanual.png',
        'Henrique': '/torneira/images/misturadormonocomando.png'
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
