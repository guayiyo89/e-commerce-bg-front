import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/interfaces/producto';
import { URLS } from 'src/environments/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public http: HttpClient) { }

  getPokemons1stGen(): Observable<Producto> {
    return this.http.get<Producto>(URLS.getProductos);
  }
}
