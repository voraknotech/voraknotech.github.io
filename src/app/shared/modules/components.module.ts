import { NgModule, Component } from '@angular/core';
import { VoraknoHeaderModule } from 'src/app/components/shared/vorakno-header/vorakno-header.module';
import { DashboardModule } from 'src/app/components/view/dashboard/dashboard.module';

const data = [DashboardModule, VoraknoHeaderModule];

@NgModule({
  imports: data,
  exports: data,
  declarations: [],
  providers: [],
})
export class ComponentModule { }
