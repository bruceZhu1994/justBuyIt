import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MaterialSharedModuleModule } from '../material-shared-module/material-shared-module.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialSharedModuleModule
  ]
})
export class NavbarModule { }
