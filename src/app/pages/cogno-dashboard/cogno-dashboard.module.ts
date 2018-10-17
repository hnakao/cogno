import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { ThemeModule } from '../../@theme/theme.module';
import { ConsutasUsuarioAnnoMesComponent } from './consutas-usuario-anno-mes/consutas-usuario-anno-mes.component';
import { ConsutasEntidadAnnoMesComponent } from './consutas-entidad-anno-mes/consutas-entidad-anno-mes.component';
import { ConsutasUsuarioPorEntidadAnnoMesComponent } from './consutas-usuario-por-entidad-anno-mes/consutas-usuario-por-entidad-anno-mes.component';
import { ConsutasEntidadComponent } from './consutas-entidad/consutas-entidad.component';
import { CognoDashboardComponent } from './cogno-dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NgxEchartsModule,
    NgxChartsModule

  ],
  declarations: [
    ConsutasUsuarioAnnoMesComponent, 
    ConsutasEntidadAnnoMesComponent, 
    ConsutasUsuarioPorEntidadAnnoMesComponent, 
    ConsutasEntidadComponent, CognoDashboardComponent
  ]
})
export class CognoDashboardModule { }
