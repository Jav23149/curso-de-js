

const nombre = document.getElementById('validationCustom01')
const apellido = document.getElementById ('validationCustom02')
const email = document.getElementById ('validationCustomUsername')
const provincia = document.getElementById('validationCustom03')
const consulta = document.getElementById('exampleFormControlTextarea1')
const botonIngresar = document.getElementById('btn')
const formulario = document.getElementById('formulario')
const saludar = document.getElementById('saludar')


botonIngresar.onclick = () => {
const usuario = {
Nombre: nombre.value,
Apellido: apellido.value,
Email: email.value,
Provincia: provincia.value,
Consulta: consulta.value
}
localStorage.setItem ('infoUsuario',JSON.stringify(usuario))
formulario.remove()
const saludarTitulo = document.createElement('h2')
saludarTitulo.innerText = `Recibimos tu formulario ${usuario.Nombre}, en breve te contactaremos`;
saludar.append(saludarTitulo)
}
