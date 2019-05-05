import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorPipe } from './creator.pipe';
import { WatuComponent } from './watu/watu.component';
import { ViunguComponent } from './viungu/viungu.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorPipe,
    WatuComponent,
    ViunguComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
