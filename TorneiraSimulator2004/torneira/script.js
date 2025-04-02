document.getElementById('questionario').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const respostas = {};
    for (let i = 1; i <= 3; i++) {
        respostas[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`)?.value || null;
    }

    const resultado = analisarRespostas(respostas);
    localStorage.setItem('resultado', JSON.stringify(resultado));
    window.location.href = 'resultado.html';
});

function analisarRespostas(respostas) {
    const correspondencia = {
        'a': 'Luísa Barros',
        'b': 'Danilo Alves Ribeiro',
        'c': 'Lucca',
        'd': 'Kenji',
        'e': 'Lázaro',
        'f': 'Sill',
        'g': 'João Luz',
        'h': 'Henrique'
    };

    let escolhidos = new Set();
    for (let pergunta in respostas) {
        if (respostas[pergunta] && correspondencia[respostas[pergunta]]) {
            escolhidos.add(correspondencia[respostas[pergunta]]);
        }
    }

    return { pessoas: Array.from(escolhidos) };
}
