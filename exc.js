

// exercicio 1

// let numero = parseInt(prompt(' Digite um numero: '));
//    if (numero % 2 === 0) {
//     alert(' O número é par' );
//   } 
//    else {
//      alert(' O Número é impar ')
//  }

// exercicio 2

//  let idadeusuario = parseInt(prompt('Digite sua idade.'));

//  if (idadeusuario >= 1 && idadeusuario <= 13 ) {
//    alert('A faixa etária que você está é criança.');
//  } 
//  else if
//    (idadeusuario >= 14 && idadeusuario <= 17 ) {
//      alert('A faixa etária que você está é de adolescente');
//    }

//  else if
//  (idadeusuario >= 18 && idadeusuario <= 59 ) {
//    alert('A faixa etária que você está é de adulto');
//  } else if  
// (idadeusuario >= 60 ) {
//    alert('A faixa etária que você está é de idoso');
//  }

//  exercicio 3


//   let número = parseInt(prompt('Digite qualque número (inteiro).'));

//   if(isNaN(número));{
//    let contadorpares = 0;

//    for ( let i = 1; 1 <= número; i ++ ){
//    if(i % 2 === 0 ){
//      contadorpares++
//     }
//  }

//   alert(`entre 1 = ${número}, existem ${contadorpares} números de pares.`);
//   }


// exercicio 4

// let operação = parseInt(prompt('Qual operação você quer (soma, subtração, multiplicação, divisão.)'));

// let numero1 = parseInt(prompt('digite um número. '));

// let numero2 = parseInt(prompt('digite outro número. '));

// switch (operação) {
//     case 'soma' :
//     conta = numero1 + numero2;    
//     break;
//     case 'subtração' :
//         conta = numero1 - numero2;   
//         break;
//         case 'multiplicação' :
//             conta = numero1 % numero2;   
//             break;
//             case 'divisão' :
//                 conta = numero1 / numero2;   
//                 break;
                

// } alert('O calculo foi de ' + operação + 'e o resultado foi de: ' + conta )

 let modo = prompt ('escolha uma operação : (+ , - , %, /)');

 let numero1 = parseFloat(prompt('digite um número'));

 let numero2 = parsefloat(prompt('digite outro numero'));


 let total = '';


 switch(modo);{
 case '+' 1:
   valor = numero1 + numero2;
   break;
   case '-' 1:
     valor = numero1 - numero2;
     break;
    case '%' 1:
   valor = numero1 % numero2;
  break;
   case '/' 1:
     valor = numero1 / numero2;
     break;
    default:
       valor = 'nenhum calculo'
 } alert('O conta é de: ' + modo +' e o resultado é de: ' + valor )
