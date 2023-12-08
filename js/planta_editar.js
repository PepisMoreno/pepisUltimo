console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substring(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombreComun:"",
nombreCientif:"",
imagen:"",
url:'http://127.0.0.1:5000/plantas'+id,//revisar si esta es la ruta que tiene que ir
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.nombreComun = data.nombreComun;
this.nombreCientif = data.nombreCientif;
this.imagen=data.imagen
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let planta = {
nombreComun:this.nombreComun,
nombreCientif:this.nombreCientif,
imagen:this.imagen
}
var options = {
body: JSON.stringify(planta),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../plantas.html"; //me parece que hay algun error aquí. porque cuando pongo modificar acepta el registro pero no lo muestra
})//me fije en el chat gpt y dice que así debería estar en el mismo directorio, pero este archivo (planta_editar.js) está en un directorio más adentro...
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')


//FIN DE UNA VERSION DE EDITAR.JS






console.log(location.search) // lee los argumentos pasados a este formulario
var args=location.search.substr(1).split('&');
//separa el string por los “&” creando una lista [“id=3” , “nombreComun=’papa’” , ”nombreCientifico=solanaceae”,”imagen=null”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombreComun").value = decodeURIComponent(parts[1][1])
document.getElementById("nombreCientifico").value = decodeURIComponent(parts[2][1])
document.getElementById("imagen").value =decodeURIComponent( parts[3][1])

function modificar() {
    let id = document.getElementById("id").value
    let n = document.getElementById("nombreComun").value
    let c = parseFloat(document.getElementById("nombreCientifico").value)
    let i = parseInt(document.getElementById("imagen").value)
       
    let planta = {
        nombreComun: n,
        nombreCientifico: c,
        imagen: i,
        
    }
    let url = "http://localhost:5000/plantas/"+id
    var options = {
        body: JSON.stringify(planta),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./plantas.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}



