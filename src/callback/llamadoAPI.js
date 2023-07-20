//variable para establecer conexion con la API
const XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
const endPoindAPI="https://api.escuelajs.co/api/v1"

//funcion principal que obtendrá la informacion del producto como un objeto
function llamadoAPI(urlAPI,callback) {
    let xhttp=new XMLHttpRequest()
    xhttp.open('GET',urlAPI,true)
    xhttp.onReadyStateChange = function (event) {
        if (xhttp.readyState===4) {
            if (xhttp.status===200) {
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error=new Error('error'+urlAPI)
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

llamadoAPI(`${endPoindAPI}/products`,function(error1,data1) {
    if (error1) {
        return console.error(error1);
    }
    llamadoAPI(`${endPoindAPI}/products/${data1[0].id}`,function(error2,data2){
        if (error2) {
            return console.error(error2);
        }
        llamadoAPI(`${endPoindAPI}/categories/${data2?.category?.id}`,function (error3,data3) {
            if (error2) {
                return console.error(error3);
            }
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})