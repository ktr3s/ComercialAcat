import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproductoclienteComponent } from './detalleproductocliente.component';

describe('DetalleproductoclienteComponent', () => {
  let component: DetalleproductoclienteComponent;
  let fixture: ComponentFixture<DetalleproductoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleproductoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleproductoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
