// exercicio 1
// let numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));
// const limite = 10;


// if (isNaN(numero) || isNaN(limite)) {
//   alert("Por favor, insira valores os numéricos da sua escolha.");
// } else {
//   alert(`Tabela de Multiplicação do ${numero} até o limite ${limite}:\n\n${gerarTabelaMultiplicacao(numero, limite)}`);
// }

// function gerarTabelaMultiplicacao(numero, limite) {
//   let tabela = "";
//   for (let i = 1; i <= limite; i++) {
//     tabela += `${numero} x ${i} = ${numero * i}\n`;
//   }
//   return tabela;
// }


// exercicio 2
// let pessoaMaisVelha = "";
// let idadeMaisVelha = -1;

// for (let i = 1; i <= 5; i++) {
//   let nome = prompt(`Digite o nome da pessoa ${i}:`);
//   let idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));

//   if (idade > idadeMaisVelha) {
//     idadeMaisVelha = idade;
//     pessoaMaisVelha = nome;
//   }
// }

// if (pessoaMaisVelha !== "") {
//   alert(`A pessoa mais velha é ${pessoaMaisVelha}, com ${idadeMaisVelha} anos.`);
// } else {
//   alert("Nenhum nome e idade foram fornecidos.");
// }

// correção 2

// let nomeMaisVelho;
// let idadeMaisVelho = -Infinity; // Inicia com um
// //valor baixo para garantir que o primeiro valor digitado será maior
// for (let i = 0; i < 5; i++) {
// let nome = prompt ("Digite o nome da " +
// (i+1) + "a pessoa:");
// let idade = parseInt(prompt ("Digite a idade da " + (i+1) + "a pessoa:"));
// if (idade > idadeMaisVelho) {
// idadeMaisVelho = idade;
// nomeMaisVelho = nome;
// }
// }
// alert ('A pessoa mais velha é:' + nomeMaisVelho);






//exercicio 3
// let numero = parseInt(prompt(' Digite um numero: '));
// if (numero % 2 === 0) {
// alert(' O número é par' );}
// else {
// alert(' O Número é impar ')
// }


//correção 3

// let numero;

// do{
//   numero = parseInt(prompt('Digite um número inteiro positivo:'));
// } while (isNaN(numero) || numero <= 0);
// if(numero % 2 == 0 ) {
//   alert('O número ' + numero + ' é par.');
// }else {
//   alert('O número ' + numero + ' é ímpar');
//}

// exercicio 4

        // let soma = 0;
        // let media = 0;

        // for (let i = 1; i <= 10; i++) {
        //     let num = Math.floor(Math.random() * 100) + 1;
        //     soma += num;
        // }

        // media = soma / 10;

        // document.getElementById("mediaOutput").innerHTML = "A media dos 10 numeros aleatorios gerados e: " + media.toFixed(2); 



//exercicio 5

// let dia = prompt("Digite uma palavra");

// let nomeDia;

// switch (dia) {

//   case "ada":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "afã":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "aia":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ala":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ama":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ana":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "anã":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "anilina":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "arara":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "asa":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ata":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ele":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "esse":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "Hanah":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "mamam":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "matam":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "metem":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "mirim":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "mussum":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "Natan":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "oco":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "omissíssimo":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "osso":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "Oto":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ovo":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "racificar":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "radar":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "raiar":
//     nomeDia = "esta é uma palavra palindroma";
//     break;
//   case "ralar":
//     nomeDia = "esta é uma palavra palindroma";
//     break;

//   default:
//     nomeDia = 'Esta não é uma palavra polindroma';


// }
// alert(nomeDia);

//correção 5 

// let palavra = prompt('Digite uma palavra: ');
// let tam = palvra.lenght;
// let i = 0;
// let palindromo = true;
// while (i < tam / 2 ) {
//   if (palavra[i] !== palavra[tam - i - 1]) {
//     palindromo = false;
//     break;
//   }
//   i++
// }
// if (palindromo) {
//   alert(palavra + 'é um palíndromo!');
// } else {
//   alert(palavra + 'não é um palíndromo!');
// }





