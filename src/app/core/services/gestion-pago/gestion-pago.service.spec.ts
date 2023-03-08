import { TestBed } from '@angular/core/testing';

import { GestionPagoService } from './gestion-pago.service';

describe('GestionPagoService', () => {
  let service: GestionPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
