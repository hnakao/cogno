import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { JuridicPersonConsultComponent } from './juridic-person-consult/juridic-person-consult.component';
import { JuridicPersonComponent } from './juridic-person.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    JuridicPersonConsultComponent,
    JuridicPersonComponent,
  ],
})
export class JuridicPersonModule { }
