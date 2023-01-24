import { ProductosService } from './../../service/productos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements  OnInit {

  productosList: any [] = [];
  constructor (private productosService: ProductosService, private router: Router){}
  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data:any) => {
      console.log(data)
      this.productosList = [...data]
    })
  }
  updateProduct(producto: any){
    this.productosService.setProducto(producto)
    this.router.navigate([`/editarProducto/${producto.id}`]);
  }

}
