import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarproductorComponent } from './modificarproductor.component';

describe('ModificarproductorComponent', () => {
  let component: ModificarproductorComponent;
  let fixture: ComponentFixture<ModificarproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
