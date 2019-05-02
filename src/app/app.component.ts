import { HeladoService } from './helado.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'parcial';
  listado: any;
  miHeladoServicio: HeladoService;
  sabor: string;
  tipo: string;
  kilos: number;
  foto: MediaDevices;

  constructor(serviceHelados: HeladoService) {
    this.miHeladoServicio = serviceHelados;


  }
  ngOnInit() {
    this.TraerTodos();
  }
  TraerTodos() {
    /*this.miHeladoServicio.traertodos('helados/', '').then(data => {
      this.listado = data;
      console.log(data);
    } )*/
    this.miHeladoServicio.traertodos('helados/', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }
}
