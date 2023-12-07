const { createApp } = Vue
createApp({
data() {
return {
plantas:[],
//url:'http://localhost:5000/plantas',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
url:'http://127.0.0.1:5000/plantas', // revisar si está bien la ruta local
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
nombre_comun:"",
nombre_cientifico:"",
foto:"",
}
},
methods: {
fetchData(url) {
fetch(url)

.then(response => response.json())
.then(data => {
this.plantas = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(planta) {
const url = this.url+'/' + planta;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
let planta = {
nombre_comun: this.nombre_comun,
nombre_cientifico: this.nombre_cientifico,
foto:this.foto
}
var options = {
body:JSON.stringify(planta),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "../plantas.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabar")

})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')

createApp.listen(port, '127.0.0.1',() =>{
    console.log('Escuchando en el puerto'+port);
});