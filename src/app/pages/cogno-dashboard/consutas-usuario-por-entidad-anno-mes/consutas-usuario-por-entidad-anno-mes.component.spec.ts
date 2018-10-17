import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutasUsuarioPorEntidadAnnoMesComponent } from './consutas-usuario-por-entidad-anno-mes.component';

describe('ConsutasUsuarioPorEntidadAnnoMesComponent', () => {
  let component: ConsutasUsuarioPorEntidadAnnoMesComponent;
  let fixture: ComponentFixture<ConsutasUsuarioPorEntidadAnnoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsutasUsuarioPorEntidadAnnoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsutasUsuarioPorEntidadAnnoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
