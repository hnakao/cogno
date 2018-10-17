import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutasEntidadComponent } from './consutas-entidad.component';

describe('ConsutasEntidadComponent', () => {
  let component: ConsutasEntidadComponent;
  let fixture: ComponentFixture<ConsutasEntidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsutasEntidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsutasEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
