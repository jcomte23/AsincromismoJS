//ejemplo basico de que es una promesa
const promesa = new Promise((resolve, reject) => {
    resolve('la promesa se cumplio correctamente')
})

// Función que devuelve una promesa
function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        // Simulamos una tarea asincrónica que se resuelve después de 2 segundos
        setTimeout(() => {
            const resultado = "¡Promesa resuelta exitosamente!";
            resolve(resultado); // Resolvemos la promesa con el resultado
        }, 10000); // Esperamos 2 segundos
    });
}

// Uso de la promesa
console.log("Iniciando la promesa...");

ejemploPromesa()
    .then((resultado) => {
        console.log("Promesa resuelta:", resultado);
    })
    .catch((error) => {
        console.error("Ocurrió un error:", error);
    });

console.log("Promesa en progreso...");

//ejemplo practico
const vacas = 2

const conteoVacas = new Promise((resolve, reject) => {
    if (vacas > 10) {
        resolve(`tenemos ${vacas} vacas, podemos cumplir`)
    } else {
        reject(`no tenemos suficientes vacas para cumplir el pedido`)
    }
})

conteoVacas.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.error(error);
}).finally(()=>console.log('gracias por preguntar la consulta finalizo'))