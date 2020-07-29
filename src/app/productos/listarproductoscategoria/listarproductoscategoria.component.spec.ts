import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductoscategoriaComponent } from './listarproductoscategoria.component';

describe('ListarproductoscategoriaComponent', () => {
  let component: ListarproductoscategoriaComponent;
  let fixture: ComponentFixture<ListarproductoscategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductoscategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductoscategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
