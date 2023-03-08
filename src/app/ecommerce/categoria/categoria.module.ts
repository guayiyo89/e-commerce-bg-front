import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { SubCategoriaLevelOneComponent } from './components/sub-categoria-level-one/sub-categoria-level-one.component';
import { SubCategoriaLevelTwoComponent } from './components/sub-categoria-level-two/sub-categoria-level-two.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';



@NgModule({
  declarations: [
    CategoriaComponent,
    SubCategoriaLevelOneComponent,
    SubCategoriaLevelTwoComponent,
    CardProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriaModule { }
