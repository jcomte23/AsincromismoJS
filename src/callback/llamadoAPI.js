const XMLHttpRequest = require ('xmlhttprequest');
const endPoindAPI="https://api.escuelajs.co/api/v1"

function llamadoAPI(urlAPI,callback) {
    let xhttp=new XMLHttpRequest()
    xhttp.open('GET',urlAPI,true)
    xhttp.onReadyStateChange = function (event) {
        if (xhttp.readyState===4) {
            if (xhttp.status===200) {
                callback(null,JSON.parse(xhttp.responseText))
            }
        }else{
            const erro=new Error('error'+urlAPI)
            return callback(error,null)
        }
    }
    xhttp.send();
}