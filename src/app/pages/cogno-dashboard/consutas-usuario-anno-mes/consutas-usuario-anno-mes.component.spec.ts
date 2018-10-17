import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsutasUsuarioAnnoMesComponent } from './consutas-usuario-anno-mes.component';

describe('ConsutasUsuarioAnnoMesComponent', () => {
  let component: ConsutasUsuarioAnnoMesComponent;
  let fixture: ComponentFixture<ConsutasUsuarioAnnoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsutasUsuarioAnnoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsutasUsuarioAnnoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
