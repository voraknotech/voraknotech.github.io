import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";


const data = [MatToolbarModule, MatButtonModule]
@NgModule({
  imports: data,
  exports: data
})
export class MaterialsModule {

}
