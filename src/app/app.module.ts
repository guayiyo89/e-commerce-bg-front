import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarroComprasPagaModule } from './ecommerce/carro-compras-paga/carro-compras-paga.module';
import { CategoriaModule } from './ecommerce/categoria/categoria.module';
import { HomeModule } from './ecommerce/home/home.module';
import { ProductoModule } from './ecommerce/producto/producto.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    ProductoModule,
    SharedModule,
    CarroComprasPagaModule,
    HomeModule,
    CategoriaModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
