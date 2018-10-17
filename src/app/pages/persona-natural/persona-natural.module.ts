import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPersonaNaturalComponent } from './consulta-persona-natural/consulta-persona-natural.component';
import { PersonaNaturalComponent } from './persona-natural.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
     NgxEchartsModule,
     NgxChartsModule
  ],
  declarations: [ConsultaPersonaNaturalComponent, PersonaNaturalComponent]
})
export class PersonaNaturalModule { }
