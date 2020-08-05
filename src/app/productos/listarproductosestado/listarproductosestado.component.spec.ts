import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductosestadoComponent } from './listarproductosestado.component';

describe('ListarproductosestadoComponent', () => {
  let component: ListarproductosestadoComponent;
  let fixture: ComponentFixture<ListarproductosestadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductosestadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductosestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
