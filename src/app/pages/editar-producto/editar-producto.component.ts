import { ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../service/productos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent {
  productoForm!: FormGroup;
  id: number = this.productoService.id;
  editarProducto: any = this.productoService.producto;

  constructor(private formBuilder: FormBuilder, private productoService: ProductosService, private ActivatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {

this.productoForm = this.formBuilder.group({
  image: [this.editarProducto.image, [Validators.required]],
  name: [this.editarProducto.name, [Validators.required]],
  description: [this.editarProducto.description, [Validators.required]],
  price: [this.editarProducto.price, [Validators.required]],
  stars: [0, [Validators.required]],
});
this.productoForm!.valueChanges.subscribe(changes => {
  this.editarProducto = changes
})
}

  onSubmit(){
    console.log(this.editarProducto)
    this.productoService.postProducto(this.editarProducto).subscribe((data) =>{
    // console.log(data);
  })
  this.productoForm.reset(); 
}
}
