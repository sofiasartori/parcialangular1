import { MiHttpService } from './mi-http.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArchivosHeladosService {

  api = '';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerHelados(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo jugadores');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }
//Validaciones https://github.com/mmirotta/FormValidator
/*el php tiene que estar corriendo en el xamp, en htdocs y en api le tengo que poner la url del proyecto php levantado
y en ruta el componente del helado q quiero traer o algo asi...*/
}
