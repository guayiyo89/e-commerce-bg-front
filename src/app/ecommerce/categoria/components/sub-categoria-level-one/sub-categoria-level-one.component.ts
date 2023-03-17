import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import { Producto } from 'src/app/shared/interfaces/producto';

@Component({
  selector: 'app-sub-categoria-level-one',
  templateUrl: './sub-categoria-level-one.component.html',
  styleUrls: ['./sub-categoria-level-one.component.css']
})
export class SubCategoriaLevelOneComponent implements OnInit {

  constructor(private productoSvc: ProductoService) { }

  listProducto: Producto[] = []
  results: Producto[] = []
  searchProducto = new FormControl('');

  ngOnInit(): void {
  }

}
