// Função para calcular a área do triângulo
function calcularAreaTriangulo() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    const area = (base * altura) / 2;
    document.getElementById('resultado-triangulo').textContent = `A área do triângulo é ${area} .`;
}

// Função para calcular a área do retângulo
function calcularAreaRetangulo() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    if (isNaN(largura) || isNaN(comprimento)) {
        alert('Por favor, preencha ambos os campos.');
        return;
    }
    const area = largura * comprimento;
    document.getElementById('resultado-retangulo').textContent = `A área do retângulo é ${area} .`;
}

// Função para calcular a área do círculo
function calcularAreaCirculo() {
    const raio = parseFloat(document.getElementById('raio').value);
    if (isNaN(raio)) {
        alert('Por favor, preencha o campo do raio.');
        return;
    }
    const area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultado-circulo').textContent = `A área do círculo é ${area.toFixed(2)} .`;
}

