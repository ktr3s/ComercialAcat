import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproductorComponent } from './detalleproductor.component';

describe('DetalleproductorComponent', () => {
  let component: DetalleproductorComponent;
  let fixture: ComponentFixture<DetalleproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
