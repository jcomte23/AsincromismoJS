const fnAsincrona = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Asinc!!')
            }, 2000)
            : reject(new Error('Error!'))
    })
}

const otraFuncion = async () => {
    const somethig = await fnAsincrona()
    console.log(somethig);
    console.log("hola familia");
}

console.log("before");
otraFuncion()
console.log("after");

//otro ejemplo
function sumaAsincrona(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = num1 + num2;
            if (resultado>=20) {
                resolve(console.log(`la suma dio: ${resultado}`));
            }else{
                reject(console.error(`la suma dio: ${resultado}, NO supero el umbral`))
            }
        }, 5000); // Simulamos una tarea que toma tiempo (1 segundo)
    });
}

async function obtenerResultado(num1,num2) {
    try {
        await sumaAsincrona(num1, num2);
    } catch (error) {
        console.error(error);
    }
}

console.log("la suma debe superar 20 para que la promesa se cumpla");
console.log("inicio de la promesa");
obtenerResultado(52,4);
console.log("terminacion de la promesa");