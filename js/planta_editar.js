console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
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