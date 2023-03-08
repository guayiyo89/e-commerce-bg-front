import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaLevelTwoComponent } from './sub-categoria-level-two.component';

describe('SubCategoriaLevelTwoComponent', () => {
  let component: SubCategoriaLevelTwoComponent;
  let fixture: ComponentFixture<SubCategoriaLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriaLevelTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoriaLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
