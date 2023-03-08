import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { OrdenPagoComponent } from './orden-pago/orden-pago.component';



@NgModule({
  declarations: [
    CarroComprasComponent,
    OrdenPagoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarroComprasPagaModule { }
