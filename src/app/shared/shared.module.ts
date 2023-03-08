import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule
  ]
})
export class SharedModule { }
