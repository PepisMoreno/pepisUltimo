function guardar() {
    let nco = document.getElementById("nombreComun").value
    let nci = document.getElementById("nombreCientif").value
    let i = document.getElementById("imagen").value


    let producto = {
        nombreComun: nco,
        nombreCientif: nci,
        imagen: i
    }
    let url = "http://localhost:5000/plantas"
    var options = {
        body: JSON.stringify(planta),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./plantas.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
