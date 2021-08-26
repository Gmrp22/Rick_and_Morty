import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'parrafo',
    // template: `<p>ESTE ES EL PARRAFO </p>`,
    templateUrl: 'parrafo.component.html',
    styles: [`p { color: red}`]
})

export class Parrafo{
@Input() para_hijo = '';
@Output() emitir = 
new EventEmitter<string>();
variable=1;
arrayNumeros = [1,2,3,4,5]

metodoEmit(value : string){
    this.emitir.emit(value)}

}

//Directivas atributo
