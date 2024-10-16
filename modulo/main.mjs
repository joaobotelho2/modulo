// Importando as funções dos módulos 
import { somar } from './somar.mjs'; 
import { multiplicar } from './multiplicar.mjs';
import { subtrair } from './subtrair.mjs'; 
import { dividir } from './dividir.mjs'; 
import { potencia } from './potencia.mjs'; 

// Utilizando as funções importadas

const numero1 = 5;

const numero2 = 3;

const resultadoSoma = somar (numero1, numero2);

const resultadoMultiplicacao = multiplicar (numero1, numero2);

const resultadoSubtrair = subtrair (numero1, numero2);

const resultadoDividir = dividir (numero1, numero2);

const resultadoPotencia = potencia (numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);

console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);

console.log(`${numero1} - ${numero2} = ${resultadoSubtrair}`);

console.log(`${numero1} / ${numero2} = ${resultadoDividir}`);

console.log(`${numero1} % ${numero2} = ${resultadoPotencia}`);