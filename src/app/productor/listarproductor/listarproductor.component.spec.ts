import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductorComponent } from './listarproductor.component';

describe('ListarproductorComponent', () => {
  let component: ListarproductorComponent;
  let fixture: ComponentFixture<ListarproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
