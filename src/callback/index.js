//Ejemplo 1
function saludar(nombre,apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

function procesarEntradaUsuario(nombre,apellido,callback) {
    callback(nombre,apellido);
}

procesarEntradaUsuario("javier","Combita",saludar);


//Ejemplo 2
function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,4,sum)) 
console.log(calc(2,4,rest)) 
console.log(calc(2,4,mult)) 
console.log(calc(2,4,div)) 


//Ejemplo 3

function saludar() {
    console.log('Hola JavaScript');
}
setTimeout(saludar, 2000)


//Ejemplo 4

function gretting(name,apellido) {
    console.log(`Hola ${name} ${apellido}`);
}

setTimeout(gretting, 2000, 'Maria','ortiz');