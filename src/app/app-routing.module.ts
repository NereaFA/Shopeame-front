import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'gestion', component: GestionComponent
  },
  {
    path: ':id', component: ProductosComponent
  },
  {
    path: 'nuevoProducto', component: NuevoProductoComponent
  },
  {
    path: 'editarProducto/:id', component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
