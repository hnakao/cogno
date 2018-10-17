import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonaJuridicaComponent } from './consulta-persona-juridica.component';

describe('ConsultaPersonaJuridicaComponent', () => {
  let component: ConsultaPersonaJuridicaComponent;
  let fixture: ComponentFixture<ConsultaPersonaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPersonaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPersonaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
