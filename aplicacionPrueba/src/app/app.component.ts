import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string ="Hola amigos";
  nombre:String="";
  apellido:String="";

  constructor() {
  this.nombre="Angel";
  this.apellido="Molina";
  console.log("Inicio el constructor");

  }

  ngOnInit(){
    this.nombre="Enrique";
    this.apellido="Ortiz";
    console.log("On Init");
  }
  nombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }
  hizoClick(){
    console.log("hizo click");
  }
}
