export class API {
    constructor(artista,cancion){
        this.artista = artista,
        this.cancion = cancion
    }

    async consultarApi() {
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)

        console.log(url)
        const respuesta = await url.json()

        return {
            respuesta
        }

    }


}