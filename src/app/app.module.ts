import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComprasPagaModule } from './ecommerce/carro-compras-paga/carro-compras-paga.module';
import { CategoriaModule } from './ecommerce/categoria/categoria.module';
import { HomeComponent } from './ecommerce/home/home.component';
import { ProductoModule } from './ecommerce/producto/producto.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProductoModule,
    SharedModule,
    CarroComprasPagaModule,
    HomeComponent,
    CategoriaModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
