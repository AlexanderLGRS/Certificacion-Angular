import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Bruce Wayne'
    alterEgo: string = 'Batman'
    edad: number = 35
    obtenerNombre = (): string => {
        return `${this.nombre} - ${this.edad}`
    }
    changeHero = () => {
        this.nombre = 'Piter Parker'
        this.alterEgo = 'SpiderMan'
    }
    changeAge = () => {
        this.edad = 22
    }
}