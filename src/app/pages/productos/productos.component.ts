import { ProductosService } from './../../service/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements  OnInit {

  productosList: any [] = [];
  constructor (private productosService: ProductosService){}
  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data:any) => {
      console.log(data)
      this.productosList = [...data]
    })
  }

}
