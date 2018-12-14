import {Component} from '@angular/core';

// se recomienda usar el prefijo app para el nombre del selector
// no confundir bat tick con comillas sencillas, estas sirven para interpretar 
// codigo extenso
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

// debe tener el prefijo export para que pueda ser utilizado 
// fuera de la clase
export class HeaderComponent {
        

}