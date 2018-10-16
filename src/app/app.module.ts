import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
