import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutasEntidadAnnoMesComponent } from './consutas-entidad-anno-mes.component';

describe('ConsutasEntidadAnnoMesComponent', () => {
  let component: ConsutasEntidadAnnoMesComponent;
  let fixture: ComponentFixture<ConsutasEntidadAnnoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsutasEntidadAnnoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsutasEntidadAnnoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
