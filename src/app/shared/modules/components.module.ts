import { NgModule, Component } from '@angular/core';
import { DashboardModule } from 'src/app/viewcomponents/dashboard/dashboard.module';

const data = [DashboardModule]

@NgModule({
  imports: data,
  exports: data,
  declarations: [],
  providers: [],
})
export class ComponentModule { }
