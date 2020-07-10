import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarproductoComponent } from './ingresarproducto.component';

describe('IngresarproductoComponent', () => {
  let component: IngresarproductoComponent;
  let fixture: ComponentFixture<IngresarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
