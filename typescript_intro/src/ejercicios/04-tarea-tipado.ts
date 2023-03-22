interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const heroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion: () => {
        return `${heroe.nombre}, ${heroe.direccion.pais}, ${heroe.direccion.ciudad}`
    }
}

console.log(heroe.mostrarDireccion())