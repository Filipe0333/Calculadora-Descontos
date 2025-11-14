const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');
const parcelasDiv = document.querySelector('#parcelas');
const somClique = document.querySelector('#somClique');

botao.addEventListener('click', function () {
    somClique.play(); // toca o som

    const valor = Number(document.querySelector('#valor').value);
    const forma = document.querySelector('#formaPagamento').value;

    let valorFinal = valor;
    let numParcelas = 1;

    parcelasDiv.innerHTML = ""; // limpa parcelas

    // -------- CÁLCULOS --------
    if (forma === 'avista') {
        valorFinal = valor * 0.90;
        resultado.className = "green";
    }
    else if (forma === 'credito') {
        valorFinal = valor * 1.05;
        resultado.className = "red";
    }
    else if (forma === '2x') {
        numParcelas = 2;
        resultado.className = "orange";
    }
    else if (forma === '3x') {
        numParcelas = 3;
        valorFinal = valor * 1.10;
        resultado.className = "red";
    }
    else if (forma === '4x') {
        numParcelas = 4;
        valorFinal = valor * 1.15;
        resultado.className = "red";
    }
    else if (forma === '5x') {
        numParcelas = 5;
        valorFinal = valor * 1.20;
        resultado.className = "red";
    }

    resultado.innerHTML = `Valor final: R$ ${valorFinal.toFixed(2)}`;

    // -------- MOSTRAR PARCELAS --------
    if (numParcelas > 1) {
        const valorParcela = valorFinal / numParcelas;

        let texto = `<br><strong>${numParcelas}x de R$ ${valorParcela.toFixed(2)}</strong><br><br>`;

        parcelasDiv.innerHTML = texto;
    }
});
