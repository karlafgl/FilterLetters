import {formularioBuscar, divBuscar, divMensajes, divResultado} from './interfaz.js'
import { API } from './api.js'

formularioBuscar.addEventListener('submit',(e)=> {
    e.preventDefault()
    
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value
  
    if(artista === "" || cancion === "") {
        divMensajes.innerHTML = 'Error, All fields are required'
        divMensajes.classList.add('error')
        setTimeout(() => {
            divMensajes.innerHTML = '';
            divMensajes.classList.remove('error')
        },3000)
    } else {
        const api = new API(artista, cancion)
        api.consultarApi().then(data => {
            console.log(data)
        })

    }

})