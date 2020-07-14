import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarestadoproductoComponent } from './modificarestadoproducto.component';

describe('ModificarestadoproductoComponent', () => {
  let component: ModificarestadoproductoComponent;
  let fixture: ComponentFixture<ModificarestadoproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarestadoproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarestadoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
