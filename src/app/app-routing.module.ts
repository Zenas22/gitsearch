import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatuComponent } from './watu/watu.component';
import { ViunguComponent } from './viungu/viungu.component';

const routes: Routes = [
  {path:"watu",component:WatuComponent},
  {path:"viungu",component:ViunguComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
