import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { ThemeModule } from '../../@theme/theme.module';
import { CognoDashboardComponent } from './cogno-dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    CognoDashboardComponent,
  ],
})
export class CognoDashboardModule { }
