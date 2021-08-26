import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public Numero : number;
  constructor() { 
    this.Numero = 0;
  }
  ngOnInit(){
    this.Numero=1;
  }
//property
id_bind = 2;
color_letra = "blue";
bandera=true;

//event
click_b(){
alert("Click de b");
}

}




//Interpolacion {{}}
//property bindign [style o atributo.algo] = "nombre de variable"
// //event binding(event listener)  va ASI: (nombre de evento) ="nombredemetodo()"
// data binding es input y output