import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ["Batman", "Spiderman", "Ironman", "Sirenoman", "Chico Perseve", "Thor"]
  heroeEliminado: string = ''

  borrarHeroe = () => {
    this.heroeEliminado =  this.heroes.shift() || ''
  }
}
