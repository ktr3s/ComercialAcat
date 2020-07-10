import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroproductorComponent } from './registroproductor.component';

describe('RegistroproductorComponent', () => {
  let component: RegistroproductorComponent;
  let fixture: ComponentFixture<RegistroproductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroproductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroproductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
