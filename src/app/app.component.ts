import { HeladoService } from './helado.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

    TraerTodos(){
      this.miHeladoServicio.traertodos('helados/', 'todos').then(data => {
        this.listado = data;
      } )
    }
}
