import { ProductosService } from './../../service/productos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.scss']
})
export class NuevoProductoComponent implements OnInit{
  productoForm!: FormGroup;
  nuevoProducto: any = {
    name: '',
    price: '',
    description: '',
    image: '',
    stars:0
  }
  constructor(private formBuilder: FormBuilder, private productoService: ProductosService){}
  ngOnInit(): void {
this.productoForm = this.formBuilder.group({
  image: ['', [Validators.required]],
  name: ['', [Validators.required]],
  description: ['', [Validators.required]],
  price: ['', [Validators.required]],
  stars: [0, [Validators.required]],
});
this.productoForm.valueChanges.subscribe(changes => {
  this.nuevoProducto = changes
})
}

  onSubmit(){
    console.log(this.nuevoProducto)
    this.productoService.postProducto(this.nuevoProducto).subscribe((data) =>{
    // console.log(data);
  })
  this.productoForm.reset(); //vacia el formulario
  // this.nuevoProducto = {
  //   name: '',
  //   price: '',
  //   description: '',
  //   image: '',
  //   stars:0
  // }
  }
}
