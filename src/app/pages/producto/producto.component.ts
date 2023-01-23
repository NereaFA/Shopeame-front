import { ProductosService } from './../../service/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{
  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute){ }
  id!: number;
  producto!:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productosService.getProducto(this.id).subscribe((data:any) => {
      this.producto = data;
      this.productosService.setProducto(data);
    })
  }

}
