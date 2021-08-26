import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickandMorty';
  mensaje="Recibido_padre"

  metodoRecib(item : string){
    this.title=item
  }
}
