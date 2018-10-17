import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPersonaNaturalComponent } from './consulta-persona-natural.component';

describe('ConsultaPersonaNaturalComponent', () => {
  let component: ConsultaPersonaNaturalComponent;
  let fixture: ComponentFixture<ConsultaPersonaNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPersonaNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
