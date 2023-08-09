/*let nome;


nome = window.prompt('entre com seu nome:', 'digite seu nome nesta caixa');


document.write(' olá ' +  nome  + ' seja bem vindo ');


let frete= 10.00;


frete= 0.00;

let numero1, numero2;

numero1=723.297;
numero2=674.894;


soma = numero1 + numero2;
console.log(soma)*/



//let numero1, numero2;

//numero1 = window.prompt('digite um numero:', 'digite um numero');
//numero2 = window.prompt('digite um  segundo numero:', 'digite um  segundo numero');

//let somatotal1 = + numero1;
//let somatotal2 = + numero2;

//let soma = ( somatotal1 + somatotal2);

//console.log(soma);

//document.write(' sua soma é ' + soma);


//  let frete1 = parseFloat(prompt('digite sua primeira nota:'));

//  let frete2 = parseFloat(prompt('digite sua segunda nota:'));

//  let frete3 = parseFloat(prompt('digite sua terceira nota:'));

//  let frete4 = parseFloat(prompt('digite sua quarta nota:'));

// let soma = (frete1 + frete2 + frete3 + frete4) / 4;

// console.log(soma);

// alert ('sua media total foi de. ' + soma);





// let peso = parseFloat(prompt('digite seu peso:'));

// let altura = parseFloat(prompt('digite sua altura (cm ou metros):'));

// let pesototal = + peso;

// let alturatotal = + altura

// let altura2 = ( altura * altura );

// let IMC = ( peso / altura2 );

// console.log(IMC);

// alert ('Seu IMC é de:' + IMC);

// let numero = parseInt(prompt('digite um numero:'));

// if(numero >= 30 ) {

//   alert('o numero é maior que 30 :)');
// } else {
//    alert('O numero é menor que 30 :)')
// }

// let numero1 = (parseFloat(prompt)('DIGITE UM NUMERO'));
// let numero2 = (parseFloat(prompt)('DIGITE UM NUMERO'));

// if(numero1>numero2){
//     alert ('o primeiro número é maior');
// } else{
//     alert ('o segundo numero é maior');
// }

// let texto1 = window.prompt('digite algo');
// let texto2 = window.prompt('digite algo');

// if( texto1 === texto2) {
//     alert ('os textos são iguais');
// } else {
//     alert('os textos não são iguais');
// }


// let numero1 = 7 ;

// let numero2 = 10 ;

// let numero3 = 15 ;

// let estaEntre = numero1 > numero2 && numero1 < numero3; 

// alert('o numero está entre');


// let grausC = (parseFloat(prompt('Digite uma temperatura (Celsius)')));

// let grausF = ((grausC*1.8) + 32);

// alert('são: '+ grausF + 'F');


// let KM = (parseFloat(prompt('digite uma distância (em KM)')));

// let cm = (KM * 100.000);

// alert('são: '+ cm + 'cm');


// let D1 =parseFloat(prompt('Digite uma distância em km:'));
// let D2 = prompt('qual valor vc quer converter cm ou m?');

// let metros = (D1 * 1000);

// let cm =(D1 * 100000);

// if(D2 == 'm' || 'metros'){
//     alert('A distância de metros é de: ' + metros)
// } else {
//     (D2 == 'cm '||'centimetros')

//     alert('A distância em cm é de: ' + cm);
// }





//  if(
//     D2 == 'cm' || 'centimetros'
//  ){
//  alert ('A distância em cm é de: ' + cm)
//  } else {

//     (D1 == null )
//     alert ('nenhum valor mencionado')

//     (D2 == null )
//     alert ('nenhum valor mencionado')
//  }

// if (D2 == 'cm' && 'centimetros'){

//      alert('A distancia em centimetro é de ' + cm);
//     }

//     else{alert('Não colocou o que foi pedido')}


// let numero1 = parseFloat(prompt('Insira a distancia em km' , 'Aqui'));
// let numero2 = prompt('Converter para qual medida ( m ou cm)' , 'escreva aqui');
// let metro = (numero1 * 1000);
// let centimetro = (numero1 * 100000)

// if(numero2 == 'm' && 'metros'){                                            
// alert('A distancia em metros é de' + metro)
// } else { (numero2 == 'cm' && 'centimetros')

// alert( 'A distancia em centimetros é de ' + centimetro);}


//  let peso = parseFloat(prompt('digite seu peso:'));

//  let altura = parseFloat(prompt('digite sua altura (cm ou metros):'));

//  let IMC = peso / (altura ** 2);

//  if (IMC  < 18.5 ) {
//     alert(
//         'Você está abaixo do peso.' + IMC
//     )
//  }   else if ( IMC >= 18.5 && IMC < 25 ) {
//     alert('Seu peso está normal.' + IMC)
//  }   else if (IMC >= 25 && IMC < 30) {
//     alert('Você está acima do peso.' + IMC)
//  }   else if ( IMC >= 30 &&  IMC < 34.9 ) {
//     alert('Voçê esta obeso.' + IMC)
//  }
//      else if ( IMC >= 35 && IMC <39.9 ) {
//     alert('Você está obeso.'+ IMC)
//  }
//      else if( IMC >= 40 ){
//     alert('Você esta obeso.' + IMC)
// }


// let idadeusuario = 20;

// const maioridade = 18;

// if ( idadeusuario >= maioridade) {

//     let possuiCNH = true;

//     if (possuiCNH) 

//     alert ('Voçê é maio de idade e possui carteira de habilitação.');

// } else {
//     alert('Você é maior de idade mas não possui carteira de habilitação');
// } else {
//     alert('Você é menor de idade e não pode Dirigir.');
// }




// for (let i = 0; i < 200;   i ++) {
//     console.log(i);
// }


// let i =0;

// while (i < 100) {
//     console.log(i);
//     i++;
// }


// function gerarnumeroaleatorio() {
//     return Math.floor(math.random() * 100)  +1;
// }

// function jogoadvinhacao() {
//     const numeroaleatorio = gerarnumeroaleatorio();
//     let tentativasrestantes = 5;

//     alert(' Vamos jogar o jogo da advinhação!');
//     aleta('Tente adivinhar um numero entre 1 e 100, você tem 5 tentativas')

// for(let i = 1; i <= 5; i++){
//     const palpite = parseInt(prompt('tentativa ${i}. digite seu palpite:'));


//     if (isNaN(palpite)) {
//         alert(' digite um número');
//         continue;
//     }


//     if (palpite ===  numeroaleatorio) {
//         alert('parabens! você acertou o número em ${i} tentativas.');
//         return; 
//     } else if (palpite < numeroaleatorio) {
//         alert('tente um número maior.');
//     } else {
//         alert('Tente um número menor,');
//     }


//     tentativasrestantes - - ;

//     alert('Tentativas restantes: ${tentativasrestantes}');

//      if(tentativasrestantes ===) {
//         alert(' Suas tentativas acabaram. O número era $ {numeroaleatorio}');
//         return;
//     }   

// }
// }

// let idade = parseFloat(prompt('Digite sua idade.'));

// maioridade = 18;

//  if (idade >= maioridade) {
//     console.log('Você pode entrar no evento.')
// }
//      if (idade < maioridade) {
//         console.log('Você é menor de idade e não pode entrar no evento.')
//      }


// let nota = parseFloat(prompt('Nota conquistada pelo aluno.'));

// media = 7;

// if (nota >= media) {
//     console.log('O aluno foi aprovado.')
// } else {
//     console.log('O aluno foi reprovado.')
// }


// let preco = parseFloat(prompt('qual o valor do produto.'));

// if (preco > 100) {
//     console.log('Desconto de 10% liberado.')
// } else if (preco > 50) {
//     console.log('Desconto de 5% liberado.')
// } else if (preco <= 50) {
//     console.log('Nenhum desconto liberado')
// }



//   let peso = parseFloat(prompt('digite seu peso:'));

//   let altura = parseFloat(prompt('digite sua altura (cm ou metros):'));

//   let IMC = peso / (altura ** 2);

//   if (IMC  < 18.5 ) {
//      console.log(
//          'Você está abaixo do peso.' + IMC
//      )
//   }   else if ( IMC >= 18.5 && IMC < 25 ) {
//     console.log('Seu peso está normal.' + IMC)

//   }   else if (IMC >= 25 && IMC < 30) {
//     console.log('Você está acima do peso.' + IMC)

//   }   else if ( IMC >= 30 &&  IMC < 34.9 ) {
//     console.log('Voçê esta obeso.' + IMC)

//   }
//       else if ( IMC >= 35 && IMC <39.9 ) {
//         console.log('Você está obeso.'+ IMC)

//   }
//       else if( IMC >= 40 ){
//         console.log('Você esta obeso.' + IMC)
//  }

//  let grausC = (parseFloat(prompt('Digite uma temperatura (Celsius)')));

//  let grausF = ((grausC*1.8) + 32);

//  console.log('são: '+ grausF + 'F');

// let produto = window.prompt('digite um produto')

// let classe = window.prompt('esse produto de qual tipo? alimentos, bebidas ou limpeza.');

// let qtd = parseInt(prompt('Qual a quantidade deste produto há no  estoque?'));

// if (isNaN(qtd)) {
//   throw new Error( alert('digite um número'))
// }
// if (classe == 'limpeza' && qtd < 30){
//     alert('solicitar '+ produto + 'à equipe de compras, tem apenas ' + qtd + ' unidades em estoque.');
// }
//  else if (classe == 'alimentos' && qtd < 50) {
//   alert('solicitar '+ produto + 'à equipe de compras, tem apenas ' + qtd + ' unidades em estoque.');
// }
//  else if (classe == 'bebidas' && qtd < 75) {
//     alert('solicitar '+ produto + 'à equipe de compras, tem apenas ' + qtd + ' unidades em estoque.');
// }
// else if('alimentos' && qtd < 50) {
//    alert('solicitar '+ produto + 'à equipe de compras, tem apenas ' + qtd + ' unidades em estoque.');
// }
// else{
//   alert('está tudo certo.')
// }

// let dia = prompt("Digite um número de 1 a 7 para saber o nome do dia da semana;");

// let nomedia;

// switch (dia) {
// case "1":
// nomedia = "domingo.";
// break;

// case "2":
// nomedia = "segunda-feira.";
// break;

// case "3":
// nomedia = "terça-feira.";
// break;

// case "4":
// nomedia = "quarta-feira.";
// break;

// case "5":
// nomedia = "quinta-feira.";
// break;

// case "6":
// nomedia = "sexta-feira.";
// break;

// case "7":
// nomedia = "sábado.";
// break;

// default:
// nomedia = "dia inválido"; 
//  }

//  alert(nomedia);

// for (let i = 0; i < 1000000000000; i++) {
//   if (i === 1000000000000) {
//     break;
//   }
//   alert(i);
// }

// let diasemana = 1;

// switch (diasemana) {
//   case 1:
//     console.log("segunda-feira.");
//     break;
//     case 2:
//       console.log("terça-feira");
//       break;
//       case 3:
//         console.log("quarta-feira");
//         break;
//         default:
//           console.log("Dia inválido"); 
// }

// let valor = parseInt(prompt("Digite o valor"));


// let cliente = prompt("Você é que tipo de cliente? padrão, premium ou vip?");


//   if (  cliente = padrão ) {
//     console.log(10 * valor / valor == result)

//     // alert("seu preço como cliente padrão é de " + result)
//   }

// let facil = 1;

// let médio = 2;

// let dificil = 3;

// let escolhas = prompt(' Escolha sua dificuldade: normal(1), medio(2) ou dificil(3)');

// let pontos = prompt(' Coloque sua pontuação: ');

// if (escolhas== '1' || escolhas == 'normal') {
//  let total1 = pontos * escolhas ;
//  alert('sua pontuação foi de: ' + total1 + ' pontos. ');

// } 
// else if (escolhas == '2' || escolhas == 'medio') {
//  let total2 = pontos * escolhas;
//  alert('sua pontuação foi de: ' + total2 + ' pontos. '); 

// } 
// else if (escolhas == '3' || escolhas == 'dificil') {
//  let total3 = pontos * escolhas;
//  alert('sua pontuação foi de: ' + total3 + ' pontos. ');

// }



// let numero = parseInt(prompt(' Digite um numero: '));
//    if (numero % 2 === 0) {
//     alert(' O número é par' );
//  } 
//   else {
//     alert(' O Número é impar ')
// }


// let idadeusuario = parseInt(prompt('Digite sua idade.'));

// if (idadeusuario >= 1 && idadeusuario <= 13 ) {
//   alert('A faixa etária que você está é criança.');
// } 
// else if
//   (idadeusuario >= 14 && idadeusuario <= 17 ) {
//     alert('A faixa etária que você está é de adolescente');
//   }

// else if
// (idadeusuario >= 18 && idadeusuario <= 59 ) {
//   alert('A faixa etária que você está é de adulto');
// } else if  
// (idadeusuario >= 60 ) {
//   alert('A faixa etária que você está é de idoso');
// }

// let número = parseInt(prompt('Digite qualque número (inteiro).'));

// if(isNaN(número));{
//  let contadorpares = 0;

//  for ( let i = 1; 1 <= número; i++ ){
//   if(i % 2 === 0 ){
//     contadorpares++
//   }
//  }

// alert(`entre 1 = ${número}, existem ${contadorpares} números de pares.`);
// }


// // // let modo = prompt ('escolha uma operação : (+ , - , %, /)');

// // // let numero1 = parseFloat(prompt('digite um número'));

// // // let numero2 = parsefloat(prompt('digite outro numero'));


// // // let total = '';


// // // switch(modo);{
// // // case '+' 1:
// // //   valor = numero1 + numero2;
// // //   break;
// // //   case '-' 1:
// // //     valor = numero1 - numero2;
// // //     break;
// // //     case '%' 1:
// // //   valor = numero1 % numero2;
// // //   break;
// // //   case '/' 1:
// // //     valor = numero1 / numero2;
// // //     break;
// // //     default:
// // //       valor = 'nenhum calculo'
// // // } alert('O conta é de: ' + modo +' e o resultado é de: ' + valor )




//   for (let i = 10; i < 100; i--) {
//     if (i === 100) {
//       break;
//     }
//     alert(i);
//  }


// function isPrime(num) {
//   if (num <= 1 ) {
//     return false;
//   }
//   if (num <= 3 ) {
//     return true; 
//   }
//   if (num % 2 === 0 || num % 3 ===  0 ) {
//     return false;
//   }

//   for (var i = 5; i * i <= num ; 1 += 6 ){
//     if(num % i === 0 || num % ( i + 2 ) === 0) {
//       return false;
//     }
//   }
//   return true;
// } 

// var numero = parseInt(prompt(' digite um número.'));

// if (!isNaN(numero)) {
//   if (isprime(numero)) {
//     console.log(numero + ' é um número primo.');

//   }
//   else {
//     console.log(numero + 'não é número primo.');
//   }

// }


//   for (let i = 10; i < 10; i++) {
//    if (i === 10) {
//     break;
//    }
//    alert(i);
//  }

// let numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));
// const limite = 10

// while  ( numero * '' ) {
// }

// let numero = prompt ('Digite um número: ');

// let contador = 1;

// while (contador <= numero ) {

//   if (contador % 2 == 0)

//   console.log('contador: ' + contador);
//   contador++;
// }
// while (contador <= numero ) {

//   if (contador % 3 == 0)

//   console.log('contador: ' + contador);
//   contador++;
// }

//   let contador = 1;

// do{ 
//   console.log('contador: ' + contador);
//     contador++;
//   }while (contador <= 5);


// function gerarnumeroaleatorio() {
//      return Math.floor(math.random() * 100)  +1;
//  }

//  function jogoadvinhacao() {
//      const numeroaleatorio = gerarnumeroaleatorio();
//      let tentativasrestantes = 10;

//      alert(' Vamos jogar o jogo da advinhação!');
//      aleta(`Tente adivinhar um numero entre 1 e 100, você tem 5 tentativas`)}

//  for(let i = 1; i <= 5; i++) {
//      const palpite = parseInt(prompt(`tentativa ${i}. digite seu palpite:`));
//  }

//      if (isNaN(palpite)) {
//          alert(' digite um número');
//         continue;
//      }


//      if (palpite ===  numeroaleatorio) {
//          alert(`parabens! você acertou o número em ${i} tentativas.`);
//          return; 
//      } else if (palpite < numeroaleatorio) {
//          alert('tente um número maior.');
//      } else {
//          alert('Tente um número menor,');
//      }


//      tentativasrestantes - - 

//      alert(`Tentativas restantes: ${tentativasrestantes}`);

//       if (tentativasrestantes === ) {
//          alert(` Suas tentativas acabaram. O número era ${numeroaleatorio}`);
//          return;
//      }  

// let numeroAleatorio =
//   Math.floor(Math.random() * 100) + 1;

// let palpite;

// let tentativas = 0;

// do {

//   palpite = prompt("Digite um número entre 1 e 100:");

//   tentativas++;

//   if (palpite == numeroAleatorio) {

//     alert("Parabéns, você acertou o número em " +
//       tentativas + " tentativas!");
//   } else if (palpite < numeroAleatorio) {

//     alert("O número é maior! Tente novamente.");
//   } else {

//     alert("O número é menor! Tente novamente.");
//   }
// } while (palpite != numeroAleatorio);


// for (let i = 1; i<= 5; i++) {
//   console.log("contador: " + i);
// }


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

let palavraSecreta = prompt("Digite a palavra secreta:").toUpperCase();
let tamanhoPalavra = palavraSecreta.length;
let letrasJaChutadas = "";
let letrasErradas = "";
let letrasAcertadas = "";
for (let i = 0; i < tamanhoPalavra; i++) {
  letrasAcertadas += "_";
}
 const maxTentativas = 10;
 let tentativas = 0;

while ( tentativa < maxtentativas ) {
  let letra = prompt('')
}



 // while (tentativas < maxTentativas) {
//   let letra = prompt("Digite uma letra:").toUpperCase();
//   if (letrasJaChutadas.includes(letra)) {
//     alert("Você já chutou essa letra. Tente outra letra.");
//   }
//   if (palavraSecreta.includes(letra)) {
//     for (let i = 0; i < tamanhoPalavra; i++) {
//       if (palavraSecreta[i] == letra) {
//         letrasAcertadas = letrasAcertadas.substring(0, i) + letra + letrasAcertadas.substring(i + 1);
//       }
//     }
//   } else {
//     letrasErradas += letra;
//     tentativas++;
//   }
//   alert("Letras já chutadas: " + letrasJaChutadas);
//   alert("Letras erradas: " + letrasErradas);
//   alert("Palavra atual: " + letrasAcertadas);
// }
// if (letrasAcertadas == palavraSecreta) {
//   alert("Parabéns, você acertou a palavra secreta: " + palavraSecreta);
// } else {
//   alert("Você atingiu o número máximo de tentativas. A palavra secreta era: " + palavraSecreta);
// }
