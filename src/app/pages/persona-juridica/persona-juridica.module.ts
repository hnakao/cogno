import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ConsultaPersonaJuridicaComponent } from './consulta-persona-juridica/consulta-persona-juridica.component';
import { PersonaJuridicaComponent } from './persona-juridica.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule
  ],
  declarations: [
    ConsultaPersonaJuridicaComponent,
    PersonaJuridicaComponent
  ]
})
export class PersonaJuridicaModule { }
