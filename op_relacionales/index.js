//!Igualdad (==)
//TODO Evalúa si dos operandos son iguales en valor y tipo.
let resultadoIgualdad = 10 == "10"; //Output: false (ambos son iguales en valor pero no en tipo)
console.log(resultadoIgualdad);

//!Desigualdad (!=)
//TODO Evalúa si dos operandos son diferentes en valor o tipo.
let resultadoDesigualdad = 15 != "15"; //Output: true (ambos tienen igual valor pero no mismo tipo)
console.log(resultadoDesigualdad);

//!Menor que (<)
//TODO Compara si un operando es menor que otro en valor numérico.
let resultadoMenorQue = 8 < 12; //Output: true (8 es realmente menor que 12)
console.log(resultadoMenorQue);

//!Mayor que (>)
//TODO Comprara si un operando es mayor que otro en valor numérico.
let resultadoMayorQue = 20 > 10; //Output: true (20 es realmente mayor que 10)
console.log(resultadoMayorQue);

//!Menor o igual que (<=)
//TODO Compara si un operando es menor o igual que otro en valor numérico.
let resultadoMenorOIgualQue = 15 <= 15; //Output: true
console.log(resultadoMenorOIgualQue);

//!Mayor o igual que (>=)
//TODO Compara si un operando es mayor o igual que otro en valor numérico.
let resultadoMayorOIgualQue = 22 >= 20; //Output: true
console.log(resultadoMayorOIgualQue);

//!Validar la edad de un usuario
let edadUsuario = 18;
let edadMinima = 18;

if (edadUsuario >= edadMinima) {
    console.log("El usuario es mayor o igual a la edad mínima");
} else {
    console.log("El usuario no cumple con la edad mínima")
}

//!Verificar si un número es par o impar
let numero1 = 15;

if (numero1 % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar");
}

//!Determinar si un estudiante ha aprobado un curso
let notaExamen = 75;
let notaMinimaAprobacion = 70;

if (notaExamen >= notaMinimaAprobacion) {
    console.log("El estudiante ha aprobado el curso");
} else {
    console.log("El estudiante no ha aprobado el curso");
}