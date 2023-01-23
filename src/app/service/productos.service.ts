import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  db_url:string = 'http://localhost:3000/products'
  producto: any;
  id!: number;

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(this.db_url)
  }

  getProducto(id: number){
    return this.http.get(`${this.db_url}/${id}`);
  }

  postProducto(producto: any){
    return this.http.post(this.db_url, producto);
  }

  setProducto(producto: any){
    this.producto = producto;
    this.id = producto.id;
  }
}
