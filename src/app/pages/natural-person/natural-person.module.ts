import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonConsultComponent } from './natural-person-consult/natural-person-consult.component';
import { NaturalPersonComponent } from './natural-person.component';
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
  declarations: [
    NaturalPersonConsultComponent, 
    NaturalPersonComponent
  ]
})
export class NaturalPersonModule { }
