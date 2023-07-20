//importacion del paquete y constante de endpoint

import fetch from "node-fetch"
const endPoindAPI="https://api.escuelajs.co/api/v1"

function llamadoAPI(urlAPI) {
    return fetch(urlAPI)
}

// llamadoAPI(`${endPoindAPI}/products`)
//     .then(response=>response.json())
//     .then(products=>{
//         console.log(products);
//     })
//     .then(()=>{
//         console.log('hola');
//     })
//     .catch(error => console.log(error))

llamadoAPI(`${endPoindAPI}/products`)
    .then(response=>response.json())
    .then(products=>{
        console.log(products);
        return llamadoAPI(`${endPoindAPI}/products/${products[0]?.id}`)
    })
    .then(response=>response.json())
    .then(product=>{
        console.log(product.title);
        return llamadoAPI(`${endPoindAPI}/categories/${product?.category?.id}`)
    })
    .then(response=>response.json())
    .then(category=>{
        console.log(category.name)
    })
    .catch(error => console.log(error))