//importacion del paquete y constante de endpoint

import fetch from "node-fetch"
const endPoindAPI="https://api.escuelajs.co/api/v1"

async function llamadoAPI(urlAPI) {
    const response= await fetch(urlAPI)
    const data=await response.json()
    return data
}

const ejecutarLlamado=async(urlAPI)=>{
    try {
        const products=await llamadoAPI(`${urlAPI}/products`)
        const product=await llamadoAPI(`${urlAPI}/products/${products[0]?.id}`)
        const category=await llamadoAPI(`${urlAPI}/categories/${product?.category?.id}`)

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

ejecutarLlamado(endPoindAPI)