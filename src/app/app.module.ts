import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import {RatingModule} from 'primeng/rating';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    GestionComponent,
    HeaderComponent,
    EditarProductoComponent,
    ProductoComponent,
    NuevoProductoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
