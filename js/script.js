const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', function () {
  const valor = Number(document.querySelector('#valor').value);
  const forma = document.querySelector('#formaPagamento').value;

  let valorFinal = 0;

  if (forma === 'avista') {
    valorFinal = valor * 0.90;
    resultado.className = 'verde';
  } 
  else if (forma === 'credito') {
    valorFinal = valor * 1.05;
    resultado.className = 'vermelho';
  } 
  else if (forma === '2x') {
    valorFinal = valor;
    resultado.className = 'laranja';
  } 
  else if (forma === '3x') {
    valorFinal = valor * 1.10;
    resultado.className = 'vermelho';
  }

  resultado.innerHTML = "Valor final: R$ " + valorFinal.toFixed(2);
});
