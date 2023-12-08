const { createApp } = Vue
    createApp({
        data() {
            return {
                plantas: [],
                url:'http://127.0.0.1:5000/plantas', // si el backend esta corriendo local usar localhost 5000
                 //url:'https://.pythonanywhere.com/plantas', // si ya lo subieron a pythonanywhere
                error: false,
                cargando: true,
                /*atributos para el guardar los valores del formulario */
                id:0,
                nombreComun:"",
                nombreCientif:"",
                imagen:""
                
            }
            },
            methods: {
                fetchData(url) {
                    fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.plantas = data;
                        this.cargando = false
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })
            },
            eliminar(planta) {
                const url = this.url + '/' + planta;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                .then(res => res.json()) // or res.json()
                .then(res => {
                    location.reload();
                })
            },
            grabar() {
                let planta = {
                    nombreComun: this.nombreComun,
                    nombreCientif: this.nombreCientif,
                    imagen: this.imagen
                }
                var options = {
                body: JSON.stringify(planta),
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow'
                }
                fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./identificador_de_plantas.html";
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