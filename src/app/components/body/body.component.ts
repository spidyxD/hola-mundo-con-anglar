import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;
    phrase: any = {
    message: 'The end is part of the journey',
    author:  'Tony Stark'
    };
    personajes: string[] = ['Thanos', 'Ironman', 'Captain Marvel'];
}

