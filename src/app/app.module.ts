import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {Parrafo} from './components/parrafo/parrafo.component';
@NgModule({
  declarations: [
    //Componentes que se utilizan en el modulo, se agregan para poder utiñizarlos en cualquie parte de este modulo
    AppComponent,
    NavbarComponent,
    Parrafo
  ],
  imports: [
    //Otros modulos que son necesarios en este modulo
    BrowserModule
  ],
  providers: [], //servicios necesarios
  bootstrap: [AppComponent] //hace referencia al componente raiz del modulo
})
export class AppModule { }

//CARGA LA APP Y DECLARA DEPENDENCIAS