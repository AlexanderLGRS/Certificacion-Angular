import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{title}}</h1>
            <h3>La base es: <strong>{{step}}</strong></h3>
            <button (click)="changeNumber(-step)"> - {{step}}</button>
            <span> {{myNumber}} </span>
            <button (click)="changeNumber(step)"> + {{step}}</button>
        `,
})
export class ContadorComponent {
    title = 'Contador App';
    myNumber = 0
    step = 5

    changeNumber = (step: number) => {
        this.myNumber += step
    }
}