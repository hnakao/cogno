import { NgModule } from '@angular/core'; 

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

//-----cogno
import { PersonaJuridicaModule } from './persona-juridica/persona-juridica.module';
import { PersonaNaturalModule } from './persona-natural/persona-natural.module';
import { CognoDashboardModule } from './cogno-dashboard/cogno-dashboard.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    PersonaJuridicaModule,
    PersonaNaturalModule,
    CognoDashboardModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
