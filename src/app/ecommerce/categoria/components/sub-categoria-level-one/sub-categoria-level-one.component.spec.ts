import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaLevelOneComponent } from './sub-categoria-level-one.component';

describe('SubCategoriaLevelOneComponent', () => {
  let component: SubCategoriaLevelOneComponent;
  let fixture: ComponentFixture<SubCategoriaLevelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriaLevelOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
