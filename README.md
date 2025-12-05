# Calculadora de Pagamentos Simples
<li> Olá! Este é o meu projeto de Calculadora de Pagamentos, que eu fiz para aprender a usar HTML, CSS e JavaScript juntos de forma prática!

A ideia é simples: você coloca o valor de um produto e escolhe a forma de pagamento, e o programa calcula na hora o preço final e as parcelas, aplicando descontos ou juros.

## O Que Tem Aqui?
<li> Este projeto é feito com 3 arquivos principais:

index.html (A Estrutura):

Contém a estrutura da calculadora.

Tem um campo para digitar o "Valor do Produto".

Tem um menu (dropdown) para escolher a "Forma de Pagamento".

Tem um botão "Calcular" e as áreas para mostrar o resultado final e as parcelas.

Eu até adicionei um som de click.mp3 que toca quando você aperta o botão!

css/style.css (A Aparência):

Deixa a calculadora com um visual moderno e centralizado.

Usa a cor azul (#4f7cff) nos botões e um fundo azul claro.

Os resultados finais mudam de cor para indicar se houve desconto ou juros:

Verde (.green): Desconto (À Vista).

Vermelho (.red): Juros/Acréscimo (Crédito, 3x, 4x, 5x).

Laranja (.orange): Sem juros (2x).

js/script.js (A Lógica):

Ele pega o valor e a forma de pagamento que você escolheu.

<li> Faz os cálculos:

À Vista: 10% de desconto (multiplica por 0.90).

Crédito: 5% de acréscimo (multiplica por 1.05).

2 Parcelas: Sem juros.

3 Parcelas: 10% de acréscimo (multiplica por 1.10).

4 Parcelas: 15% de acréscimo (multiplica por 1.15).

5 Parcelas: 20% de acréscimo (multiplica por 1.20).

<li> Mostra o Valor Final formatado como R$ XX.XX.

Se for parcelado, ele calcula o valor de cada parcela e mostra o resultado.

## Como Usar
<li> Baixe (ou clone) os arquivos do projeto.

index.html

css/style.css

js/script.js

audio/click.mp3

Dê dois cliques no arquivo index.html.

O projeto será aberto no seu navegador!

## Próximos Passos
<li> Adicionar validação para que o campo "Valor" não fique vazio.

<li> Fazer uma função para formatar o número para moeda (R$) de um jeito mais robusto.

<li> Permitir que o usuário escolha o número de parcelas em vez de ter um limite fixo.

## Autor

Desenvolvido por Filipe Spinola

Turma de Tecnologia em Informática para internet (Vespertino) – Senac DF
