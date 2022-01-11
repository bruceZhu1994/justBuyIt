import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialSharedModuleModule } from './material-shared-module/material-shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialSharedModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
