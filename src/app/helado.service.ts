import { ArchivosHeladosService } from './archivos-helados.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  constructor(public miHttp: ArchivosHeladosService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerHelados('helados/').then(data => {
      console.log('helado service', data);
      return data;
    });

  }
}
