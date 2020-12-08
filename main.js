const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const direccion = document.getElementById("direccion")
const usuario = document.getElementById("usuario")
const password = document.getElementById("password")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",e=>){
    e.preventDefault()
    if(nombre.nodeValue.length < 25)
}