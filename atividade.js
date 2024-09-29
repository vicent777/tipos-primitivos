/*Crie um programa que:
- Declare  uma variável chamada NOME e atribua seu nome a ela;
- Declare  uma variável chamada IDADE e atribua sua idade a ela;
- Imprima na tela uma mensagem como: "Olá, meu nome é[] e tenho[] anos."*/

let nome = "Vinicius"
let idade = 29
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`); 

/*Crie um programa que:
- Declare uma variável para NOME e para CIDADE;
- Armazene as informações do tipo STRING em variáveis e imprima uma mensagem pensonalizada como: "[NOME] é de [CIDADE]."*/

nome = "Maria"
let cidade = "Recife"
console.log(`${nome} é de ${cidade}.`)

/*Crie um programa que:
- Declare duas variáveis numéricas: num1 e num2.
-Realize as quatro operações básicas(+,-, *, /), e imprima os resultados.*/

let num1 = 10
let num2 = 5

let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2
console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);

/*Cálculo de Área:
-Declare duas variáveis numéricas: base e altura.
-Armazene nas variáveis a base e a altura de um triângulo.
-Calcule a área e exiba o resultado.
-Exemplo: “Aárea do triângulo é _______”.*/

let base = 4
let altura = 6
let area = (base * altura) / 2
console.log(`A área do triângulo é: ${area}`);

/*Cálculo de Média:
-Declare variáveis para inserir 3 notas de um aluno.
-Crie uma nova variável chamada media, nela deve conter o cálculo da média das 3 notas.
-Exiba oresultado da média, informado a nota final.
-Exemplo: “O resultado da média é __________’”.*/

let nota1 = 7
let nota2 = 10
let nota3 = 4
let media = (nota1 + nota2 + nota3) / 3;
console.log(`O resultado da média é ${media}.`)

/*Desconto:
-Crie um programa que calcule o valor final de um produto com desconto.
-As variáveis devem informar o preço original e o percentual de desconto.
-Exiba o resultado com uma mensagem personalizada.*/

let produto = 2000
let desconto = 30
let desconto_produto = (produto * desconto)/100
let preço_final = produto - desconto_produto
console.log(`Baixou, Baixou! Super saldão! Televisão de: R$ ${produto}, por apenas R$ ${preço_final}. É um desconto de R$ ${desconto_produto}.`)

/*Imposto de Renda:
-Simule um cálculo simplificado de imposto de renda, considerando uma tabela de alíquotas.
-A variável deve informar o salário bruto.
-Exiba o resultado com uma mensagem personalizada.*/

let salario_bruto = 5000
let IR;

if (salario_bruto <= 2259.20){
    IR = 0
}else if(salario_bruto <= 2826.65){
    IR = ((salario_bruto * 7.5)/100) - 142.80
}else if(salario_bruto <= 3751.05){
    IR = ((salario_bruto * 15)/100) - 354.80
}else if(salario_bruto <= 4664.68){
    IR = ((salario_bruto * 22.5)/100) - 636.13
}else{
    IR = ((salario_bruto * 27.5)/100) - 869.36
}

let salario_liquido = salario_bruto - IR;

console.log(`O salário liquido é de R$ ${salario_liquido} e o imposto descontado é de R$ ${IR}.`)


/*Conversor de Moedas:
-Crie um conversor de moedas, considerando taxas de câmbio atualizadas.
-As variáveis devem guardar o valor das moedas inicial e final.
-Exiba o resultado com uma mensagem personalizada.*/

let cambio_dolar = 5.43
let reais = 1000
let conversao = reais / cambio_dolar

console.log(`R$${reais} convertidos para a moeda americana é equivalente a $${conversao.toFixed(2)} dolares na cotação atual.`)

/* Convertendo Celsius para Fahrenheit
-Crie uma variável para a temperatura em Celsius e faça a conversão para
-Fahrenheit usando a fórmula (Celsius * 9/5) + 32.
-Exiba o resultado com uma mensagem personalizada.*/

let celsius = 100
let fahrenheit = (celsius * 9/5) + 32

console.log(`A temperatura de ebulição da água em celsius é de: ${celsius} graus enquanto em fahrenheit é de ${fahrenheit} graus.`)

/*Calculadora de IMC (Índice de Massa Corporal)
-Crie variáveis para peso (em kg) e altura (em metros).
-Calcule o IMC utilizando a fórmula: IMC = peso / (altura * altura).
-Exiba oresultado no console.
-Pesquise sobre o método toFixed-*/

let peso = 73
altura = 1.78
let IMC = peso / (altura * altura)

console.log(IMC.toFixed(2))