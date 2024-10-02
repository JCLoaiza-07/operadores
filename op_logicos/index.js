//!Conjunción (&&)(AND)
//TODO Evalúa si ambas condiciones son verdaderas.
let esEstudiante = true;
let tieneBuenPromedio = true;

if (esEstudiante && tieneBuenPromedio) {
    console.log("El estudiante es elegible para la beca");
} else {
    console.log("El estudiante no cumple con los requisitos para la beca")
}

//!Disyunción (||)(OR)
//TODO Evalúa si al menos una de las condiciones es verdadera.
let estaLloviendo = true;
let tengoParaguas = false;

if (estaLloviendo || tengoParaguas) {
    console.log("No me mojaré");
} else {
    console.log("Necesito un paraguas");
}

//!Negación (!)(NOT)
//TODO Invierte el valor de una condición.
let esDeNoche = false;

if (!esDeNoche) {
    console.log("Es de día");
} else {
    console.log("Es de noche");
}

//!Validar el acceso a un sistema
let userName = "admin";
let password = "12345";

if (userName === "admin" && password === "12345") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado. Verifique sus credenciales");
}

//!Determinar si un número es divisible por 3 y por 5
let numero = 15;

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("El número es divisible por 3 y por 5");
} else {
    console.log("El número no es divisible por 3 y por 5");
}

//!Verificar si un estudiante tiene aprobado un curso y si ha asistido al 80% de las clases
let notaExamen = 80;
let asistenciaClases = 0.8;
let notaMinimaAprobacion = 70;
let asistenciaMinimaRequerida = 0.75;

if (notaExamen >= notaMinimaAprobacion && asistenciaClases >= asistenciaMinimaRequerida) {
    console.log("El estudiante ha aprobado el curso");
} else {
    console.log("El estudiante no ha aprobado el curso");
}