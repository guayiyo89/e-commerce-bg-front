import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() results: Producto[] = []
  currentPageResults: Producto[] = [];
  pageSize = 4;
  lastPage = 1;
  currentPage = 1;

  constructor() { }

  ngOnInit() {
  }

  calcularPaginas(array: Producto[], page_size: number) {
    let totalPaginas;
    if (array.length % page_size == 0) {
      totalPaginas = array.length / page_size;
    } else {
      totalPaginas = Math.trunc(array.length / page_size) + 1;
    }
    return totalPaginas;
  }

  paginate(array: Producto[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  nextPage() {
    if (this.currentPage != this.lastPage) {
      this.currentPage++;
      this.currentPageResults = this.paginate(
        this.results,
        this.pageSize,
        this.currentPage
      );
    }
  }

  beforePage() {
    if (this.currentPage != 1) {
      this.currentPage--;
      this.currentPageResults = this.paginate(
        this.results,
        this.pageSize,
        this.currentPage
      );
    }
  }

  showFirstPage() {
    this.currentPageResults = this.paginate(this.results, this.pageSize, 1);
    this.currentPage = 1;
  }

  showLastPage() {
    this.currentPageResults = this.paginate(
      this.results,
      this.pageSize,
      this.lastPage
    );
    this.currentPage = this.lastPage;
  }

}
