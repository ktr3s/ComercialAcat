import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginproductorComponent } from './loginproductor.component';

describe('LoginproductorComponent', () => {
  let component: LoginproductorComponent;
  let fixture: ComponentFixture<LoginproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
