import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductosclienteComponent } from './listarproductoscliente.component';

describe('ListarproductosclienteComponent', () => {
  let component: ListarproductosclienteComponent;
  let fixture: ComponentFixture<ListarproductosclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproductosclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
